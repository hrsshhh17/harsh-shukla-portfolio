'use client';
import {useEffect,useRef} from 'react';

export function PointerTracker(){
 const dot=useRef<HTMLDivElement>(null),ring=useRef<HTMLDivElement>(null);
 useEffect(()=>{
  if(!matchMedia('(pointer:fine)').matches||matchMedia('(prefers-reduced-motion:reduce)').matches)return;
  let x=-80,y=-80,rx=-80,ry=-80,frame=0;
  const render=()=>{rx+=(x-rx)*.16;ry+=(y-ry)*.16;if(dot.current)dot.current.style.transform=`translate3d(${x}px,${y}px,0)`;if(ring.current)ring.current.style.transform=`translate3d(${rx}px,${ry}px,0)`;frame=requestAnimationFrame(render)};
  const move=(e:PointerEvent)=>{x=e.clientX;y=e.clientY;document.body.classList.add('pointer-ready')};
  const hover=(e:PointerEvent)=>{const el=(e.target as Element).closest('a,button,[data-cursor]');document.body.classList.toggle('pointer-active',!!el);const label=el?.getAttribute('data-cursor');if(ring.current){ring.current.dataset.label=label||'';ring.current.classList.toggle('has-label',!!label)}};
  const leave=()=>document.body.classList.remove('pointer-ready','pointer-active');
  addEventListener('pointermove',move,{passive:true});document.addEventListener('pointerover',hover);document.documentElement.addEventListener('mouseleave',leave);frame=requestAnimationFrame(render);
  return()=>{cancelAnimationFrame(frame);removeEventListener('pointermove',move);document.removeEventListener('pointerover',hover);document.documentElement.removeEventListener('mouseleave',leave);document.body.classList.remove('pointer-ready','pointer-active')};
 },[]);
 return <div className="pointer-layer" aria-hidden="true"><div ref={ring} className="pointer-ring"/><div ref={dot} className="pointer-dot"/></div>;
}
