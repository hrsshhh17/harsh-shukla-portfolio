'use client';
import {useEffect,useState} from 'react';
import {projects,Project} from '@/lib/projects';
import {Brand} from './brand';

export default function HomeExperience(){
 const [time,setTime]=useState('');
 const [opening,setOpening]=useState<Project|null>(null);
 useEffect(()=>{const tick=()=>setTime(new Intl.DateTimeFormat('en-IN',{hour:'2-digit',minute:'2-digit',hour12:false,timeZone:'Asia/Kolkata'}).format(new Date()));tick();const id=setInterval(tick,30000);return()=>clearInterval(id)},[]);
 const open=(p:Project)=>{setOpening(p);setTimeout(()=>window.location.assign(`/projects/${p.slug}`),650)};
 return <main className="new-site">
  <header className="new-nav"><Brand/><nav><a href="#work">Work</a><a href="#about">About</a><a href="/contact">Contact</a></nav><div><span>{time} IST</span><a href="mailto:hrsshhh17shukla06@gmail.com">Let&apos;s talk ↗</a></div></header>
  <section className="new-hero">
   <div className="hero-status"><i/> Available for full-time opportunities · 2027</div>
   <h1><span>FULL STACK</span><span>DEVELOPER<sup>01</sup></span></h1>
   <div className="hero-bottom"><p>I design and build complete digital products—from robust APIs and databases to memorable, high-performance interfaces.</p><div><b>BASED IN</b><span>Dewas, Madhya Pradesh<br/>India</span></div><a href="#work">Explore selected work <i>↓</i></a></div>
   <div className="hero-orbit" aria-hidden="true"><i/><i/><i/><span>HS</span></div>
  </section>
  <section id="work" className="work-section">
   <header><p>02 / SELECTED WORK</p><h2>Built to work.<br/><em>Designed to stay.</em></h2><span>Six projects across full-stack engineering, AI products and immersive frontend systems.</span></header>
   <div className="project-list">{projects.map((p,i)=><button key={p.slug} onClick={()=>open(p)} className={`project-row project-${i+1}`}><small>0{i+1}</small><span className="project-visual"><i/><b>{p.name.slice(0,2)}</b></span><span className="project-copy"><strong>{p.name}</strong><em>{p.eyebrow}</em></span><span className="project-stack">{p.stack.slice(0,3).join(' · ')}</span><b className="project-arrow">↗</b></button>)}</div>
  </section>
  <section id="about" className="about-section"><p>03 / PROFILE</p><div><h2>Engineering depth.<br/>Creative edge.</h2><article><p>Computer Science undergraduate focused on full-stack development. I build secure, responsive applications with JavaScript, React, Next.js, Node.js, Express, MongoDB and SQL.</p><p>Three.js and GSAP are my creative advantage—not my entire identity. The goal is always a complete product that solves a real problem and feels considered at every layer.</p><a href="/about">More about me ↗</a></article></div></section>
  <section className="capabilities"><p>04 / CAPABILITIES</p><div><article><small>01</small><h3>Product Frontend</h3><p>React, Next.js, TypeScript, responsive systems and accessible interfaces.</p></article><article><small>02</small><h3>Backend Systems</h3><p>Node.js, Express, REST APIs, authentication, MongoDB and SQL.</p></article><article><small>03</small><h3>Immersive Web</h3><p>Three.js, React Three Fiber, GSAP and purposeful interactive motion.</p></article></div></section>
  <footer className="new-footer"><p>Have a role, idea or ambitious build?</p><a href="mailto:hrsshhh17shukla06@gmail.com">LET&apos;S CREATE<br/>SOMETHING GREAT. <span>↗</span></a><div><span>© 2026 HARSH SHUKLA</span><nav><a href="https://github.com/hrsshhh17" target="_blank">GitHub</a><a href="https://www.linkedin.com/in/hrsshhh17" target="_blank">LinkedIn</a><a href="/Harsh_Shukla_Resume.pdf" target="_blank">Resume</a></nav></div></footer>
  {opening&&<div className="new-transition"><Brand/><p>Opening case study</p><h2>{opening.name}</h2><i/></div>}
 </main>
}
