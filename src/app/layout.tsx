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
  title: "Mithil K Gowda | Cybersecurity Engineer",
  description:
    "MSc Cyber Security Engineering at the University of Warwick. Security operations, detection engineering, incident response, Python and Linux.",
  keywords: ["Cybersecurity Engineer", "Security Operations", "Detection Engineering", "Incident Response", "Python", "Linux", "Wazuh", "University of Warwick"],
  authors: [{ name: "Mithil K Gowda", url: baseUrl }],
  creator: "Mithil K Gowda",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Mithil K Gowda | Cybersecurity Engineer",
    description: "Security operations, detection engineering and incident response. MSc Cyber Security Engineering at the University of Warwick.",
    url: baseUrl,
    siteName: "Mithil K Gowda Portfolio",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Mithil K Gowda - Cybersecurity Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mithil K Gowda | Cybersecurity Engineer",
    description: "Security operations, detection engineering and incident response. MSc Cyber Security Engineering at the University of Warwick.",
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
  "jobTitle": "Cybersecurity Engineer",
  "url": baseUrl,
  "sameAs": [
    "https://github.com/mithilkg10",
    "https://www.linkedin.com/in/mithil-k-gowda"
  ],
  "knowsAbout": ["Security Operations", "Detection Engineering", "Incident Response", "Python", "Linux", "Wazuh"],
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "University of Warwick"
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
