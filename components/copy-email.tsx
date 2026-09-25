'use client';
import {useState} from 'react';
export function CopyEmail(){const [status,setStatus]=useState('Copy email');async function copy(){try{await navigator.clipboard.writeText('hrsshhh17shukla06@gmail.com');setStatus('Copied ✓')}catch{setStatus('Select and copy the address above')}}return <button className="copy-email" onClick={copy} aria-live="polite">{status}</button>;}