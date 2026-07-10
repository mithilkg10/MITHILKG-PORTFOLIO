"use client";

import { motion } from "framer-motion";
import { Shield, AlertTriangle, CheckCircle, Wrench, Activity } from "lucide-react";
import { GitHubIcon } from "@/components/ui/SocialIcons";
import Link from "next/link";
import { projects } from "@/lib/data/resume";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TiltCard } from "@/components/ui/TiltCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useRole } from "@/lib/data/roleContext";

export function Projects() {
  const { selectedRole } = useRole();
  return (
    <section id="projects" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Projects"
          title="Security Engineering in Practice"
          description="Each project engineered with security-first principles — from multi-agent defense frameworks to secure authentication systems."
        />

        <div className="space-y-12">
          {[...projects]
            .sort((a, b) => {
              if (selectedRole === "General") return 0;
              const aHas = a.roles.includes(selectedRole);
              const bHas = b.roles.includes(selectedRole);
              if (aHas && !bHas) return -1;
              if (!aHas && bHas) return 1;
              return 0;
            })
            .map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <TiltCard>
                <div
                  className={`glass-card overflow-hidden rounded-[2rem] ${
                    project.featured ? "border-white/15 bg-white/[0.04]" : ""
                  }`}
                >
                  <div className={`grid grid-cols-1 ${project.featured ? "lg:grid-cols-5" : "lg:grid-cols-3"} gap-0`}>
                    <div className={`relative overflow-hidden bg-white/[0.02] border-r border-white/5 ${project.featured ? "lg:col-span-2" : ""}`}>
                      <div className="flex aspect-video items-center justify-center lg:aspect-auto lg:h-full">
                        <div className="relative p-8 text-center">
                          <Shield className="mx-auto h-16 w-16 text-foreground/20" />
                          <p className="mt-4 font-mono text-xs text-foreground/40">
                            {project.title}
                          </p>
                          {project.featured && (
                            <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 font-mono text-xs text-foreground">
                              Featured
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className={`space-y-6 p-8 lg:p-12 ${project.featured ? "lg:col-span-3" : "lg:col-span-2"}`}>
                      <div>
                        <h3 className="font-heading text-2xl font-bold tracking-tight md:text-3xl">{project.title}</h3>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-foreground/70"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                          <div className="mb-2 flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-foreground/50">
                            <AlertTriangle className="h-4 w-4" /> Problem
                          </div>
                          <p className="text-sm leading-relaxed text-foreground/70">{project.problem}</p>
                        </div>
                        <div>
                          <div className="mb-2 flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-foreground/50">
                            <CheckCircle className="h-4 w-4" /> Solution
                          </div>
                          <p className="text-sm leading-relaxed text-foreground/70">{project.solution}</p>
                        </div>
                      </div>

                      <div className="pt-2">
                        <div className="mb-3 flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-foreground/80">
                          <Shield className="h-4 w-4" /> Security Features
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.securityFeatures.map((f) => (
                            <span
                              key={f}
                              className="rounded-lg border border-white/5 bg-white/[0.03] px-3 py-1.5 text-xs text-foreground/60"
                            >
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                          <div className="mb-2 flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-foreground/50">
                            <Wrench className="h-4 w-4" /> Challenges
                          </div>
                          <p className="text-sm leading-relaxed text-foreground/60">{project.challenges}</p>
                        </div>
                        <div>
                          <div className="mb-2 flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-foreground/50">
                            <CheckCircle className="h-4 w-4" /> Results
                          </div>
                          <p className="text-sm leading-relaxed text-foreground/60">{project.results}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 border-t border-white/10 pt-6">
                        <MagneticButton href={project.github} variant="secondary" external>
                          <GitHubIcon className="h-4 w-4" /> Code
                        </MagneticButton>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
