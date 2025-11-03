export interface Post {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  modified: string;
  slug: string;
  author: number;
  categories: number[];
  featured_media: number;
  tags: number[];
  acf?: {
    featured_image: string;
    read_time: string;
    is_featured: boolean;
    is_breaking: boolean;
    views: number;
    likes: number;
  };
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  count: number;
  color: string;
  icon: string;
  description: string;
}

export interface User {
  id: number;
  name: string;
  slug: string;
  avatar_urls: {
    [key: string]: string;
  };
  description: string;
  position: string;
  department: string;
  expertise: string[];
  email?: string;
  phone?: string;
}

export interface Comment {
  id: number;
  post: number;
  author_name: string;
  content: {
    rendered: string;
  };
  date: string;
}