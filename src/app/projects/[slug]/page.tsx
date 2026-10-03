import { notFound } from "next/navigation";
import { detailedProjects } from "@/lib/data/projectsData";
import { MermaidDiagram } from "@/components/ui/MermaidDiagram";
import { ArrowLeft, GitBranch } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

interface Props { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = detailedProjects.find((item) => item.slug === slug);
  return project
    ? { title: `${project.title} | Mithil K Gowda`, description: project.tagline }
    : { title: "Project Not Found" };
}

export function generateStaticParams() {
  return detailedProjects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDeepDive({ params }: Props) {
  const { slug } = await params;
  const project = detailedProjects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-black pb-20 pt-24">
      <div className="mx-auto max-w-4xl px-6">
        <Link href="/#projects" className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-neutral-400 hover:text-white"><ArrowLeft className="h-4 w-4" /> Back to projects</Link>
        <header className="mb-12 border-b border-white/10 pb-10">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-white md:text-5xl">{project.title}</h1>
          <p className="mt-4 text-lg text-neutral-400">{project.tagline}</p>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black"><GitBranch className="h-4 w-4" /> View GitHub repository</a>
        </header>
        <article className="space-y-12 text-neutral-300">
          <section><h2 className="text-2xl font-bold text-white">Problem</h2><p className="mt-4 leading-relaxed">{project.problemStatement}</p></section>
          <section><h2 className="text-2xl font-bold text-white">What I built</h2><p className="mt-4 leading-relaxed">{project.implementation}</p></section>
          <section><h2 className="text-2xl font-bold text-white">Security engineering</h2><p className="mt-4 leading-relaxed">{project.securityConsiderations}</p></section>
          <section>
            <h2 className="text-2xl font-bold text-white">Architecture and stack</h2>
            <p className="mt-4 leading-relaxed">{project.architectureText}</p>
            <div className="my-8"><MermaidDiagram chart={project.architectureDiagram} id="architecture" /></div>
            <div className="flex flex-wrap gap-2">{project.technologyStack.map((tech) => <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">{tech}</span>)}</div>
          </section>
          <section className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold text-white">Evidence and limitations</h2>
            <p className="mt-4 leading-relaxed">{project.testing}</p>
            <p className="mt-4 leading-relaxed">{project.tradeOffs}</p>
          </section>
        </article>
      </div>
    </main>
  );
}
