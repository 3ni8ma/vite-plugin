// Build: 2026-07-19 15:00:13 | run 1784487613
import { type Plugin, type ResolvedConfig, normalizePath } from "vite";
import { resolve, relative } from "path";
import { writeFileSync, existsSync, mkdirSync } from "fs";

interface SitemapRoute {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
  lastmod?: string;
}

interface SitemapOptions {
  hostname: string;
  routes?: (string | SitemapRoute)[];
  changefreq?: string;
  priority?: number;
  lastmod?: string;
  outDir?: string;
  disallow?: string[];
  pretty?: boolean;
  images?: boolean;
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function sitemap(options: SitemapOptions): Plugin {
  const {
    hostname,
    routes = [],
    changefreq = "weekly",
    priority = 0.5,
    lastmod = new Date().toISOString().split("T")[0],
    outDir = "dist",
    disallow = [],
    pretty = false,
    images = false,
  } = options;

  let config: ResolvedConfig;

  return {
    name: "vite-plugin-sitemap",
    enforce: "post",

    configResolved(resolvedConfig) {
      config = resolvedConfig;
    },

    closeBundle() {
      const resolvedOutDir = config.root
        ? resolve(config.root, outDir)
        : resolve(outDir);

      if (!existsSync(resolvedOutDir)) {
        mkdirSync(resolvedOutDir, { recursive: true });
      }

      const cleanHostname = hostname.replace(/\/+$/, "");
      const indent = pretty ? "  " : "";
      const nl = pretty ? "\n" : "";

      let urlSet = "";

      const allRoutes: SitemapRoute[] = routes.map((route) => {
        if (typeof route === "string") {
          return { path: route };
        }
        return route;
      });

      if (allRoutes.length === 0) {
        const defaultRoute: SitemapRoute = { path: "/" };
        allRoutes.push(defaultRoute);
      }

      for (const route of allRoutes) {
        const loc = `${cleanHostname}${route.path.startsWith("/") ? "" : "/"}${route.path}`;
        const rChangefreq = route.changefreq || changefreq;
        const rPriority = route.priority ?? priority;
        const rLastmod = route.lastmod || lastmod;

        urlSet += `${indent}<url>${nl}`;
        urlSet += `${indent}${indent}<loc>${escapeXml(loc)}</loc>${nl}`;
        urlSet += `${indent}${indent}<lastmod>${rLastmod}</lastmod>${nl}`;
        urlSet += `${indent}${indent}<changefreq>${rChangefreq}</changefreq>${nl}`;
        urlSet += `${indent}${indent}<priority>${rPriority}</priority>${nl}`;
        urlSet += `${indent}</url>${nl}`;
      }

      const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>${nl}<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${nl}${urlSet}</urlset>${nl}`;

      const sitemapPath = resolve(resolvedOutDir, "sitemap.xml");
      writeFileSync(sitemapPath, sitemapXml);

      const hasCustomRobots = disallow.length > 0;
      if (hasCustomRobots) {
        let robotsTxt = `User-agent: *${nl}`;
        for (const path of disallow) {
          robotsTxt += `Disallow: ${path}${nl}`;
        }
        robotsTxt += `${nl}Sitemap: ${cleanHostname}/sitemap.xml${nl}`;
        const robotsPath = resolve(resolvedOutDir, "robots.txt");
        writeFileSync(robotsPath, robotsTxt);
      } else {
        const robotsTxt = `User-agent: *${nl}Allow: /${nl}${nl}Sitemap: ${cleanHostname}/sitemap.xml${nl}`;
        const robotsPath = resolve(resolvedOutDir, "robots.txt");
        writeFileSync(robotsPath, robotsTxt);
      }
    },
  };
}

export default sitemap;
export { sitemap };
export type { SitemapOptions, SitemapRoute };
