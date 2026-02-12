export interface ContentItem {
  id: number;
  documentId: string;
  title: string;
  description: string;
  type: string;
  slug: string | null;
  featured: boolean | null;
  tags: string[] | null;
  externalUrl: string | null;
  seo: SeoMetadata | null;
  content: string;
  image: MediaFile | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface MediaFile {
  id: number;
  url: string;
  name: string;
  alternativeText?: string;
  caption?: string;
  width?: number;
  height?: number;
  formats?: {
    thumbnail?: { url: string };
    small?: { url: string };
    medium?: { url: string };
    large?: { url: string };
  };
}

export interface SeoMetadata {
  title?: string;
  description?: string;
  keywords?: string[];
}
