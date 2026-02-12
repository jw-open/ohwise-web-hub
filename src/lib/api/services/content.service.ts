import { getCollection } from "../client";
import { URLS } from "../urls";
import { ContentItem } from "../types/content";

export const contentService = {
  async getPosts(): Promise<ContentItem[]> {
    return await getCollection<ContentItem>(URLS.posts);
  },

  async getPost(slug: string): Promise<ContentItem | null> {
    const posts = await getCollection<ContentItem>(URLS.postBySlug(slug));
    return posts[0] ?? null;
  },
};
