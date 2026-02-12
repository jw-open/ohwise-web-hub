export interface SiteSettings {
  id: number;
  documentId: string;
  siteName: string;
  siteDescription: string;
  copyright: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  logo: MediaFile | null;
  favicon: MediaFile | null;
  theme: Theme | null;
  hero: HeroSection;
  seo: SeoSettings;
  social: SocialLinks;
  contact: ContactInfo;
  features: Features | null;
  quickLinks: QuickLink[];
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

export interface Theme {
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
}

export interface HeroSection {
  id: number;
  title: string;
  description: string;
  ctaPrimary?: {
    text: string;
    link: string;
  };
  ctaSecondary?: {
    text: string;
    link: string;
  };
}

export interface SeoSettings {
  id: number;
  defaultTitle: string;
  defaultDescription: string;
  defaultKeywords: string[];
}

export interface SocialLinks {
  id: number;
  twitter?: string | null;
  github?: string | null;
  linkedin?: string | null;
  youtube?: string | null;
}

export interface ContactInfo {
  id: number;
  email: string;
  phone?: string | null;
  address?: string | null;
}

export interface Features {
  enableComments: boolean;
  enableNewsletter: boolean;
  enableRSS: boolean;
  enableDarkMode: boolean;
}

export interface QuickLink {
  id: number;
  title: string;
  path: string;
  type: "internal" | "external";
  externalUrl?: string;
}
