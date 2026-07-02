import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mithil K Gowda | Cybersecurity Engineer & AI Security Researcher",
  description:
    "Cybersecurity and AI Security researcher with ISRO internship experience, international conference publications, and expertise in multi-agent cyber defense, threat intelligence, and cryptographic trust frameworks.",
  keywords: [
    "Cybersecurity",
    "AI Security",
    "Threat Intelligence",
    "Cloud Security",
    "Security Researcher",
    "ISRO",
    "Multi-Agent Defense",
  ],
  authors: [{ name: "Mithil K Gowda" }],
  openGraph: {
    title: "Mithil K Gowda | Cybersecurity Engineer",
    description: "Securing critical infrastructure through AI-driven security research.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${inter.variable} bg-background font-body text-foreground antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
