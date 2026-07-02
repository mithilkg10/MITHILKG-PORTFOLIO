"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Shield, Target, Brain, Rocket, Award, Flame, Cpu, Radar,
  type LucideIcon,
} from "lucide-react";
import { aboutCards } from "@/lib/data/resume";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TiltCard } from "@/components/ui/TiltCard";

const iconMap: Record<string, LucideIcon> = {
  Shield, Target, Brain, Rocket, Award, Flame, Cpu, Radar,
};

export function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const cards = sectionRef.current?.querySelectorAll(".about-card");
    if (cards) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="About Me"
          title="Defending the Digital Frontier"
          description="Not just a developer — a security researcher building intelligent defense systems for critical infrastructure."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aboutCards.map((card) => {
            const Icon = iconMap[card.icon] || Shield;
            return (
              <TiltCard key={card.id} className="about-card h-full">
                <div className="glass-card group h-full rounded-2xl p-6 transition-colors duration-300 hover:bg-white/[0.04]">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5 text-foreground/80" />
                  </div>
                  <h3 className="mb-3 font-heading text-lg font-bold text-foreground">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-foreground/60">{card.content}</p>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
