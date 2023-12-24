'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

interface ActiveLinkProps{
    href: string,
    children: React.ReactNode
}

export default function ActiveLink({ children, href }:ActiveLinkProps){

    const pathname = usePathname()

    const style = {
        color: pathname === href ? 'black' : 'white',
        fontWeight: pathname === href ? 'bold' : 400
    }

    return(
        <Link className='cursor-pointer' style={style} href={href} >{children}</Link>
    )
}