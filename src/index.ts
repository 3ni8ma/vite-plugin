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
      } = options

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

      const outPath = resolve(config.root, outDir, 'sitemap.xml')
      mkdirSync(resolve(config.root, outDir), { recursive: true })
      writeFileSync(outPath, xml, 'utf-8')

      config.logger.info(`[vite-plugin-sitemap] Generated sitemap at ${relative(config.root, outPath)}`)
    },
  }
}

export default sitemap
