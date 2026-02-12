export interface About {
  id: number;
  documentId: string;
  name: string;
  title: string;
  bio: string;
  email: string;
  skills: string[] | null;
  location: string;
  social: SocialLinks | null;
  exploring: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  avatar: MediaFile | null;
  experience: Experience[];
  education: Education[];
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

export interface SocialLinks {
  github?: string;
  twitter?: string;
  linkedin?: string;
  youtube?: string;
}

export interface Experience {
  id: number;
  company: string;
  title: string;
  period: string;
  description: string;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
  description: string;
}
