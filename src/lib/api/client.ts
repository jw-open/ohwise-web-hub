import { buildUrl } from "./config";

/**
 * Fetch a collection (array)
 */
export async function getCollection<T>(path: string): Promise<T[]> {
  const res = await fetch(buildUrl(path), {
    cache: "force-cache",
  });

  if (!res.ok) {
    console.error("STRAPI COLLECTION ERROR:", path);
    throw new Error(`Failed to fetch ${path}`);
  }

  const json = await res.json();

  if (!json || !json.data) return [];

  return json.data;
}

/**
 * Fetch a single type
 */
export async function getSingle<T>(path: string): Promise<T | null> {
  const res = await fetch(buildUrl(path), {
    cache: "force-cache",
  });

  if (!res.ok) {
    console.error("STRAPI SINGLE ERROR:", path);
    throw new Error(`Failed to fetch ${path}`);
  }

  const json = await res.json();

  if (!json || !json.data) return null;

  return json.data;
}
