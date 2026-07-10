"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Download, MapPin, Phone, Terminal, Copy, CheckCircle2, ExternalLink } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { personal, resumePath } from "@/lib/data/resume";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleMailto = () => {
    window.location.href = `mailto:${personal.email}`;
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.03),transparent_60%)]" />

      <div className="relative mx-auto max-w-5xl">
        <SectionHeader
          label="Contact"
          title="Let's Secure the Future Together"
          description="Open to cybersecurity roles, research collaborations, and security engineering opportunities."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-8">
          <motion.div
            className="space-y-6 lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-card rounded-[2rem] p-8">
              <h3 className="font-heading text-2xl font-bold tracking-tight">Get in Touch</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                Whether you&apos;re a recruiter, researcher, or fellow security enthusiast — I&apos;d love to connect.
              </p>

              <div className="mt-8 space-y-6">
                {[
                  { icon: Mail, label: personal.email, href: `mailto:${personal.email}` },
                  { icon: Phone, label: personal.phone, href: `tel:${personal.phone}` },
                  { icon: MapPin, label: personal.location, href: undefined },
                ].map(({ icon: Icon, label, href }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5">
                      <Icon className="h-4 w-4 text-foreground/80" />
                    </div>
                    {href ? (
                      <a href={href} className="text-sm font-medium text-foreground/80 hover:text-foreground">
                        {label}
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-foreground/80">{label}</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-10 flex gap-4">
                <MagneticButton href={personal.github} variant="secondary" external className="!rounded-full !px-4 !py-4">
                  <GitHubIcon className="h-5 w-5" />
                </MagneticButton>
                <MagneticButton href={personal.linkedin} variant="secondary" external className="!rounded-full !px-4 !py-4">
                  <LinkedInIcon className="h-5 w-5" />
                </MagneticButton>
                <MagneticButton href={resumePath} variant="secondary" className="!rounded-full !px-4 !py-4">
                  <Download className="h-5 w-5" />
                </MagneticButton>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/60 p-8 shadow-2xl backdrop-blur-xl lg:col-span-3 lg:p-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Terminal Header */}
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-white/50" />
                <span className="font-mono text-xs uppercase tracking-wider text-white/50">Secure Comms Terminal</span>
              </div>
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
              </div>
            </div>

            {/* Terminal Body */}
            <div className="space-y-4 font-mono text-sm">
              <p className="text-green-400">
                <span className="text-green-400/50">mithil@root:~$</span> ./initiate_contact.sh
              </p>
              <p className="text-white/70">
                [+] Establishing secure channel...
              </p>
              <p className="text-white/70">
                [+] Target acquired: <span className="font-semibold text-white">{personal.email}</span>
              </p>
              <p className="text-white/70">
                [+] Awaiting transmission. Please send an encrypted payload (or just a regular email) to my inbox. I usually respond within 24 hours.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={handleCopy}
                className="group flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-4 transition-all hover:bg-white/10 hover:text-white"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="h-4 w-4 text-green-400" />
                    <span className="font-mono text-xs uppercase tracking-wider text-green-400">Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 text-white/70 group-hover:text-white" />
                    <span className="font-mono text-xs uppercase tracking-wider text-white/70 group-hover:text-white">Copy Address</span>
                  </>
                )}
              </button>
              
              <button
                onClick={handleMailto}
                className="group flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-black transition-all hover:bg-white/90"
              >
                <ExternalLink className="h-4 w-4" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">Launch Mail Client</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
