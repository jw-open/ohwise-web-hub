
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
  
  if (existingIndex !== -1) {
    // Update existing content
    allContent[existingIndex] = content;
  } else {
    // Add new content
    allContent.push(content);
  }
  
  // Save back to storage
  const storageKey = getStorageKey(contentType);
  localStorage.setItem(storageKey, JSON.stringify(allContent));
};

// Delete content
export const deleteContent = <T extends { id: string }>(contentType: ContentType, id: string): void => {
  const allContent = getAllContent<T>(contentType);
  const filteredContent = allContent.filter(item => item.id !== id);
  
  if (allContent.length === filteredContent.length) {
    return; // Nothing changed, item not found
  }
  
  // Save back to storage
  const storageKey = getStorageKey(contentType);
  localStorage.setItem(storageKey, JSON.stringify(filteredContent));
};

// Search content
export const searchContent = <T extends BaseContent>(contentType: ContentType, query: string): T[] => {
  if (!query) {
    return getAllContent<T>(contentType);
  }
  
  const allContent = getAllContent<T>(contentType);
  const lowerQuery = query.toLowerCase();
  
  return allContent.filter(item => 
    item.title.toLowerCase().includes(lowerQuery)
  );
};

// Initialize with sample content if empty
export const initializeContent = (): void => {
  // Add sample documentation
  if (getAllContent<DocumentContent>('documentation').length === 0) {
    const sampleDocs: DocumentContent[] = [
      {
        id: generateId(),
        title: 'Getting Started with OhWise',
        category: 'Basics',
        content: '# Getting Started\n\nWelcome to OhWise! This guide will help you get up and running quickly.',
        date: new Date().toISOString(),
        status: 'Published'
      },
      {
        id: generateId(),
        title: 'Advanced Configuration',
        category: 'Advanced',
        content: '# Advanced Configuration\n\nLearn how to configure OhWise for complex use cases.',
        date: new Date().toISOString(),
        status: 'Published'
      }
    ];
    
    sampleDocs.forEach(doc => saveContent('documentation', doc));
  }
  
  // Add sample blog posts
  if (getAllContent<BlogContent>('blog').length === 0) {
    const sampleBlogs: BlogContent[] = [
      {
        id: generateId(),
        title: 'Introducing OhWise 2.0',
        author: 'Jane Doe',
        category: 'Product',
        content: '# Introducing OhWise 2.0\n\nWe are excited to announce the release of OhWise 2.0!',
        excerpt: 'Announcing our latest major version with new features and improvements.',
        date: new Date().toISOString(),
        status: 'Published'
      },
      {
        id: generateId(),
        title: 'AI Best Practices',
        author: 'John Smith',
        category: 'Technical',
        content: '# AI Best Practices\n\nLearn how to get the most out of your AI agents.',
        excerpt: 'Tips and tricks for optimizing your AI workflow.',
        date: new Date().toISOString(),
        status: 'Published'
      }
    ];
    
    sampleBlogs.forEach(blog => saveContent('blog', blog));
  }
  
  // Add sample videos
  if (getAllContent<VideoContent>('video').length === 0) {
    const sampleVideos: VideoContent[] = [
      {
        id: generateId(),
        title: 'OhWise Demo',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        duration: '3:45',
        category: 'Demo',
        description: 'A quick demonstration of OhWise features.',
        date: new Date().toISOString(),
        status: 'Published'
      },
      {
        id: generateId(),
        title: 'AI Agent Tutorial',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        duration: '12:30',
        category: 'Tutorial',
        description: 'Learn how to create and train your own AI agents.',
        date: new Date().toISOString(),
        status: 'Published'
      }
    ];
    
    sampleVideos.forEach(video => saveContent('video', video));
  }
  
  // Add sample subscribers
  if (getAllContent<SubscriberContent>('subscriber').length === 0) {
    const sampleSubscribers: SubscriberContent[] = [
      {
        id: generateId(),
        email: 'john@example.com',
        name: 'John Doe',
        date: new Date().toISOString(),
        status: 'Active'
      },
      {
        id: generateId(),
        email: 'jane@example.com',
        name: 'Jane Smith',
        date: new Date().toISOString(),
        status: 'Active'
      }
    ];
    
    sampleSubscribers.forEach(subscriber => saveContent('subscriber', subscriber));
  }
};
