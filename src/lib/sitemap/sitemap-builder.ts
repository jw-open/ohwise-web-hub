import { writeFileSync } from "fs";
import { contentService } from "@/lib/api";

const SITE_URL = "https://ohwise.com";

export async function buildSitemap() {
  console.log("Generating sitemap...");

  // Static pages
  const staticRoutes = [
    "",
    "/blog",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ];

  // Blog posts
  const posts = await contentService.getPosts();

  const postRoutes = posts.map((post) => `/blog/${post.slug}`);

  const allRoutes = [...staticRoutes, ...postRoutes];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (route) => `
  <url>
    <loc>${SITE_URL}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${route.startsWith("/blog/") ? "weekly" : "monthly"}</changefreq>
    <priority>${route === "" ? "1.0" : "0.7"}</priority>
  </url>`,
  )
  .join("")}
</urlset>`;

  writeFileSync("out/sitemap.xml", xml);

  console.log(`Sitemap created with ${allRoutes.length} URLs`);
}
