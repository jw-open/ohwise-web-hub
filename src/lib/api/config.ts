export const API_BASE =
  process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

export const API_PREFIX = "/api";

export function buildUrl(path: string) {
  return `${API_BASE}${API_PREFIX}${path}`;
}
