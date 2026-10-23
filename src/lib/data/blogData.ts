import { recentBlogPosts } from "./recentBlogData";
import { weeklyIncidentPosts } from "./weeklyIncidentData";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content: {
    type: "paragraph" | "heading" | "code" | "list" | "source";
    text?: string;
    language?: string;
    url?: string;
    items?: string[];
  }[];
}

// Keep only articles that do not present unverified project benchmarks as implemented results.
export const blogPosts: BlogPost[] = [...weeklyIncidentPosts, ...recentBlogPosts];
