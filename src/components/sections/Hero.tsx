"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, BookOpen, Award, ArrowRight, Download, Mail } from "lucide-react";
import { personal, resumePath } from "@/lib/data/resume";

const roles = [
  "Cybersecurity Engineer",
  "AI Security Researcher",
  "Threat Intelligence",
  "Cloud Security",
  "Critical Infrastructure Security",
  "ISRO Intern"
];

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-12">
      {/* Background - Subtle Grid & Particles */}
      <div className="absolute inset-0 z-0 bg-background">
        {/* Subtle Cyber Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
        
        {/* Soft Radial Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,255,0.05),transparent_100%)]" />
        
        {/* Thin Connection Lines (Abstract SVG) */}
        <svg className="absolute inset-0 h-full w-full opacity-20 mix-blend-screen" xmlns="http://www.w3.org/2000/svg">
          <motion.path 
            d="M-100 200 Q 400 300, 800 100 T 1500 400" 
            fill="none" 
            stroke="rgba(255,255,255,0.1)" 
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          <motion.path 
            d="M-100 600 Q 500 500, 900 700 T 1500 500" 
            fill="none" 
            stroke="rgba(255,255,255,0.05)" 
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 4, delay: 1, ease: "easeInOut" }}
          />
        </svg>

        {/* Bottom Fade to Content */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent" />
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
            <h1 className="font-heading text-6xl font-black leading-[0.9] tracking-tighter text-foreground md:text-7xl lg:text-[6.5rem]">
              MITHIL<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
                K GOWDA
              </span>
            </h1>

            {/* Rotating Role */}
            <div className="mt-6 flex h-10 items-center justify-center lg:justify-start">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentRole}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="font-mono text-lg font-medium tracking-wide text-foreground/80 md:text-xl"
                >
                  {roles[currentRole]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Premium Badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 backdrop-blur-sm transition-colors hover:bg-white/5">
                <Shield className="h-4 w-4 text-emerald-400" />
                <span className="font-mono text-xs font-semibold text-foreground/80 uppercase tracking-wider">ISRO LEOS Intern</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 backdrop-blur-sm transition-colors hover:bg-white/5">
                <BookOpen className="h-4 w-4 text-blue-400" />
                <span className="font-mono text-xs font-semibold text-foreground/80 uppercase tracking-wider">Research Author</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 backdrop-blur-sm transition-colors hover:bg-white/5">
                <Award className="h-4 w-4 text-purple-400" />
                <span className="font-mono text-xs font-semibold text-foreground/80 uppercase tracking-wider">Reliance Scholar</span>
              </div>
            </div>

            {/* Value Proposition */}
            <p className="mt-8 text-base leading-relaxed text-foreground/60 md:text-lg">
              Building intelligent cyber defense systems that protect critical infrastructure through AI-driven security research.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href="#research"
                className="group flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                View Research
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={resumePath}
                download
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-medium text-foreground transition-all hover:bg-white/10 active:scale-[0.98]"
              >
                <Download className="h-4 w-4 text-foreground/70" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 rounded-full border border-transparent px-5 py-3.5 text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                Contact
              </a>
            </div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div 
            className="relative flex w-full max-w-[14rem] items-center justify-center self-end md:max-w-[18rem] lg:mr-10 lg:mt-24 lg:max-w-[20rem]"
            initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -10, transition: { duration: 0.4 } }}
          >
            {/* Very subtle glow behind the container */}
            <div className="absolute inset-0 -z-10 rounded-full bg-white/5 blur-[60px]" />
            
            {/* Premium Image Container */}
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-[2.5rem] rounded-b-[1rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl drop-shadow-2xl">
              {/* Fade out the bottom of the photo */}
              <div className="absolute inset-x-0 bottom-0 z-10 h-1/2 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
              <Image 
                src="/profile.png" 
                alt={personal.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                className="object-cover object-top opacity-90 transition-opacity hover:opacity-100"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
