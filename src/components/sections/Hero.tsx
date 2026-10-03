"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { personal } from "@/lib/data/resume";
import { ScrambleText } from "@/components/ui/ScrambleText";
import { TypeWriter } from "@/components/ui/TypeWriter";
import { RangeMark } from "@/components/ui/RangeMark";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pb-12 pt-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,0.10),transparent_28%),radial-gradient(circle_at_80%_25%,rgba(99,102,241,0.10),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(8,145,178,0.08),transparent_35%)]" />
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "linear-gradient(#67e8f9 1px, transparent 1px), linear-gradient(90deg, #67e8f9 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#020408] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col-reverse items-center justify-between gap-14 lg:flex-row lg:gap-8">
          <motion.div
            className="flex flex-1 flex-col justify-center text-center lg:max-w-3xl lg:text-left"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-5 inline-flex self-center items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-cyan-200 lg:self-start">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.8)]" />
              United Kingdom · MSc Cyber Security Engineering @ Warwick
            </div>

            <h1 className="font-heading text-6xl font-black leading-[0.9] tracking-tighter text-white md:text-7xl lg:text-[6.5rem]">
              <ScrambleText text="MITHIL" /><br />
              <span className="bg-gradient-to-r from-white via-cyan-100 to-slate-500 bg-clip-text text-transparent">K GOWDA</span>
            </h1>

            <div className="mt-6 flex h-10 items-center justify-center lg:justify-start">
              <TypeWriter
                words={[
                  "Cybersecurity Engineer.",
                  "SIEM & Security Operations.",
                  "Detection Engineering.",
                  "Incident Response.",
                  "Python & Linux Security Engineering.",
                ]}
                className="font-mono text-lg font-medium tracking-wide text-cyan-100/80 md:text-xl"
              />
            </div>

            <p className="mt-5 text-base text-slate-300 md:text-lg">
              MSc Cyber Security Engineering · University of Warwick (2026–2027)
            </p>

            <p className="mt-4 text-sm leading-relaxed text-slate-400 md:text-base">
              SIEM · Security Operations · Detection Engineering · Incident Response · Network Security · Application Security · Python / Linux
            </p>

            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
              Former backend and data analytics intern at ISRO LEOS. I build security operations tools and document detection and investigation work in controlled labs. Based in the UK; open to strong opportunities in India.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full border border-cyan-200/15 bg-cyan-200/[0.05] px-6 py-3 text-sm font-medium text-white transition-all hover:border-cyan-200/30 hover:bg-cyan-200/[0.09]">
                <GitHubIcon className="h-4 w-4" /> GitHub
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/[0.08]">
                <LinkedInIcon className="h-4 w-4" /> LinkedIn
              </a>
              <Link href="#projects" className="flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-slate-300 transition hover:border-white/20 hover:text-white">
                <FileText className="h-4 w-4" /> Featured Projects
              </Link>
              <Link href="#contact" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-cyan-100">
                Contact
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="relative flex w-full max-w-[14rem] items-center justify-center md:max-w-[18rem] lg:mr-10 lg:mt-16 lg:max-w-[20rem]"
            initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8, transition: { duration: 0.35 } }}
          >
            <div className="absolute inset-0 -z-10 rounded-full bg-cyan-300/20 blur-[80px]" />
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full border border-cyan-300/15 bg-cyan-300/[0.04] blur-sm" />
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-[2.5rem] rounded-b-[1rem] border border-cyan-100/15 bg-[#071018]/80 shadow-2xl shadow-cyan-950/40 backdrop-blur-3xl">
              <div className="absolute inset-x-0 bottom-0 z-10 h-1/2 bg-gradient-to-t from-[#020408] via-[#020408]/50 to-transparent" />
              <Image
                src="/profile.png"
                alt={personal.name}
                fill
                sizes="(max-width: 768px) 224px, 320px"
                priority
                className="object-cover object-top"
              />
            </div>

            <Link href="/lab" className="hero-range-badge" aria-label="Open MKG Cyber Defense Lab">
              <RangeMark />
              <span>
                <b>MKG CYBER RANGE</b>
                <small>RANGE READY <i>·</i> ISOLATED LAB</small>
              </span>
              <span aria-hidden="true">↗</span>
            </Link>
          </motion.div>
        </div>

        <div className="range-proof-strip mt-14">
          <span><b>06</b> documented investigations</span>
          <span><b>10</b> Sigma rules</span>
          <span><b>01</b> custom Wazuh rule</span>
          <span><b>05</b> MITRE ATT&CK techniques</span>
          <Link href="/lab">Open Cyber Defense Lab ↗</Link>
        </div>
      </div>
    </section>
  );
}
