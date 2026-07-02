"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { certifications } from "@/lib/data/resume";
import { SectionHeader } from "@/components/ui/SectionHeader";

const issuerColors: Record<string, string> = {
  IBM: "from-blue-600/20 to-cyan-500/10 border-blue-500/20 text-blue-400",
  Cisco: "from-green-500/20 to-emerald-500/10 border-emerald-500/20 text-emerald-400",
  IGNOU: "from-orange-500/20 to-red-500/10 border-orange-500/20 text-orange-400",
  NPTEL: "from-indigo-500/20 to-purple-500/10 border-indigo-500/20 text-indigo-400",
};

export function Certifications() {
  return (
    <section id="certifications" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Certifications"
          title="Verified Credentials"
          description="IBM, Cisco CEH, IGNOU, and NPTEL credentials across cybersecurity, cloud computing, and analytics."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, index) => {
            const colorClass = issuerColors[cert.issuer] || "from-white/10 to-white/5 border-white/10 text-white/80";
            const CardWrapper = cert.url ? motion.a : motion.div;
            
            return (
              <CardWrapper
                key={cert.id}
                href={cert.url}
                target={cert.url ? "_blank" : undefined}
                rel={cert.url ? "noopener noreferrer" : undefined}
                className="group h-56 [perspective:1000px] block cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="relative h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front */}
                  <div className="glass-card absolute inset-0 flex flex-col items-center justify-center rounded-[2rem] p-6 [backface-visibility:hidden]">
                    <div
                      className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border bg-gradient-to-br ${colorClass} font-mono text-xl font-bold`}
                    >
                      {cert.issuer.slice(0, 2).toUpperCase()}
                    </div>
                    <h3 className="text-center font-heading text-sm font-semibold leading-relaxed text-foreground/90">{cert.title}</h3>
                    <p className="mt-2 font-mono text-xs text-foreground/50">{cert.issuer}</p>
                  </div>

                  {/* Back */}
                  <div className="glass-card absolute inset-0 flex flex-col items-center justify-center rounded-[2rem] border-white/20 bg-white/5 p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <p className="font-mono text-xs uppercase tracking-widest text-foreground/60">
                      {cert.issuer}
                    </p>
                    <h3 className="mt-3 text-center font-heading text-sm font-semibold leading-relaxed text-foreground">{cert.title}</h3>
                    <p className="mt-3 font-mono text-xs text-foreground/50">
                      Year: {cert.year} &middot; {cert.status}
                    </p>
                    {cert.url && (
                      <div className="mt-5 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs text-foreground/80 transition-colors group-hover:bg-white/10 group-hover:text-foreground">
                        <ExternalLink className="h-3.5 w-3.5" />
                        Credential
                      </div>
                    )}
                  </div>
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
