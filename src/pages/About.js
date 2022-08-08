import React from "react";
import "../styles/Home.css";
import { motion } from 'framer-motion';

function ProjectDisplay() {
  return (
    <motion.div className="home"
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    exit={{ x: window.innerWidth, transition: {duration: 0.01} }}
    >
      <div className='skills'>
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
