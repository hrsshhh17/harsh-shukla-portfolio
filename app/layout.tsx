import type { Metadata } from "next";
import "./globals.css";
import {SiteTools} from '@/components/site-tools';

export const metadata: Metadata = {
  title: "Harsh Shukla — Full Stack Developer",
  description: "Portfolio of Harsh Shukla, a full-stack developer building secure applications and immersive web experiences.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  metadataBase: new URL('https://harsh-shukla-system.hrsshhh17shukla06.chatgpt.site'),
  openGraph: {title:'Harsh Shukla — Full Stack Developer',description:'Full-stack applications, AI-assisted products and immersive web experiences.',type:'website',images:['/previews/converge.png']},
  twitter: {card:'summary_large_image',title:'Harsh Shukla — Full Stack Developer',description:'Full-stack applications, AI-assisted products and immersive web experiences.',images:['/previews/converge.png']},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}<SiteTools/></body>
    </html>
  );
}
