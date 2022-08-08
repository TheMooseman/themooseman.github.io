import React from "react";
import "../styles/Home.css";
import { motion } from 'framer-motion';
import { duration } from "@material-ui/core";

function Home() {
  return (
    <motion.div 
    className="home"
    initial={{ opacity:0, duration: 1 }}
    animate={{ opacity:1, duration: 3 }}
    transition={{ opacity: 1, duration: 2}}
    exit={{ opacity:0, duration: 1.5 }}
    >
      <div className="projects" id="home">
        <h1 className='dh1'> Hi, My Name is Moose</h1>
        <span className='homeSpan'>
          This is my personal website where I show off the projects I've worked on.   
        </span>
      </div>
    </motion.div>
  );
}

export default Home;
