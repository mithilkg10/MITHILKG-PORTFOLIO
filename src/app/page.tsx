import dynamic from "next/dynamic";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";

const Projects = dynamic(() => import("@/components/sections/Projects").then((m) => m.Projects));
const Experience = dynamic(() => import("@/components/sections/Experience").then((m) => m.Experience));
const CyberLab = dynamic(() => import("@/components/sections/CyberLab").then((m) => m.CyberLab));
const Education = dynamic(() => import("@/components/sections/Education").then((m) => m.Education));
const Research = dynamic(() => import("@/components/sections/Research").then((m) => m.Research));
const Certifications = dynamic(() => import("@/components/sections/Certifications").then((m) => m.Certifications));
const Contact = dynamic(() => import("@/components/sections/Contact").then((m) => m.Contact));

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <CyberLab />
        <Education />
        <Research />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
