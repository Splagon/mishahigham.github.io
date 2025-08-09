import React, { forwardRef } from "react";
import { Home, FolderCodeIcon, BriefcaseBusiness } from "lucide-react";
import type { ReactNode } from 'react';
import './index.css'

interface Section {
  name: string;
  anchor: string; // e.g. "#about", "#work"
}

interface Page {
  name: string;
  href: string;
  sections?: Section[]; // sub-divs on the page
  icon: ReactNode
}

interface NavbarProps {
  sticky: boolean;
  currentPath: string;
  pages: Page[];
}

const pages = [
  { name: "Home", href: "/", icon: <Home/>,
    sections: [
      //{ name: "About", anchor: "#about" },
      //{ name: "Projects", anchor: "#projects" },
    ],
  },
  { name: "Projects", href: "/projects", icon: <FolderCodeIcon/>},
  { name: "Experience", href: "/experience", icon:< BriefcaseBusiness/> },
];

const Navbar = forwardRef<HTMLElement, NavbarProps>(({ sticky, currentPath }, ref) => {
  return (
    <nav
      ref={ref}
      className={`sticky top-0 z-50 w-screen py-4 flex justify-center transition-all duration-300 ease-in-out ${
        sticky ? "fixed top-0 left-0 shadow-md z-50" : "relative"
      }`}
    >
      <ul className="flex items-center gap-4 text-lg select-none">
        {pages.map((page, idx) => {
          const isCurrentPage = (
            (currentPath=="/") ? 
              page.href === currentPath :
              page.href.startsWith(currentPath)
          )
          

          return (
            <React.Fragment key={page.name}>
              {//idx !== 0 && <span className="nav-element">|</span>
              }
              <li className="flex items-center gap-2">
                <a
                  href={page.href}
                  className={`nav-link ${isCurrentPage ? "selected" : ""}`}
                >
                  {(isCurrentPage) ? 
                  ( <>
                    <span className="">{page.name}</span>
                    </>
                  ) :
                  ( <>
                    <span className="hidden sm:!inline">{page.name}</span>
                    <span className="sm:hidden">{page.icon}</span>
                    </>)
                  }
                  
                </a>

                {/* Only show sections if on current page */}
                {isCurrentPage && page.sections && page.sections.length > 0 && (
                  <>
                    <span className="nav-element">{">"}</span>
                    <ul className="flex gap-4">
                      {page.sections.map((section) => (
                        <li key={section.anchor}>
                          <a
                            href={section.anchor}
                            className="nav-link"
                          >
                            {section.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </nav>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
