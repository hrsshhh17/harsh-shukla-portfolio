import type { Metadata } from "next";
import "./globals.css";
import {SiteTools} from '@/components/site-tools';
import {PointerTracker} from '@/components/pointer-tracker';

export const metadata: Metadata = {
  title: {
    default: "Harsh Shukla | Full Stack Developer Portfolio",
    template: "%s | Harsh Shukla",
  },
  description: "Harsh Shukla is a full stack developer and Computer Science undergraduate building secure web applications, AI-assisted products, REST APIs and immersive React experiences.",
  applicationName: "Harsh Shukla Portfolio",
  authors: [{ name: "Harsh Shukla", url: "https://harsh-shukla-portfolio-seven.vercel.app" }],
  creator: "Harsh Shukla",
  publisher: "Harsh Shukla",
  category: "technology",
  verification: {
    google: "kpw62uXY9uyt0Dg4AqfoBtlr1cuFjKXOpLFWeeYk1-k",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  metadataBase: new URL('https://harsh-shukla-portfolio-seven.vercel.app'),
  alternates:{canonical:'/'},
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {title:'Harsh Shukla | Full Stack Developer Portfolio',description:'Full-stack applications, AI-assisted products, REST APIs and immersive web experiences by Harsh Shukla.',type:'website',locale:'en_IN',url:'/',siteName:'Harsh Shukla Portfolio',images:[{url:'/harsh-shukla-portfolio-preview-v2.jpg',width:1200,height:630,alt:'Harsh Shukla — Full Stack Developer'}]},
  twitter: {card:'summary_large_image',title:'Harsh Shukla | Full Stack Developer Portfolio',description:'Full-stack applications, AI-assisted products, REST APIs and immersive web experiences by Harsh Shukla.',images:['/harsh-shukla-portfolio-preview-v2.jpg']},
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://harsh-shukla-portfolio-seven.vercel.app/#website",
      url: "https://harsh-shukla-portfolio-seven.vercel.app/",
      name: "Harsh Shukla Portfolio",
      description: "Full stack developer portfolio of Harsh Shukla.",
      inLanguage: "en-IN",
      publisher: { "@id": "https://harsh-shukla-portfolio-seven.vercel.app/#person" },
    },
    {
      "@type": "Person",
      "@id": "https://harsh-shukla-portfolio-seven.vercel.app/#person",
      name: "Harsh Shukla",
      url: "https://harsh-shukla-portfolio-seven.vercel.app/",
      image: "https://harsh-shukla-portfolio-seven.vercel.app/harsh-shukla-portrait.png",
      jobTitle: "Full Stack Developer",
      description: "Computer Science undergraduate and full stack developer building web applications, APIs, AI-assisted products and interactive experiences.",
      sameAs: [
        "https://github.com/hrsshhh17",
        "https://www.linkedin.com/in/hrsshhh17",
      ],
      alumniOf: { "@type": "CollegeOrUniversity", name: "SAGE University, Indore" },
      knowsAbout: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express.js", "MongoDB", "SQL", "REST APIs", "Three.js", "GSAP"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body className="antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
        {children}<SiteTools/><PointerTracker/>
      </body>
    </html>
  );
}
