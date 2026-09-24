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
   <div className="hero-status"><i/> Available for full-time opportunities</div>
   <h1><span>FULL STACK</span><span>DEVELOPER<sup>01</sup></span></h1>
   <div className="hero-bottom"><p>I design and build complete digital products—from robust APIs and databases to memorable, high-performance interfaces.</p><a href="#work">Explore selected work <i>↓</i></a></div>
   <aside className="hero-console" aria-label="Developer profile summary"><header><span><i/><i/><i/></span><b>harsh.system / overview</b><em>LIVE</em></header><div className="console-code"><small>01</small><code><i>const</i> developer = {'{'}</code><small>02</small><code>&nbsp;&nbsp;focus: <b>&quot;full-stack&quot;</b>,</code><small>03</small><code>&nbsp;&nbsp;builds: [<b>&quot;web apps&quot;</b>, <b>&quot;AI products&quot;</b>],</code><small>04</small><code>&nbsp;&nbsp;approach: <b>&quot;engineering × design&quot;</b></code><small>05</small><code>{'}'};</code></div><footer><span><b>06</b> shipped projects</span><span><b>10+</b> technologies</span><span><b>FULL</b> stack focus</span></footer></aside>
   <div className="hero-orbit" aria-hidden="true"><i/><i/><i/><span>&lt;/&gt;</span></div>
  </section>
  <section id="work" className="work-section">
   <header><p>02 / SELECTED WORK</p><h2>Built to work.<br/><em>Designed to stay.</em></h2><span>Six projects across full-stack engineering, AI products and immersive frontend systems.</span></header>
   <div className="project-marquee"><div className="project-list">{[...projects,...projects].map((p,i)=><button key={`${p.slug}-${i}`} onClick={()=>open(p)} className={`project-row project-${i%projects.length+1}`} tabIndex={i>=projects.length?-1:0} aria-hidden={i>=projects.length}><small>0{i%projects.length+1}</small><span className="project-visual"><img src={`/previews/${p.slug}.png`} alt={`${p.name} landing page`} loading="lazy"/><i/></span><span className="project-copy"><strong>{p.name}</strong><em>{p.eyebrow}</em></span><b className="project-arrow">↗</b></button>)}</div></div>
  </section>
  <section id="about" className="about-section"><p>03 / PROFILE</p><div><h2>Engineering depth.<br/>Creative edge.</h2><article><p>Computer Science undergraduate focused on full-stack development. I build secure, responsive applications with JavaScript, React, Next.js, Node.js, Express, MongoDB and SQL.</p><p>Three.js and GSAP are my creative advantage—not my entire identity. The goal is always a complete product that solves a real problem and feels considered at every layer.</p><a href="/about">More about me ↗</a></article></div></section>
  <section className="capabilities"><p>04 / CAPABILITIES</p><div><article><small>01</small><h3>Product Frontend</h3><p>React, Next.js, TypeScript, responsive systems and accessible interfaces.</p></article><article><small>02</small><h3>Backend Systems</h3><p>Node.js, Express, REST APIs, authentication, MongoDB and SQL.</p></article><article><small>03</small><h3>Immersive Web</h3><p>Three.js, React Three Fiber, GSAP and purposeful interactive motion.</p></article></div></section>
  <section className="certificates"><header><p>05 / CERTIFICATES</p><h2>Proof of learning.<br/><em>Built to grow.</em></h2><span>This collection will expand as new credentials are completed.</span></header><div className="certificate-grid"><a href="/certificates/MongoDB-Basics-Certificate.pdf" target="_blank" rel="noreferrer"><span className="cert-mark">M</span><small>DATABASES / MONGODB</small><h3>MongoDB Basics</h3><p>Verified course certificate</p><b>View credential ↗</b></a><article><span>+</span><h3>More credentials<br/>coming soon.</h3><p>JavaScript, frontend and software development.</p></article></div></section>
  <footer className="new-footer"><p>Have a role, idea or ambitious build?</p><h2>LET&apos;S CREATE<br/>SOMETHING GREAT.</h2><section className="footer-actions"><a href="/contact"><span>Start a conversation</span><b>Contact page ↗</b></a><a href="mailto:hrsshhh17shukla06@gmail.com"><span>Prefer email?</span><b>Write to me ↗</b></a><a href="https://www.linkedin.com/in/hrsshhh17" target="_blank"><span>Connect professionally</span><b>LinkedIn ↗</b></a></section><div><span>© 2026 HARSH SHUKLA</span><nav><a href="https://github.com/hrsshhh17" target="_blank">GitHub</a><a href="/Harsh_Shukla_Resume.pdf" target="_blank">Resume</a></nav></div></footer>
  {opening&&<div className="new-transition"><Brand/><p>Opening case study</p><h2>{opening.name}</h2><i/></div>}
 </main>
}
