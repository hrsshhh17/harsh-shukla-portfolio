import {Brand} from './brand';
export function PageFrame({children,label}:{children:React.ReactNode;label:string}){return <main className="inner-page"><header className="inner-head"><Brand/><span>{label}</span><a href="/">RETURN TO SYSTEM ↗</a></header>{children}</main>}
