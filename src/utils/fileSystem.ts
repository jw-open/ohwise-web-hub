
/**
 * File-based storage utility for managing content
 * This simulates a file system in the browser using localStorage
 */

// Content types
export type ContentType = 'documentation' | 'blog' | 'video' | 'subscriber';

// Base content interface
interface BaseContent {
  id: string;
  title: string;
  date: string;
  status: 'Draft' | 'Published';
}

// Document content
export interface DocumentContent extends BaseContent {
  category: string;
  content: string;
}

// Blog content
export interface BlogContent extends BaseContent {
  author: string;
  category: string;
  content: string;
  excerpt: string;
  image?: string;
}

// Video content
export interface VideoContent extends BaseContent {
  url: string;
  duration: string;
  category: string;
  description: string;
}

// Subscriber content
export interface SubscriberContent {
  id: string;
  email: string;
  name?: string;
  date: string;
  status: 'Active' | 'Inactive';
}

// File storage key prefix
const STORAGE_PREFIX = 'ohwise_cms_';

// Get storage key for content type
const getStorageKey = (contentType: ContentType): string => {
  return `${STORAGE_PREFIX}${contentType}`;
};

// Generate a unique ID
export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 9);
};

// Get all content for a type
export const getAllContent = <T>(contentType: ContentType): T[] => {
  const storageKey = getStorageKey(contentType);
  const storedData = localStorage.getItem(storageKey);
  
  if (!storedData) {
    return [];
  }
  
  try {
    return JSON.parse(storedData) as T[];
  } catch (error) {
    console.error(`Error parsing ${contentType} data:`, error);
    return [];
  }
};

// Get content by ID
export const getContentById = <T extends { id: string }>(contentType: ContentType, id: string): T | null => {
  const allContent = getAllContent<T>(contentType);
  return allContent.find(item => item.id === id) || null;
};

// Save content
export const saveContent = <T extends { id: string }>(contentType: ContentType, content: T): void => {
  const allContent = getAllContent<T>(contentType);
  const existingIndex = allContent.findIndex(item => item.id === content.id);
  
  if (existingIndex >= 0) {
    // Update existing content
    allContent[existingIndex] = content;
  } else {
    // Add new content
    allContent.push(content);
  }
  
  localStorage.setItem(getStorageKey(contentType), JSON.stringify(allContent));
};

// Delete content
export const deleteContent = (contentType: ContentType, id: string): void => {
  const allContent = getAllContent<{ id: string }>(contentType);
  const filteredContent = allContent.filter(item => item.id !== id);
  localStorage.setItem(getStorageKey(contentType), JSON.stringify(filteredContent));
};

// Initialize content with sample data if empty
export const initializeContent = (): void => {
  // Sample documentation
  if (getAllContent<DocumentContent>('documentation').length === 0) {
    const sampleDocs: DocumentContent[] = [
      {
        id: 'doc-1',
        title: 'Getting Started',
        category: 'Basics',
        status: 'Published',
        date: '2023-05-10',
        content: '# Getting Started\n\nWelcome to OhWise! This guide will help you get started with our platform.'
      },
      {
        id: 'doc-2',
        title: 'API Reference',
        category: 'Technical',
        status: 'Published',
        date: '2023-05-15',
        content: '# API Reference\n\nThis documentation covers all the API endpoints available in OhWise.'
      },
      {
        id: 'doc-3',
        title: 'Advanced Configurations',
        category: 'Advanced',
        status: 'Draft',
        date: '2023-05-20',
        content: '# Advanced Configurations\n\nLearn how to configure OhWise for advanced use cases.'
      }
    ];
    
    localStorage.setItem(getStorageKey('documentation'), JSON.stringify(sampleDocs));
  }
  
  // Sample blog posts
  if (getAllContent<BlogContent>('blog').length === 0) {
    const sampleBlogs: BlogContent[] = [
      {
        id: 'blog-1',
        title: 'Introducing OhWise 2.0',
        author: 'John Doe',
        category: 'Announcements',
        status: 'Published',
        date: '2023-06-10',
        excerpt: 'Today, we're thrilled to announce the release of OhWise 2.0, our most significant platform update yet.',
        content: '# Introducing OhWise 2.0\n\nToday, we're thrilled to announce the release of OhWise 2.0, our most significant platform update yet. This new version brings enhanced multi-agent capabilities, improved knowledge graph integration, and a completely redesigned user interface.',
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3'
      },
      {
        id: 'blog-2',
        title: 'Best Practices for AI Integration',
        author: 'Jane Smith',
        category: 'Tutorials',
        status: 'Published',
        date: '2023-06-15',
        excerpt: 'The integration of AI into DevOps processes is no longer a future trend—it's happening now.',
        content: '# Best Practices for AI Integration\n\nThe integration of AI into DevOps processes is no longer a future trend—it's happening now. In this post, we explore how organizations are using OhWise to automate complex workflows, reduce incident response time, and create more reliable systems.',
        image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3'
      }
    ];
    
    localStorage.setItem(getStorageKey('blog'), JSON.stringify(sampleBlogs));
  }
  
  // Sample videos
  if (getAllContent<VideoContent>('video').length === 0) {
    const sampleVideos: VideoContent[] = [
      {
        id: 'video-1',
        title: 'Getting Started with OhWise',
        duration: '10:25',
        category: 'Tutorials',
        status: 'Published',
        date: '2023-07-10',
        description: 'A quick tutorial to help you get started with the OhWise platform.',
        url: 'https://www.youtube.com/watch?v=example1'
      },
      {
        id: 'video-2',
        title: 'Advanced AI Features Walkthrough',
        duration: '15:32',
        category: 'Technical',
        status: 'Published',
        date: '2023-07-15',
        description: 'Learn about the advanced AI features available in OhWise.',
        url: 'https://www.youtube.com/watch?v=example2'
      }
    ];
    
    localStorage.setItem(getStorageKey('video'), JSON.stringify(sampleVideos));
  }
  
  // Sample subscribers
  if (getAllContent<SubscriberContent>('subscriber').length === 0) {
    const sampleSubscribers: SubscriberContent[] = [
      {
        id: 'sub-1',
        email: 'john@example.com',
        name: 'John Doe',
        date: '2023-08-10',
        status: 'Active'
      },
      {
        id: 'sub-2',
        email: 'jane@example.com',
        name: 'Jane Smith',
        date: '2023-08-15',
        status: 'Active'
      }
    ];
    
    localStorage.setItem(getStorageKey('subscriber'), JSON.stringify(sampleSubscribers));
  }
};

// Export content type interfaces for reuse
export type { BaseContent, DocumentContent, BlogContent, VideoContent, SubscriberContent };
