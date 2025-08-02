import React, { useRef } from "react";
import type { ReactNode } from "react";
import './index.css'
import Navbar from '@components/Navbar/index'

type PageWrapperProps = {
    children: ReactNode;
    stickyNavbar?: boolean;
};


export default function PageWrapper({ children, stickyNavbar = true }: PageWrapperProps) {
    const currentPath = window.location.pathname;
    const navRef = useRef<HTMLElement>(null);
    
    return (
        <div className="pageWrapper">
            <Navbar sticky={stickyNavbar} currentPath={currentPath} ref={navRef} />
            <div className="mx-5 mt-8">
                {children}
            </div>
        </div>
    )
}