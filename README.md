# @3ni8ma/vite-plugin-sitemap

[![npm version](https://img.shields.io/npm/v/@3ni8ma/vite-plugin-sitemap)](https://www.npmjs.com/package/@3ni8ma/vite-plugin-sitemap)
[![license](https://img.shields.io/npm/l/@3ni8ma/vite-plugin-sitemap)](LICENSE)
[![downloads](https://img.shields.io/npm/dm/@3ni8ma/vite-plugin-sitemap)](https://www.npmjs.com/package/@3ni8ma/vite-plugin-sitemap)

A Vite plugin that automatically generates `sitemap.xml` and `robots.txt` on build — zero configuration beyond your route list.

## Why

Most static sites need a sitemap for SEO but generating one manually means maintaining a separate script or XML file. This plugin hooks into `vite build` and writes both `sitemap.xml` and `robots.txt` to your output directory automatically.

## Installation

```bash
npm install @3ni8ma/vite-plugin-sitemap
```

## Usage

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import sitemap from '@3ni8ma/vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    sitemap({
      hostname: 'https://example.com',
      routes: ['/', '/about', '/projects', '/contact'],
    }),
  ],
})
```

After `vite build`, you'll find `sitemap.xml` and `robots.txt` in your `dist/` folder.

## Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `hostname` | `string` | required | Your site's base URL |
| `routes` | `(string \| SitemapRoute)[]` | `['/']` | Route paths or objects with per-route config |
| `changefreq` | `string` | `'weekly'` | Default change frequency |
| `priority` | `number` | `0.5` | Default page priority (0.0–1.0) |
| `lastmod` | `string` | today's date | Default last modified date |
| `outDir` | `string` | `build.outDir` | Output directory |
| `disallow` | `string[]` | `[]` | Paths to block in robots.txt |
| `pretty` | `boolean` | `false` | Pretty-print the XML output |

### Per-route config

```ts
sitemap({
  hostname: 'https://example.com',
  routes: [
    '/',
    { path: '/blog', changefreq: 'daily', priority: 0.9 },
    { path: '/admin', changefreq: 'never', priority: 0.1 },
  ],
  disallow: ['/admin', '/private'],
})
```

### Generated output

**sitemap.xml:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com/</loc>
    <lastmod>2026-09-03</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>
```

**robots.txt:**
```
User-agent: *
Allow: /

Sitemap: https://example.com/sitemap.xml
```

## License

MIT

<!-- ach: 2026-09-03 23:31:47 -->

<!-- ach: 2026-09-04 14:30:15 -->

<!-- ach: 2026-09-04 17:00:07 -->

<!-- ach: 2026-09-05 00:30:02 -->

<!-- ach: 2026-09-05 03:00:14 -->

<!-- ach: 2026-09-05 13:00:05 -->

<!-- ach: 2026-09-05 18:00:02 -->

<!-- ach: 2026-09-06 01:30:08 -->

<!-- ach: 2026-09-06 04:00:04 -->

<!-- ach: 2026-09-06 14:00:05 -->
