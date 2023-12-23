'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ActiveLink({ children, href }){

    const pathname = usePathname()

    const style = {
        color: pathname === href ? 'black' : 'white',
        fontWeight: pathname === href ? 'bold' : 400
    }

    return(
        <Link className='cursor-pointer' style={style} href={href} >{children}</Link>
    )
}