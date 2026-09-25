import type {MetadataRoute} from 'next';

export default function manifest():MetadataRoute.Manifest{
 return {name:'Harsh Shukla — Full Stack Developer',short_name:'Harsh Shukla',description:'Full-stack applications, AI-assisted products and immersive web experiences.',start_url:'/',display:'standalone',background_color:'#0a0a09',theme_color:'#0a0a09',icons:[{src:'/favicon.svg',sizes:'any',type:'image/svg+xml'}]};
}
