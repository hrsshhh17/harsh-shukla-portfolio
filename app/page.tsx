import HomeExperience from '@/components/home-experience';
import type {Metadata} from 'next';

export const metadata:Metadata={
 title:{absolute:'Harsh Shukla | Full Stack Developer Portfolio'},
 description:'Portfolio of Harsh Shukla, a full stack developer skilled in JavaScript, React, Next.js, Node.js, MongoDB, SQL, REST APIs, Three.js and GSAP.',
 alternates:{canonical:'/'},
};
export default function Home(){return <HomeExperience/>}
