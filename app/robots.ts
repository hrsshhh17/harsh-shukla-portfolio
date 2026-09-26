import type {MetadataRoute} from 'next';

export default function robots():MetadataRoute.Robots{
 return {rules:{userAgent:'*',allow:'/',disallow:['/api/']},sitemap:'https://harsh-shukla-portfolio-seven.vercel.app/sitemap.xml'};
}
