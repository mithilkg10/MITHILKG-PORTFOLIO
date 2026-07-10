import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";
import { RoleProvider } from "@/lib/data/roleContext";

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

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://mithilgowda.com';

export const metadata: Metadata = {
  title: "Mithil K Gowda | Security Engineer & Systems Researcher",
  description:
    "I architect distributed, AI-driven defense systems and cryptographic trust frameworks. Currently engineering multi-agent threat detection pipelines and researching post-quantum cryptography.",
  keywords: [
    "Security Engineer",
    "DevSecOps",
    "Cloud Security",
    "AI Security",
    "Backend Engineer",
    "Data Scientist",
    "Threat Intelligence",
    "Systems Researcher",
    "Apache Kafka",
    "Zero-Knowledge Proofs",
  ],
  authors: [{ name: "Mithil K Gowda", url: baseUrl }],
  creator: "Mithil K Gowda",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Mithil K Gowda | Security Engineer",
    description: "Architecting distributed, AI-driven defense systems and cryptographic trust frameworks.",
    url: baseUrl,
    siteName: "Mithil K Gowda Portfolio",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Mithil K Gowda - Security Engineer & Systems Researcher",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mithil K Gowda | Security Engineer",
    description: "Architecting distributed, AI-driven defense systems and cryptographic trust frameworks.",
    creator: "@mithilkgowda",
    images: [`${baseUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Mithil K Gowda",
  "jobTitle": "Security Engineer",
  "url": baseUrl,
  "sameAs": [
    "https://github.com/mithilkg10",
    "https://www.linkedin.com/in/mithil-k-gowda"
  ],
  "knowsAbout": [
    "Cybersecurity",
    "Distributed Systems",
    "Apache Kafka",
    "Machine Learning",
    "Artificial Intelligence",
    "Cryptography",
    "Zero-Knowledge Proofs",
    "Cloud Security",
    "DevSecOps",
    "Threat Intelligence"
  ],
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "M.S. Ramaiah University of Applied Sciences"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${inter.variable} bg-black font-body text-foreground antialiased`}
        suppressHydrationWarning
      >
        <ErrorBoundary>
          <RoleProvider>
            {children}
          </RoleProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
