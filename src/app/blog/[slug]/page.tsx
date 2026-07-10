import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data/blogData";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import React from "react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Engineering Blog`,
    description: post.excerpt,
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: Props) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black pt-24 pb-20">
      <div className="mx-auto max-w-3xl px-6">
        {/* Back Navigation */}
        <Link 
          href="/blog"
          className="group mb-12 inline-flex items-center gap-2 font-mono text-sm text-neutral-400 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Blog
        </Link>

        {/* Header */}
        <div className="mb-12 border-b border-white/10 pb-12">
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-neutral-300">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight text-white md:text-5xl leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm font-mono text-neutral-400">
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {post.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {post.readTime}</span>
          </div>
        </div>

        {/* Content */}
        <article className="prose prose-invert max-w-none prose-headings:font-heading prose-a:text-blue-400 prose-pre:bg-[#0d1117] prose-pre:border prose-pre:border-white/10">
          {post.content.map((block, index) => {
            switch (block.type) {
              case "paragraph":
                return <p key={index} className="text-neutral-300 leading-relaxed text-lg">{block.text}</p>;
              case "heading":
                return <h2 key={index} className="text-2xl font-bold text-white mt-12 mb-6">{block.text}</h2>;
              case "list":
                return (
                  <ul key={index} className="space-y-2 my-6">
                    {block.items?.map((item, i) => (
                      <li key={i} className="text-neutral-300 flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              case "code":
                return (
                  <div key={index} className="my-8 rounded-xl border border-white/10 bg-[#0d1117] overflow-hidden">
                    <div className="flex items-center px-4 py-2 bg-white/5 border-b border-white/10">
                      <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider">{block.language}</span>
                    </div>
                    <pre className="p-4 overflow-x-auto m-0 bg-transparent text-sm custom-scrollbar">
                      <code className="font-mono text-neutral-200">{block.text}</code>
                    </pre>
                  </div>
                );
              default:
                return null;
            }
          })}
        </article>
      </div>
    </main>
  );
}
