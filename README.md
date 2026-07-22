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

<!-- ach: 2026-07-12 18:00:11 -->

<!-- ach: 2026-07-12 20:31:02 -->

<!-- ach: 2026-07-13 19:01:08 -->

<!-- ach: 2026-07-14 02:30:10 -->

<!-- ach: 2026-07-14 20:00:07 -->

<!-- ach: 2026-07-14 22:30:14 -->

<!-- ach: 2026-07-15 13:35:14 -->

<!-- ach: 2026-07-15 18:30:34 -->

<!-- ach: 2026-07-15 23:30:29 -->

<!-- ach: 2026-07-16 14:30:23 -->

<!-- ach: 2026-07-16 19:30:14 -->

<!-- ach: 2026-07-16 22:00:11 -->

<!-- ach: 2026-07-17 13:01:00 -->

<!-- ach: 2026-07-17 15:30:07 -->

<!-- ach: 2026-07-17 18:00:16 -->

<!-- ach: 2026-07-18 01:30:17 -->

<!-- ach: 2026-07-18 21:30:06 -->

<!-- ach: 2026-07-19 00:00:32 -->

<!-- ach: 2026-07-19 12:34:34 -->

<!-- ach: 2026-07-19 20:00:02 -->

<!-- ach: 2026-07-19 22:30:07 -->

<!-- ach: 2026-07-20 01:00:13 -->

<!-- ach: 2026-07-20 13:30:11 -->

<!-- ach: 2026-07-20 16:01:24 -->

<!-- ach: 2026-07-20 18:30:02 -->

<!-- ach: 2026-07-20 21:00:17 -->

<!-- ach: 2026-07-21 02:00:17 -->

<!-- ach: 2026-07-21 19:30:50 -->

<!-- ach: 2026-07-22 00:30:12 -->

<!-- ach: 2026-07-22 03:00:31 -->

<!-- ach: 2026-07-22 13:00:03 -->

<!-- ach: 2026-07-22 15:30:38 -->
