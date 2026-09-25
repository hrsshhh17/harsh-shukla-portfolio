'use client';
import {useEffect,useState} from 'react';
import {usePathname} from 'next/navigation';

const commands=[
 {label:'Selected work',hint:'W',href:'/#work'},
 {label:'About Harsh',hint:'A',href:'/about'},
 {label:'Engineering map',hint:'S',href:'/#skills'},
 {label:'Certificates',hint:'C',href:'/#certificates'},
 {label:'Contact',hint:'M',href:'/contact'},
 {label:'GitHub',hint:'G',href:'https://github.com/hrsshhh17'},
];
export function SiteTools(){
 const [palette,setPalette]=useState(false),[resume,setResume]=useState(false),[recruiter,setRecruiter]=useState(false),[cursor,setCursor]=useState({x:-40,y:-40,label:''});
 const path=usePathname();
 useEffect(()=>{const key=(e:KeyboardEvent)=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();setPalette(v=>!v)}if(e.key==='Escape'){setPalette(false);setResume(false)}};const click=(e:MouseEvent)=>{const el=(e.target as HTMLElement).closest('[data-resume-open]');if(el){e.preventDefault();setResume(true)}};const move=(e:MouseEvent)=>{const target=(e.target as HTMLElement).closest('a,button');setCursor({x:e.clientX,y:e.clientY,label:target?.getAttribute('data-cursor')||''})};addEventListener('keydown',key);document.addEventListener('click',click);addEventListener('mousemove',move);return()=>{removeEventListener('keydown',key);document.removeEventListener('click',click);removeEventListener('mousemove',move)}},[]);
 useEffect(()=>{document.documentElement.classList.toggle('recruiter-mode',recruiter)},[recruiter]);
 return <><div className={`smart-cursor ${cursor.label?'has-label':''}`} style={{transform:`translate(${cursor.x}px,${cursor.y}px)`}}>{cursor.label}</div><div className="utility-dock"><button onClick={()=>setPalette(true)} aria-label="Open command menu">⌘K</button><button className={recruiter?'active':''} onClick={()=>setRecruiter(v=>!v)} aria-pressed={recruiter}>Recruiter {recruiter?'ON':'mode'}</button><button onClick={()=>setResume(true)}>Resume</button></div>{palette&&<div className="tool-overlay" onClick={()=>setPalette(false)}><section className="command-palette" onClick={e=>e.stopPropagation()}><header><span>Navigate portfolio</span><kbd>ESC</kbd></header>{commands.map(c=><a key={c.label} href={c.href} onClick={()=>setPalette(false)}><span>{c.label}</span><kbd>{c.hint}</kbd></a>)}<footer>Current route: {path}</footer></section></div>}{resume&&<div className="tool-overlay" onClick={()=>setResume(false)}><section className="resume-drawer" onClick={e=>e.stopPropagation()}><header><div><small>HARSH SHUKLA</small><b>Resume preview</b></div><button onClick={()=>setResume(false)}>×</button></header><iframe src="/Harsh_Shukla_Resume.pdf" title="Harsh Shukla resume"/><footer><a href="/Harsh_Shukla_Resume.pdf" download>Download PDF ↓</a><a href="/contact">Contact Harsh ↗</a></footer></section></div>}</>;
}
