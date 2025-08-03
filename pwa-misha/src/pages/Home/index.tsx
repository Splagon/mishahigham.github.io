import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { useSticky } from "@hooks/useSticky";
import SequentialParagraphs from "@components/SequentialParagraphs";
import ProjectViewer from "@components/ProjectViewer/index";
import Navbar from "@components/Navbar/index"
import mah_logo_no_bg_black_border from '@assets/mah_logo_no_bg_black_border.png';
import './index.css'

const Home: React.FC = () => {
  const navRef = useRef<HTMLElement>(null);
  const sticky = useSticky(navRef);
  const currentPath = window.location.pathname;

  return (
    <div className="flex flex-col gap-3 items-center">
      <div id="home/about" className="flex flex-col gap-3 page primary">
        <img
          src={mah_logo_no_bg_black_border}
          alt="MAH"
          className="logo mb-6 w-[8em] xs:w-[13em] sm:mb-8 object-contain"
        />
        <h3 className="font-medium italic text-2xl sm:text-3xl md:text-4xl">hi i am</h3>
        <h1 className="text-3xl sm:text-4xl md:text-5xl">Misha Higham</h1>
        <div className="font-medium mt-3 sm:mt-5">
          <SequentialParagraphs
            lines={[
              "hey!",
              "i work as a tech graduate executive.",
              "i've done everything from integrating systems to data engineering, but learning by building is how i grow best.",
              "just like with this website!",
            ]}
            className="flex flex-col gap-2 text-lg md:text-xl"
            p_className="font-['Playfair']"
          />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4, duration: 0.8 }}
            className="flex flex-col items-center mt-5 sm:mt-7 sm:mt-[10rem] gap-2"
          >
            <p className="font-['Playfair']">scroll to see more</p>
            <ChevronDown className="w-8 h-8 animate-bounce" />
          </motion.div>
        </div>
      </div>

      <Navbar sticky={sticky} currentPath={currentPath} ref={navRef} />

      <div id="home/top_projects" className="flex flex-col gap-3 page">
        <ProjectViewer number_of_projects={3}></ProjectViewer>
      </div>
    </div>
  );
};

export default Home;
