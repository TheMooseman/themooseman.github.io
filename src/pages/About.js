import React from "react";
import "../styles/Home.css";
import { motion } from 'framer-motion';

function ProjectDisplay() {
  return (
    <motion.div className="about"
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    exit={{ x: window.innerWidth, transition: {duration: 0.01} }}
    >
      <h2 className='dh2'> About Me </h2>
      <span className="homeSpan">
        I'm a software developer with a love for learning new technologies, 
          developing useful tools, and creating responsive websites.
      </span>  
    </motion.div>
  );
}

export default ProjectDisplay;
