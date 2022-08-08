import React from "react";
import "../styles/Home.css";
import { motion } from 'framer-motion';

function ProjectDisplay() {
  return (
    <motion.div className="home"
    initial={{ opacity:0, duration: 1 }}
    animate={{ opacity:1, duration: 3 }}
    transition={{ opacity: 1, duration: 2}}
    exit={{ opacity:0, duration: 1.5 }}
    >
      <div className='home'>
      <h1 className='dh1'> About Me </h1>
      <span className="homeSpan">
        I'm a software developer with a love for learning new technologies, 
          developing useful tools, and creating responsive websites.
      </span>
      </div>
    </motion.div>
  );
}

export default ProjectDisplay;
