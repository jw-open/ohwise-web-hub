import { buildSitemap } from "@/lib/sitemap/sitemap-builder";
import { buildSearchIndex } from "@/lib/search/search-index-builder";

async function run() {
  await buildSitemap();
  await buildSearchIndex();
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
