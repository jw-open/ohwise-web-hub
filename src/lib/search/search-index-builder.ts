import { writeFileSync } from "fs";
import { contentService } from "@/lib/api";

export async function buildSearchIndex() {
  console.log("Generating search index...");

  const posts = await contentService.getPosts();

  const index = posts.map((post) => ({
    id: String(post.id),
    title: post.title,
    slug: post.slug,
    description: post.description ?? "",
  }));

  const file = `// AUTO-GENERATED AT BUILD TIME
export interface SearchItem {
  id: string;
  title: string;
  slug: string;
  description: string;
}

export const searchIndex: SearchItem[] = ${JSON.stringify(index, null, 2)};
`;

  writeFileSync("src/lib/search/search-index.ts", file);

  console.log(`Search index created with ${index.length} posts`);
}
