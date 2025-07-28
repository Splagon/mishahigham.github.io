import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { useSticky } from "@hooks/useSticky";
import SequentialParagraphs from "@components/SequentialParagraphs";
import Navbar from "@components/Navbar/Navbar"
import mah_logo_no_bg_black_border from '@assets/mah_logo_no_bg_black_border.png';
import './index.css'

const pages = [
  {
    name: "Home",
      href: "/",
      sections: [
        { name: "About", anchor: "#about" },
        { name: "Projects", anchor: "#projects" },
      ],
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "Contact",
      href: "/contact",
    },
];


const Home: React.FC = () => {
  const navRef = useRef<HTMLElement>(null);
  const sticky = useSticky(navRef);
  const currentPath = window.location.pathname;

  return (
    <div className="flex flex-col gap-3 items-center">
      <div id="page1" className="flex flex-col gap-3 items-center justify-center h-dvh page">
        <img
          src={mah_logo_no_bg_black_border}
          alt="MAH"
          className="logo mb-6 sm:mb-8 w-[10em] sm:w-[13em] object-contain"
        />
        <p className="font-['playfair'] font-medium italic text-2xl sm:text-3xl md:text-4xl">hi i am</p>
        <h1 className="font-['playwrite'] text-3xl sm:text-4xl md:text-5xl">Misha Higham</h1>
        <div className="font-['playfair'] font-medium mt-3 sm:mt-5">
          <SequentialParagraphs
            lines={[
              "hey!",
              "i work in tech, currently in a grad role.",
              "i've done everything from integrating systems to data engineering, but learning by building is how i grow best.",
              "just like this website!",
            ]}
            className="flex flex-col gap-2 text-lg md:text-xl"
          />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4, duration: 0.8 }}
            className="flex flex-col items-center mt-5 sm:mt-7 md:mt-10 gap-2"
          >
            <p>scroll to see more</p>
            <ChevronDown className="w-8 h-8 animate-bounce" />
          </motion.div>
        </div>
      </div>

      <Navbar sticky={sticky} currentPath={currentPath} pages={pages} ref={navRef} />

      <div
        id="page2"
        className="flex flex-col gap-3 items-center justify-center h-dvh page"
      >
        <h1>Page 2</h1>
      </div>
    </div>
  );
};

export default Home;
