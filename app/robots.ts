import type {MetadataRoute} from 'next';

export default function robots():MetadataRoute.Robots{
 return {rules:{userAgent:'*',allow:'/',disallow:['/api/']},sitemap:'https://harsh-shukla-system.hrsshhh17shukla06.chatgpt.site/sitemap.xml'};
}
