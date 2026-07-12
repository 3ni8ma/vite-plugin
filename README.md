# @3ni8ma/vite-plugin-sitemap

A Vite plugin that automatically generates a `sitemap.xml` for your static site.

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
      routes: [
        '/',
        '/about',
        '/projects',
        '/contact',
      ],
      changefreq: 'monthly',
      priority: 0.7,
    }),
  ],
})
```

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `hostname` | `string` | required | Your site's base URL |
| `routes` | `string[]` | required | Array of route paths |
| `changefreq` | `string` | `'monthly'` | Sitemap change frequency |
| `priority` | `number` | `0.7` | Page priority (0.0–1.0) |
| `lastmod` | `Date` | `new Date()` | Last modified date |
| `outDir` | `string` | build.outDir | Output directory |
| `robotsTxt` | `boolean` | `true` | Auto-generate `robots.txt` |
| `disallow` | `string[]` | `[]` | Paths to disallow in robots.txt |

## License

MIT

<!-- ach: 2026-07-10 23:31:17 -->

<!-- ach: 2026-07-11 02:00:33 -->

<!-- ach: 2026-07-11 14:31:57 -->

<!-- ach: 2026-07-11 19:30:18 -->

<!-- ach: 2026-07-11 22:00:54 -->

<!-- ach: 2026-07-12 15:31:30 -->
