"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Download, Send, MapPin, Phone, User, MessageSquare, CheckCircle2 } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { personal, resumePath } from "@/lib/data/resume";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`);
    const body = encodeURIComponent(formState.message);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSent(true);
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

          <motion.form
            onSubmit={handleSubmit}
            className="glass-card group relative overflow-hidden rounded-[2rem] p-8 lg:col-span-3 lg:p-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative space-y-6">
              <div className="group/input">
                <label htmlFor="name" className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-foreground/50 transition-colors group-focus-within/input:text-foreground/90">
                  <User className="h-3.5 w-3.5" />
                  Name
                </label>
                <input
                  suppressHydrationWarning
                  id="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-foreground/20 focus:border-white/30 focus:bg-white/10 focus:ring-1 focus:ring-white/20"
                  placeholder="John Doe"
                />
              </div>

              <div className="group/input">
                <label htmlFor="email" className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-foreground/50 transition-colors group-focus-within/input:text-foreground/90">
                  <Mail className="h-3.5 w-3.5" />
                  Email
                </label>
                <input
                  suppressHydrationWarning
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-foreground/20 focus:border-white/30 focus:bg-white/10 focus:ring-1 focus:ring-white/20"
                  placeholder="john@example.com"
                />
              </div>

              <div className="group/input">
                <label htmlFor="message" className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-foreground/50 transition-colors group-focus-within/input:text-foreground/90">
                  <MessageSquare className="h-3.5 w-3.5" />
                  Message
                </label>
                <textarea
                  suppressHydrationWarning
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-foreground/20 focus:border-white/30 focus:bg-white/10 focus:ring-1 focus:ring-white/20"
                  placeholder="Tell me about the opportunity or project..."
                />
              </div>

              <MagneticButton 
                type="submit" 
                variant="primary" 
                className={`w-full overflow-hidden transition-all duration-500 ${sent ? "!bg-green-500/20 !text-green-400 !border-green-500/50" : ""}`}
              >
                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.div
                      key="sent"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex items-center justify-center gap-2"
                    >
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Opening Client...</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="send"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex items-center justify-center gap-2"
                    >
                      <Send className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                      <span>Send Message</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </MagneticButton>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
