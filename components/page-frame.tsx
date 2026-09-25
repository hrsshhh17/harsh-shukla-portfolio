import {Brand} from './brand';
import {MobileMenu} from './mobile-menu';
import Link from 'next/link';
export function PageFrame({children,label}:{children:React.ReactNode;label:string}){return <main className="inner-page"><header className="inner-head"><Brand/><span>{label}</span><Link href="/">RETURN TO SYSTEM ↗</Link><MobileMenu/></header>{children}</main>}
