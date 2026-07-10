import { notFound } from "next/navigation";
import { detailedProjects } from "@/lib/data/projectsData";
import { MermaidDiagram } from "@/components/ui/MermaidDiagram";
import { ArrowLeft, ExternalLink, ShieldCheck, Database, Server, GitBranch, Cpu, Activity, Lock } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const project = detailedProjects.find((p) => p.slug === resolvedParams.slug);
  
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | System Design`,
    description: project.tagline,
  };
}

export function generateStaticParams() {
  return detailedProjects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDeepDive({ params }: Props) {
  const resolvedParams = await params;
  const project = detailedProjects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black pt-24 pb-20">
      <div className="mx-auto max-w-4xl px-6">
        {/* Back Navigation */}
        <Link 
          href="/#projects"
          className="group mb-8 inline-flex items-center gap-2 font-mono text-sm text-neutral-400 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Portfolio
        </Link>

        {/* Header */}
        <div className="mb-16 border-b border-white/10 pb-12">
          <div className="mb-6 flex flex-wrap gap-2">
            {project.technologyStack.map((tech) => (
              <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-neutral-300">
                {tech}
              </span>
            ))}
          </div>
          <h1 className="mb-4 font-heading text-4xl font-bold tracking-tight text-white md:text-5xl">
            {project.title}
          </h1>
          <p className="text-xl text-neutral-400">{project.tagline}</p>
          
          <div className="mt-8 flex gap-4">
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-105"
            >
              <GitBranch className="h-4 w-4" />
              Source Code
            </a>
            {project.researchPaperUrl && (
              <a 
                href={project.researchPaperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <ExternalLink className="h-4 w-4" />
                Research Paper
              </a>
            )}
          </div>
        </div>

        {/* System Design Content */}
        <article className="prose prose-invert max-w-none prose-headings:font-heading prose-a:text-blue-400">
          
          <section className="mb-16">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-white"><Activity className="h-6 w-6 text-neutral-500" /> Overview & Problem</h2>
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-neutral-300">Overview</h3>
                <p className="text-neutral-400 leading-relaxed">{project.overview}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-300">Problem Statement</h3>
                <p className="text-neutral-400 leading-relaxed">{project.problemStatement}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-300">Motivation</h3>
                <p className="text-neutral-400 leading-relaxed">{project.motivation}</p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-white"><Server className="h-6 w-6 text-neutral-500" /> System Architecture</h2>
            <p className="mt-4 text-neutral-400 leading-relaxed">{project.architectureText}</p>
            <div className="my-8">
              <MermaidDiagram chart={project.architectureDiagram} id="architecture" />
            </div>
          </section>

          {project.mlPipeline && (
            <section className="mb-16">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-white"><Cpu className="h-6 w-6 text-neutral-500" /> Machine Learning Pipeline</h2>
              <p className="mt-4 text-neutral-400 leading-relaxed">{project.mlPipeline}</p>
            </section>
          )}

          <section className="mb-16">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-white"><Database className="h-6 w-6 text-neutral-500" /> Implementation & Design</h2>
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-neutral-300">Implementation Details</h3>
                <p className="text-neutral-400 leading-relaxed">{project.implementation}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-300">System Design</h3>
                <p className="text-neutral-400 leading-relaxed">{project.systemDesignText}</p>
              </div>
              {project.databaseDesign && (
                <div>
                  <h3 className="text-lg font-semibold text-neutral-300">Database Design</h3>
                  <p className="text-neutral-400 leading-relaxed">{project.databaseDesign}</p>
                  {project.databaseDiagram && (
                    <div className="my-6">
                      <MermaidDiagram chart={project.databaseDiagram} id="database" />
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>

          {project.sequenceDiagram && (
            <section className="mb-16">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-white"><GitBranch className="h-6 w-6 text-neutral-500" /> Execution Sequence</h2>
              <div className="my-8">
                <MermaidDiagram chart={project.sequenceDiagram} id="sequence" />
              </div>
            </section>
          )}

          <section className="mb-16">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-white"><Lock className="h-6 w-6 text-neutral-500" /> Security & Deployment</h2>
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-neutral-300">Security Considerations</h3>
                <p className="text-neutral-400 leading-relaxed">{project.securityConsiderations}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-300">Deployment Strategy</h3>
                <p className="text-neutral-400 leading-relaxed">{project.deploymentStrategy}</p>
                {project.deploymentDiagram && (
                  <div className="my-6">
                    <MermaidDiagram chart={project.deploymentDiagram} id="deployment" />
                  </div>
                )}
              </div>
            </div>
          </section>

          <section className="mb-16 rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-white"><ShieldCheck className="h-6 w-6 text-neutral-500" /> Engineering Evaluation</h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-500">Testing</h3>
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed">{project.testing}</p>
              </div>
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-500">Performance</h3>
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed">{project.performance}</p>
              </div>
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-500">Scalability</h3>
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed">{project.scalability}</p>
              </div>
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-500">Challenges</h3>
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed">{project.challenges}</p>
              </div>
            </div>
            
            <div className="mt-8 border-t border-white/10 pt-8">
              <h3 className="text-lg font-semibold text-neutral-300">Trade-offs</h3>
              <p className="mt-2 text-neutral-400 leading-relaxed">{project.tradeOffs}</p>
            </div>
            
            <div className="mt-8 border-t border-white/10 pt-8">
              <h3 className="text-lg font-semibold text-neutral-300">Future Improvements</h3>
              <p className="mt-2 text-neutral-400 leading-relaxed">{project.futureImprovements}</p>
            </div>
          </section>

        </article>
      </div>
    </main>
  );
}
