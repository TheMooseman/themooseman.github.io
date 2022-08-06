import React from "react";
import "../styles/Home.css";
import { motion } from 'framer-motion';

function ProjectDisplay() {
  return (
    <motion.div className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2> About Me </h2>
      <div className="prompt">
        <p> I'm a software developer with a love for learning new technologies, 
          developing useful tools, and creating responsive websites. </p>
      </div>  
    </motion.div>
  );
}

export default ProjectDisplay;
