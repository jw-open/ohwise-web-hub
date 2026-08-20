// Build-time sitemap generator.
// Runs before `vite build` (see package.json "build") and writes public/sitemap.xml
// from the actual blog + documentation source, so the sitemap can never go stale
// when new posts or docs are added.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const DOMAIN = "https://ohwise.com";

const read = (p) => readFileSync(resolve(root, p), "utf8");
const nums = (s) => [...s.matchAll(/id:\s*(\d+)/g)].map((m) => Number(m[1]));

// Blog: only include posts that BOTH have a card (Blog.tsx) AND full content
// (BlogPost.tsx) — so every sitemap URL actually renders.
const listed = new Set(nums(read("src/pages/Blog.tsx")));
const hasContent = new Set(nums(read("src/pages/BlogPost.tsx")));
const blogIds = [...listed].filter((id) => hasContent.has(id)).sort((a, b) => a - b);

// Docs: /documentation/:slug for every slug in Documentation.tsx.
const docSlugs = [
  ...new Set(
    [...read("src/pages/Documentation.tsx").matchAll(/slug:\s*["']([a-z0-9-]+)["']/g)].map(
      (m) => m[1]
    )
  ),
];

const staticRoutes = [
  "/",
  "/product",
  "/about",
  "/documentation",
  "/open-source",
  "/blog",
  "/security",
  "/contact",
  "/privacy",
  "/terms",
];

const urls = [
  ...staticRoutes,
  ...blogIds.map((id) => `/blog/${id}`),
  ...docSlugs.map((s) => `/documentation/${s}`),
];

const today = new Date().toISOString().slice(0, 10);
const body = urls
  .map(
    (u) =>
      `  <url>\n    <loc>${DOMAIN}${u}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;

writeFileSync(resolve(root, "public/sitemap.xml"), xml);
console.log(
  `sitemap.xml: ${urls.length} URLs (${blogIds.length} blog posts, ${docSlugs.length} docs)`
);
