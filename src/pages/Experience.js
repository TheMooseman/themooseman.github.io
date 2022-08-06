import React from 'react';
import '../styles/Home.css';
import { motion } from 'framer-motion';

function Experience() {
  return (
    <motion.div className="experience"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="skills" id="skills">
        <h1> Skills</h1>
        <span>JavaScript, C++, C#, TypeScript, Web, Games, Audio</span>
      </div>
    </motion.div>
  );
}

export default Experience;
