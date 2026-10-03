"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Copy, ExternalLink, Mail, MapPin, Terminal } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { personal } from "@/lib/data/resume";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_100%,rgba(34,211,238,.08),transparent_34%),radial-gradient(circle_at_85%_70%,rgba(99,102,241,.07),transparent_32%)]" />
      <div className="relative mx-auto max-w-5xl">
        <SectionHeader
          label="Contact"
          title="Get in Touch"
          description="Open to cybersecurity engineering, security operations, detection engineering, and incident response roles in the UK and India."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-card h-full rounded-[2rem] p-8">
              <h3 className="font-heading text-2xl font-bold tracking-tight">Connect</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                For cybersecurity roles, security engineering work, research, or technical collaboration.
              </p>

              <div className="mt-8 space-y-5">
                <a href={`mailto:${personal.email}`} className="flex items-center gap-4 text-sm text-foreground/80 hover:text-white">
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-cyan-300/15 bg-cyan-300/[0.06]">
                    <Mail className="h-4 w-4 text-cyan-200" />
                  </span>
                  {personal.email}
                </a>
                <div className="flex items-center gap-4 text-sm text-foreground/70">
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04]">
                    <MapPin className="h-4 w-4" />
                  </span>
                  UK based · open to India
                </div>
              </div>

              <div className="mt-9 flex gap-3 border-t border-white/10 pt-6">
                <a href={personal.github} target="_blank" rel="noopener noreferrer" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.08]">
                  <GitHubIcon className="h-5 w-5" />
                </a>
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.08]">
                  <LinkedInIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="group relative overflow-hidden rounded-[2rem] border border-cyan-200/10 bg-[#05080d]/80 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl lg:col-span-3 lg:p-10"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-cyan-300/70" />
                <span className="font-mono text-xs uppercase tracking-wider text-cyan-100/60">Secure Comms Terminal</span>
              </div>
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
              </div>
            </div>

            <div className="space-y-4 font-mono text-sm">
              <p className="text-cyan-300">
                <span className="text-cyan-300/45">mithil@security:~$</span> ./open_channel.sh
              </p>
              <p className="text-white/70">[+] Candidate profile: Cybersecurity Engineer</p>
              <p className="text-white/70">[+] Current base: United Kingdom</p>
              <p className="text-white/70">[+] Focus: SIEM · Detection Engineering · Incident Response · Python · Linux</p>
              <p className="text-white/70">[+] Contact endpoint: <span className="text-white">{personal.email}</span></p>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button onClick={copyEmail} className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-4 transition hover:bg-white/[0.08]">
                {copied ? <CheckCircle2 className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4 text-white/70" />}
                <span className="font-mono text-xs uppercase tracking-wider">{copied ? "Copied" : "Copy Email"}</span>
              </button>
              <a href={`mailto:${personal.email}`} className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-black transition hover:bg-cyan-100">
                <ExternalLink className="h-4 w-4" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">Open Mail</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
