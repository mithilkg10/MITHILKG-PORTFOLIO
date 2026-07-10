"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { GitHubIcon } from "@/components/ui/SocialIcons";
import { personal } from "@/lib/data/resume";
import { ScrambleText } from "@/components/ui/ScrambleText";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-12 bg-black">
      {/* Background - Ultra Minimalist Grid */}
      <div className="absolute inset-0 z-0 bg-black">
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,255,0.03),transparent_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col-reverse items-center justify-between gap-12 lg:flex-row lg:gap-8">
          
          {/* Left Content - Typography & Details */}
          <motion.div 
            className="flex flex-1 flex-col justify-center text-center lg:text-left lg:max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Name */}
            <h1 className="font-heading text-6xl font-black leading-[0.9] tracking-tighter text-white md:text-7xl lg:text-[6.5rem]">
              <ScrambleText text="MITHIL" /><br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">K GOWDA</span>
            </h1>

            {/* Static Role */}
            <div className="mt-6 flex h-10 items-center justify-center lg:justify-start">
                <p className="font-mono text-lg font-medium tracking-wide text-neutral-400 md:text-xl">
                  Security Engineer & Systems Researcher.
                </p>
            </div>

            {/* Value Proposition */}
            <p className="mt-8 text-base leading-relaxed text-neutral-400 md:text-lg">
              I architect distributed, AI-driven defense systems and cryptographic trust frameworks. Currently engineering multi-agent threat detection pipelines and researching post-quantum cryptography.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/10 active:scale-[0.98]"
              >
                <GitHubIcon className="h-4 w-4 text-neutral-300" />
                GitHub
              </a>
              <a
                href="#research"
                className="flex items-center gap-2 rounded-full border border-transparent px-5 py-3.5 text-sm font-medium text-neutral-400 transition-colors hover:text-white"
              >
                <FileText className="h-4 w-4" />
                Technical Research
              </a>
            </div>
          </motion.div>

          {/* Right Content - Profile Image or Abstract Render */}
          <motion.div 
            className="relative flex w-full max-w-[14rem] items-center justify-center self-end md:max-w-[18rem] lg:mr-10 lg:mt-24 lg:max-w-[20rem]"
            initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -10, transition: { duration: 0.4 } }}
          >
            <div className="absolute inset-0 -z-10 rounded-full bg-white/20 blur-[60px] animate-pulse" />
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-[2.5rem] rounded-b-[1rem] border border-white/10 bg-[#0a0a0a] backdrop-blur-3xl drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-500">
              <div className="absolute inset-x-0 bottom-0 z-10 h-1/2 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <Image 
                src="/profile.png" 
                alt={personal.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                className="object-cover object-top opacity-100"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
