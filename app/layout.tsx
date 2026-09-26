import type { Metadata } from "next";
import "./globals.css";
import {SiteTools} from '@/components/site-tools';
import {PointerTracker} from '@/components/pointer-tracker';

export const metadata: Metadata = {
  title: "Harsh Shukla — Full Stack Developer",
  description: "Portfolio of Harsh Shukla, a full-stack developer building secure applications and immersive web experiences.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  metadataBase: new URL('https://harsh-shukla-portfolio-seven.vercel.app'),
  alternates:{canonical:'/'},
  openGraph: {title:'Harsh Shukla — Full Stack Developer',description:'Full-stack applications, AI-assisted products and immersive web experiences.',type:'website',url:'/',siteName:'Harsh Shukla Portfolio',images:[{url:'/harsh-shukla-portfolio-preview-v2.jpg',width:1200,height:630,alt:'Harsh Shukla — Full-Stack Developer'}]},
  twitter: {card:'summary_large_image',title:'Harsh Shukla — Full Stack Developer',description:'Full-stack applications, AI-assisted products and immersive web experiences.',images:['/harsh-shukla-portfolio-preview-v2.jpg']},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}<SiteTools/><PointerTracker/></body>
    </html>
  );
}
