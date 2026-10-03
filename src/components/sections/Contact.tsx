"use client";

import { Mail, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { personal } from "@/lib/data/resume";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Contact() {
  return (
    <section id="contact" className="section-padding relative">
      <div className="relative mx-auto max-w-5xl">
        <SectionHeader label="Contact" title="Get in Touch" description="Open to cybersecurity engineering, security operations, detection engineering, and incident response roles in the UK and India." />
        <div className="glass-card rounded-[2rem] p-8 md:p-10">
          <div className="grid gap-6 sm:grid-cols-2">
            <a href={`mailto:${personal.email}`} className="flex items-center gap-3 text-sm text-foreground/80 hover:text-white"><Mail className="h-5 w-5" /> {personal.email}</a>
            <span className="flex items-center gap-3 text-sm text-foreground/70"><MapPin className="h-5 w-5" /> UK based · open to India</span>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 border-t border-white/10 pt-6">
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white hover:bg-white/10"><GitHubIcon className="h-4 w-4" /> GitHub</a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white hover:bg-white/10"><LinkedInIcon className="h-4 w-4" /> LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}
