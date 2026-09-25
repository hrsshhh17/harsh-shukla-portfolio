const json=(body:unknown,status=200)=>Response.json(body,{status,headers:{'Cache-Control':'no-store'}});
const config=()=>({key:process.env.RESEND_API_KEY,from:process.env.CONTACT_FROM_EMAIL,secret:process.env.TURNSTILE_SECRET_KEY,siteKey:process.env.TURNSTILE_SITE_KEY});
export async function GET(){const c=config();return json({enabled:!!(c.key&&c.from&&c.secret&&c.siteKey),siteKey:c.key&&c.from&&c.secret?c.siteKey:undefined})}
export async function POST(request:Request){
 const c=config();if(!c.key||!c.from||!c.secret||!c.siteKey)return json({error:'Direct sending is unavailable. Please use the email draft.'},503);
 const origin=request.headers.get('origin');if(origin!==new URL(request.url).origin)return json({error:'Request origin not allowed.'},403);
 if(!request.headers.get('content-type')?.includes('application/json'))return json({error:'Unsupported request.'},415);
 if(Number(request.headers.get('content-length')||0)>16000)return json({error:'Message is too long.'},413);
 let body;try{const raw=await request.text();if(raw.length>16000)return json({error:'Message is too long.'},413);body=JSON.parse(raw)}catch{return json({error:'Invalid request.'},400)}
 const {subject,text,email,token,website,id}=body||{};
 if(website)return json({error:'Unable to submit this request.'},400);
 if(typeof subject!=='string'||subject.length<3||subject.length>220||/[\r\n]/.test(subject)||typeof text!=='string'||text.length<15||text.length>4500||typeof email!=='string'||email.length>254||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)||typeof token!=='string'||!token||token.length>2048||typeof id!=='string'||!/^[a-f0-9-]{36}$/i.test(id))return json({error:'Please check your details and complete the verification.'},400);
 try{
 const check=await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({secret:c.secret,response:token}),signal:AbortSignal.timeout(10000)});
 const verification=await check.json() as {success?:boolean;hostname?:string;action?:string};
 if(!check.ok||!verification.success||verification.hostname!==new URL(request.url).hostname||verification.action!=='contact')return json({error:'Verification expired or failed. Please try again.'},400);
 const sent=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:'Bearer '+c.key,'Content-Type':'application/json','Idempotency-Key':id},body:JSON.stringify({from:c.from,to:['hrsshhh17shukla06@gmail.com'],reply_to:email,subject,text}),signal:AbortSignal.timeout(15000)});
 if(!sent.ok)return json({error:'The email service could not accept your message. Please try again or use the email draft.'},502);
 const receipt=await sent.json() as {id?:string};if(!receipt.id)return json({error:'No delivery receipt was returned. Please use the email draft.'},502);
 return json({accepted:true});
 }catch{return json({error:'Sending timed out. Please retry or use the email draft.'},502)}
}
