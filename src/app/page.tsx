import dynamic from "next/dynamic";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ThreatMapBackground } from "@/components/ui/ThreatMapBackground";
import { Hero } from "@/components/sections/Hero";
import { Preloader } from "@/components/ui/Preloader";

// Dynamic imports for performance and Lighthouse code splitting
const About = dynamic(() => import("@/components/sections/About").then((m) => m.About));
const Education = dynamic(() => import("@/components/sections/Education").then((m) => m.Education));
const Experience = dynamic(() => import("@/components/sections/Experience").then((m) => m.Experience));
const Research = dynamic(() => import("@/components/sections/Research").then((m) => m.Research));
const Projects = dynamic(() => import("@/components/sections/Projects").then((m) => m.Projects));
const CyberLab = dynamic(() => import("@/components/sections/CyberLab").then((m) => m.CyberLab));
const SecurityAssessments = dynamic(() => import("@/components/sections/SecurityAssessments").then((m) => m.SecurityAssessments));
const Certifications = dynamic(() => import("@/components/sections/Certifications").then((m) => m.Certifications));
const Achievements = dynamic(() => import("@/components/sections/Achievements").then((m) => m.Achievements));
const GitHubDashboard = dynamic(() => import("@/components/sections/GitHubDashboard").then((m) => m.GitHubDashboard));
const Contact = dynamic(() => import("@/components/sections/Contact").then((m) => m.Contact));

export default function Home() {
  return (
    <>
      <Preloader />
      <ThreatMapBackground />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Research />
        <Projects />
        <CyberLab />
        <SecurityAssessments />
        <Certifications />
        <Achievements />
        <GitHubDashboard />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
