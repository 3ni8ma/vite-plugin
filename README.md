# @3ni8ma/vite-plugin-sitemap

[![npm version](https://img.shields.io/npm/v/@3ni8ma/vite-plugin-sitemap)](https://www.npmjs.com/package/@3ni8ma/vite-plugin-sitemap)
[![npm downloads](https://img.shields.io/npm/dm/@3ni8ma/vite-plugin-sitemap)](https://www.npmjs.com/package/@3ni8ma/vite-plugin-sitemap)
[![License](https://img.shields.io/github/license/3ni8ma/vite-plugin)](https://github.com/3ni8ma/vite-plugin/blob/main/LICENSE)

A Vite plugin that automatically generates a `sitemap.xml` (and optional `robots.txt`) for your static site — zero configuration beyond your route list.

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






















































































































<!-- ach: 2026-08-17 04:00:04 -->

<!-- ach: 2026-08-17 14:00:10 -->

<!-- ach: 2026-08-17 19:00:12 -->

<!-- ach: 2026-08-17 21:30:10 -->

<!-- ach: 2026-08-18 02:30:08 -->

<!-- ach: 2026-08-18 12:30:16 -->

<!-- ach: 2026-08-18 15:00:08 -->

<!-- ach: 2026-08-18 17:30:02 -->

<!-- ach: 2026-08-18 20:00:09 -->

<!-- ach: 2026-08-18 22:30:07 -->

<!-- ach: 2026-08-19 01:00:11 -->

<!-- ach: 2026-08-19 16:00:09 -->

<!-- ach: 2026-08-19 23:30:22 -->

<!-- ach: 2026-08-20 12:00:43 -->

<!-- ach: 2026-08-20 14:30:06 -->

<!-- ach: 2026-08-20 19:30:04 -->

<!-- ach: 2026-08-20 22:00:09 -->

<!-- ach: 2026-08-21 03:00:07 -->

<!-- ach: 2026-08-21 15:30:06 -->

<!-- ach: 2026-08-21 18:00:22 -->

<!-- ach: 2026-08-21 23:00:12 -->

<!-- ach: 2026-08-22 04:00:15 -->

<!-- ach: 2026-08-22 06:30:10 -->

<!-- ach: 2026-08-22 09:00:07 -->

<!-- ach: 2026-08-22 14:00:22 -->

<!-- ach: 2026-08-22 19:00:09 -->

<!-- ach: 2026-08-22 21:30:16 -->

<!-- ach: 2026-08-23 02:30:08 -->

<!-- ach: 2026-08-23 12:37:16 -->

<!-- ach: 2026-08-23 15:00:17 -->

<!-- ach: 2026-08-23 22:30:15 -->

<!-- ach: 2026-08-24 03:30:16 -->

<!-- ach: 2026-08-24 08:30:07 -->

<!-- ach: 2026-08-24 13:30:33 -->

<!-- ach: 2026-08-24 18:30:06 -->

<!-- ach: 2026-08-24 21:00:04 -->

<!-- ach: 2026-08-24 23:30:11 -->

<!-- ach: 2026-08-25 02:00:03 -->

<!-- ach: 2026-08-25 14:30:03 -->

<!-- ach: 2026-08-25 17:00:13 -->

<!-- ach: 2026-08-25 19:30:04 -->

<!-- ach: 2026-08-25 22:00:10 -->

<!-- ach: 2026-08-26 00:30:06 -->

<!-- ach: 2026-08-26 13:00:09 -->

<!-- ach: 2026-08-26 15:30:14 -->

<!-- ach: 2026-08-26 18:00:06 -->

<!-- ach: 2026-08-26 20:30:20 -->

<!-- ach: 2026-08-27 11:30:26 -->

<!-- ach: 2026-08-27 19:00:18 -->

<!-- ach: 2026-08-28 00:30:03 -->

<!-- ach: 2026-08-28 03:00:12 -->

<!-- ach: 2026-08-28 08:00:14 -->

<!-- ach: 2026-08-28 23:00:13 -->

<!-- ach: 2026-08-29 01:30:05 -->

<!-- ach: 2026-08-29 09:00:11 -->

<!-- ach: 2026-08-29 11:30:10 -->

<!-- ach: 2026-08-29 14:00:15 -->

<!-- ach: 2026-08-29 16:30:02 -->

<!-- ach: 2026-08-29 19:00:14 -->

<!-- ach: 2026-08-29 21:30:15 -->

<!-- ach: 2026-08-30 02:30:14 -->

<!-- ach: 2026-08-30 05:00:24 -->

<!-- ach: 2026-08-30 07:30:11 -->

<!-- ach: 2026-08-30 10:00:14 -->

<!-- ach: 2026-08-30 15:00:17 -->

<!-- ach: 2026-08-30 20:00:11 -->

<!-- ach: 2026-08-31 01:00:16 -->

<!-- ach: 2026-08-31 03:30:07 -->

<!-- ach: 2026-08-31 11:00:22 -->

<!-- ach: 2026-08-31 18:30:12 -->

<!-- ach: 2026-08-31 21:00:19 -->

<!-- ach: 2026-08-31 23:30:10 -->

<!-- ach: 2026-09-01 02:00:26 -->

<!-- ach: 2026-09-01 07:00:28 -->

<!-- ach: 2026-09-01 19:30:27 -->

<!-- ach: 2026-09-02 02:30:08 -->
