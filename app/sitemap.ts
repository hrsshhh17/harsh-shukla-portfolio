import type {MetadataRoute} from 'next';
import {projects} from '@/lib/projects';

export default function sitemap():MetadataRoute.Sitemap{
 const base='https://harsh-shukla-portfolio-seven.vercel.app';
 return [
  {url:base,changeFrequency:'monthly',priority:1},
  {url:`${base}/about`,changeFrequency:'yearly',priority:.8},
  {url:`${base}/recruiter`,changeFrequency:'monthly',priority:.9},
  {url:`${base}/contact`,changeFrequency:'yearly',priority:.6},
  {url:`${base}/lets-talk`,changeFrequency:'yearly',priority:.6},
  ...projects.map(project=>({url:`${base}/projects/${project.slug}`,changeFrequency:'monthly' as const,priority:.85}))
 ];
}
