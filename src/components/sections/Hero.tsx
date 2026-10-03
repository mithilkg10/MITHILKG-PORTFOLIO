"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { GitHubIcon } from "@/components/ui/SocialIcons";
import { personal } from "@/lib/data/resume";

export function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-black pb-12 pt-28">
      <div className="absolute inset-0 z-0 bg-black">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,255,0.03),transparent_100%)]" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
          <motion.div className="flex flex-1 flex-col justify-center text-center lg:max-w-2xl lg:text-left" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-heading text-5xl font-black leading-[0.95] tracking-tighter text-white md:text-7xl lg:text-[6.5rem]">
              MITHIL<br /><span className="bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">K GOWDA</span>
            </h1>
            <p className="mt-6 font-mono text-xl font-medium text-white md:text-2xl">Cybersecurity Engineer</p>
            <p className="mt-3 text-base text-neutral-300 md:text-lg">MSc Cyber Security Engineering · University of Warwick (2026–2027)</p>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400 md:text-base">Security Operations · Detection Engineering · Incident Response · Python · Linux</p>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-neutral-400 md:text-base">
              Former backend and data analytics intern at ISRO LEOS. I build security operations tools and document detection and investigation work in controlled labs. Based in the UK; open to strong opportunities in India.
            </p>
            <p className="mt-5 text-sm text-neutral-400">
              Featured: <a className="text-white underline underline-offset-4" href="#projects">Vyomrix, ABHEDYA and CarbonEx</a>
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10">
                <GitHubIcon className="h-4 w-4" /> GitHub
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10">LinkedIn</a>
              <Link href="#contact" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-neutral-200">Contact</Link>
            </div>
          </motion.div>
          <motion.div className="relative w-full max-w-[12rem] shrink-0 md:max-w-[16rem] lg:mr-10 lg:max-w-[20rem]" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="relative aspect-[3/4] overflow-hidden rounded-t-[2.5rem] rounded-b-[1rem] border border-white/10 bg-[#0a0a0a]">
              <Image src="/profile.png" alt={personal.name} fill sizes="(max-width: 768px) 192px, 320px" priority className="object-cover object-top" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
