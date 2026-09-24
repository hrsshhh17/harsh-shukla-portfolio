'use client';
import dynamic from 'next/dynamic';
import {useState} from 'react';
import {projects,Project} from '@/lib/projects';
import {Brand} from './brand';

const CosmicScene=dynamic(()=>import('./cosmic-scene'),{ssr:false});

export default function HomeExperience(){
 const [selected,setSelected]=useState<Project|null>(null);
 const open=(p:Project)=>{if(selected)return;setSelected(p);setTimeout(()=>window.location.assign(`/projects/${p.slug}`),1350)};
 return <main className="hud-home">
  <div className="hud-grid"/>
  <div className="hud-canvas"><CosmicScene onSelect={open}/></div>
  <header className="hud-header"><Brand/><p>CODE <em>×</em> CREATE <em>×</em> EXPLORE</p><a href="mailto:hrsshhh17shukla06@gmail.com">AVAILABLE FOR WORK <i/></a></header>
  <nav className="hud-nav"><a className="active" href="/">01 HOME</a><a href="#work">02 WORK</a><a href="/about">03 ABOUT</a><a href="/contact">04 CONTACT</a></nav>
  <section className="hud-identity"><p>FULL STACK DEVELOPER · INDIA</p><h1>HARSH<br/><span>SHUKLA</span></h1><div className="hud-rule"/><h2>I BUILD DIGITAL SYSTEMS<br/>THAT MOVE.</h2><p className="hud-summary">Full-stack applications, AI-assisted products and immersive web experiences built with modern JavaScript.</p></section>
  <section id="work" className="project-hud"><header><span>SELECTED WORK</span><b>06 PROJECT WORLDS</b></header>{projects.map((p,i)=><button key={p.slug} onClick={()=>open(p)}><small>0{i+1}</small><span><b>{p.name}</b><em>{p.eyebrow}</em></span><i>↗</i></button>)}</section>
  <button className="enter-core" onClick={()=>open(projects[0])}><span>ENTER<br/>THE SYSTEM</span><b>↓</b></button>
  <div className="hud-footer"><span>SCROLL / MOVE TO EXPLORE</span><span>REACT · NODE · MONGODB · THREE.JS</span></div>
  {selected&&<div className="transition" role="status"><Brand/><p>ENTERING PROJECT WORLD</p><h2>{selected.name}</h2><span>{selected.description}</span><div className="progress"><i/></div></div>}
 </main>
}
