"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const NavLink = ({href, children}) => {
    const pathname = usePathname()
    const isActive = href === pathname
    return (
        <Link href={href} className={`${isActive ? "border-b-2 border-b-green-500" : ""}`}>
            
            {children}
        </Link>
    );
};

export default NavLink;