import { recentBlogPosts } from "./recentBlogData";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content: {
    type: "paragraph" | "heading" | "code" | "list";
    text?: string;
    language?: string;
    items?: string[];
  }[];
}

// Keep only articles that do not present unverified project benchmarks as implemented results.
export const blogPosts: BlogPost[] = recentBlogPosts;
