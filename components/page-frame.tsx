import {Brand} from './brand';
import {MobileMenu} from './mobile-menu';
export function PageFrame({children,label}:{children:React.ReactNode;label:string}){return <main className="inner-page"><header className="inner-head"><Brand/><span>{label}</span><a href="/">RETURN TO SYSTEM ↗</a><MobileMenu/></header>{children}</main>}
