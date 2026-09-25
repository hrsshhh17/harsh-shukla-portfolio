'use client';
import {useEffect,useState} from 'react';
import {useRouter} from 'next/navigation';
import {projects,Project} from '@/lib/projects';
import {Brand} from './brand';
import {MobileMenu} from './mobile-menu';

export default function HomeExperience(){
 const router=useRouter();
 const [time,setTime]=useState('');
 const [opening,setOpening]=useState<Project|null>(null);
 const [filter,setFilter]=useState<'All'|Project['category']>('All');
 useEffect(()=>{const tick=()=>setTime(new Intl.DateTimeFormat('en-IN',{hour:'2-digit',minute:'2-digit',hour12:false,timeZone:'Asia/Kolkata'}).format(new Date()));tick();const id=setInterval(tick,30000);return()=>clearInterval(id)},[]);
 const open=(p:Project)=>{setOpening(p);setTimeout(()=>router.push(`/projects/${p.slug}`),650)};
 return <main className="new-site">
  <header className="new-nav"><Brand/><nav><a href="#work">Work</a><a href="#about">About</a><a href="/contact">Contact</a></nav><div><span>{time} IST</span><a href="/lets-talk">Let&apos;s talk ↗</a><MobileMenu/></div></header>
  <section className="new-hero">
   <div className="stack-visual" aria-hidden="true"><span><b>FRONTEND</b><i>01</i></span><span><b>API LAYER</b><i>02</i></span><span><b>DATABASE</b><i>03</i></span></div>
   <div className="hero-status"><i/> Available for full-time opportunities</div>
   <div className="hero-identity"><span>HARSH SHUKLA</span><i/>FULL-STACK ENGINEER · INDIA</div>
   <h1><span>FULL STACK</span><span>DEVELOPER<sup>01</sup></span></h1>
   <div className="hero-bottom"><p>I design and build complete digital products—from robust APIs and databases to memorable, high-performance interfaces.</p><a href="#work">Explore selected work <i>↓</i></a></div>
   <aside className="hero-console" aria-label="Developer profile summary"><header><span><i/><i/><i/></span><b>harsh.system / overview</b><em>LIVE</em></header><div className="console-code"><small>01</small><code><i>const</i> developer = {'{'}</code><small>02</small><code>&nbsp;&nbsp;focus: <b>&quot;full-stack&quot;</b>,</code><small>03</small><code>&nbsp;&nbsp;builds: [<b>&quot;web apps&quot;</b>, <b>&quot;AI products&quot;</b>],</code><small>04</small><code>&nbsp;&nbsp;approach: <b>&quot;engineering × design&quot;</b></code><small>05</small><code>{'}'};</code></div><footer><span><b>06</b> shipped projects</span><span><b>10+</b> technologies</span><span><b>FULL</b> stack focus</span></footer></aside>
  </section>
  <section id="work" className="work-section">
   <header><p>02 / SELECTED WORK</p><h2>Built to work.<br/><em>Designed to stay.</em></h2><span>Six projects across full-stack engineering, AI products and immersive frontend systems.</span></header>
   <div className="project-filters">{(['All','Full Stack','AI','Frontend','3D'] as const).map(x=><button key={x} className={filter===x?'active':''} aria-pressed={filter===x} onClick={()=>setFilter(x)}>{x}</button>)}</div>
   <div className={`project-marquee ${filter!=='All'?'is-filtered':''}`}><div className="project-list">{(filter==='All'?[...projects,...projects]:projects.filter(p=>p.category===filter)).map((p,i)=><button key={`${p.slug}-${i}`} onClick={()=>open(p)} data-cursor="VIEW" className={`project-row project-${projects.indexOf(p)+1}`} tabIndex={filter==='All'&&i>=projects.length?-1:0} aria-hidden={filter==='All'&&i>=projects.length}><small>0{projects.indexOf(p)+1}</small><span className="project-visual"><img src={`/previews/${p.slug}.png`} alt={`${p.name} landing page`} loading="lazy"/><i/></span><span className="project-copy"><strong>{p.name}</strong><em>{p.eyebrow}</em></span><b className="project-arrow">↗</b></button>)}</div></div>
  </section>
  <section id="about" className="about-section"><p>03 / PROFILE</p><div><h2>Engineering depth.<br/>Creative edge.</h2><article><p>Computer Science undergraduate focused on full-stack development. I build secure, responsive applications with JavaScript, React, Next.js, Node.js, Express, MongoDB and SQL.</p><p>Three.js and GSAP are my creative advantage—not my entire identity. The goal is always a complete product that solves a real problem and feels considered at every layer.</p><a href="/about">More about me ↗</a></article></div></section>
  <section className="capabilities"><p>04 / CAPABILITIES</p><div><article><small>01</small><h3>Product Frontend</h3><p>React, Next.js, TypeScript, responsive systems and accessible interfaces.</p></article><article><small>02</small><h3>Backend Systems</h3><p>Node.js, Express, REST APIs, authentication, MongoDB and SQL.</p></article><article><small>03</small><h3>Immersive Web</h3><p>Three.js, React Three Fiber, GSAP and purposeful interactive motion.</p></article></div></section>
  <section id="skills" className="skill-map"><header><p>05 / ENGINEERING MAP</p><h2>From interface<br/>to infrastructure.</h2></header><div className="skill-orbit"><span className="skill-core">FULL<br/>STACK</span><span className="skill-node n1">React</span><span className="skill-node n2">Next.js</span><span className="skill-node n3">Node.js</span><span className="skill-node n4">REST APIs</span><span className="skill-node n5">MongoDB</span><span className="skill-node n6">SQL</span><i/><i/></div></section>
  <section id="certificates" className="certificates"><header><p>06 / CERTIFICATES</p><h2>Proof of learning.<br/><em>Built to grow.</em></h2><span>This collection will expand as new credentials are completed.</span></header><div className="credential-showcase"><div className="credential-copy"><small>CURRENT CREDENTIAL / 01</small><h3>Learning that<br/>ships with proof.</h3><p>Completed credentials supporting the engineering skills demonstrated across my projects.</p><div className="credential-progress"><i/><i/><i/><span>01 / GROWING COLLECTION</span></div></div><div className="credential-deck"><article className="deck-card deck-back"><small>NEXT</small><b>More credentials</b><span>In progress</span></article><article className="deck-card deck-middle"><small>LEARNING PATH</small><b>JavaScript · Frontend</b><span>Coming soon</span></article><a className="deck-card deck-front" href="/certificates/MongoDB-Basics-Certificate.pdf" target="_blank" rel="noreferrer"><span className="cert-mark">M</span><small>DATABASES / MONGODB</small><b>MongoDB Basics</b><p>Verified course certificate</p><em>View credential ↗</em></a></div></div></section>
  <footer className="new-footer"><p>Have a role, idea or ambitious build?</p><h2>LET&apos;S CREATE<br/>SOMETHING GREAT.</h2><section className="footer-actions"><a href="/contact"><span>Start with the essentials</span><b>Contact details ↗</b></a><a href="mailto:hrsshhh17shukla06@gmail.com"><span>Prefer email?</span><b>Write to me ↗</b></a><a href="https://www.linkedin.com/in/hrsshhh17" target="_blank"><span>Connect professionally</span><b>LinkedIn ↗</b></a></section><div><span>© 2026 HARSH SHUKLA</span><nav><a href="https://github.com/hrsshhh17" target="_blank">GitHub</a><button data-resume-open>Resume</button></nav></div></footer>
  {opening&&<div className="new-transition"><Brand/><p>Opening case study</p><h2>{opening.name}</h2><i/></div>}
 </main>
}




