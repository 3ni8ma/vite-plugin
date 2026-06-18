import { type Plugin, type ResolvedConfig } from 'vite'
import { writeFileSync, mkdirSync } from 'fs'
import { resolve, relative } from 'path'

interface SitemapOptions {
  hostname: string
  routes: string[]
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
  lastmod?: Date
  outDir?: string
  robotsTxt?: boolean
  disallow?: string[]
}

function escapeXml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function sitemap(options: SitemapOptions): Plugin {
  let config: ResolvedConfig

  return {
    name: 'vite-plugin-sitemap',
    enforce: 'post',

    configResolved(resolved) {
      config = resolved
    },

    closeBundle() {
      const {
        hostname,
        routes,
        changefreq = 'monthly',
        priority = 0.7,
        lastmod = new Date(),
        outDir = config.build.outDir,
        robotsTxt = true,
        disallow = [],
      } = options

      const resolvedOutDir = resolve(config.root, outDir)
      mkdirSync(resolvedOutDir, { recursive: true })

      const lastmodStr = lastmod.toISOString().split('T')[0]

      let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
      xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

      for (const route of routes) {
        const url = `${hostname.replace(/\/$/, '')}/${route.replace(/^\//, '')}`
        xml += '  <url>\n'
        xml += `    <loc>${escapeXml(url)}</loc>\n`
        xml += `    <lastmod>${lastmodStr}</lastmod>\n`
        xml += `    <changefreq>${changefreq}</changefreq>\n`
        xml += `    <priority>${priority.toFixed(1)}</priority>\n`
        xml += '  </url>\n'
      }

      xml += '</urlset>'

      const sitemapPath = resolve(resolvedOutDir, 'sitemap.xml')
      writeFileSync(sitemapPath, xml, 'utf-8')
      config.logger.info(`[vite-plugin-sitemap] Generated sitemap at ${relative(config.root, sitemapPath)}`)

      if (robotsTxt) {
        let robots = `User-agent: *\nAllow: /\n\nSitemap: ${hostname.replace(/\/$/, '')}/sitemap.xml\n`
        for (const path of disallow) {
          robots += `Disallow: ${path}\n`
        }
        const robotsPath = resolve(resolvedOutDir, 'robots.txt')
        writeFileSync(robotsPath, robots, 'utf-8')
        config.logger.info(`[vite-plugin-sitemap] Generated robots.txt at ${relative(config.root, robotsPath)}`)
      }
    },
  }
}

export default sitemap
