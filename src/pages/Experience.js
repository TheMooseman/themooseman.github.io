import React from 'react';
import '../styles/Home.css';
import { motion } from 'framer-motion';

function Experience() {
  return (
    <motion.div className="experience"
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    exit={{ x: window.innerWidth, transition: {duration: 0.01} }}
    >
      <div className="skills" id="skills">
        <h1> Skills</h1>
        <span>JavaScript, C++, C#, TypeScript, Web, Games, Audio</span>
      </div>
    </motion.div>
  );
}

export default Experience;
