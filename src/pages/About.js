import React from "react";
import "../styles/Home.css";
import { motion } from 'framer-motion';
import { Document, Page } from "react-pdf";

function ProjectDisplay() {
  return (
    <motion.div className="home"
    initial={{ opacity:0, duration: 1 }}
    animate={{ opacity:1, duration: 3 }}
    transition={{ opacity: 1, duration: 2}}
    exit={{ opacity:0, duration: 1.5 }}
    >
      <div className="aboutPage">
      <h1 className='abouth1'> About Me </h1>
      <span className="aboutSpan">
        Skyler is software developer who's shipped code to millions of users 
        and continues to grow his love for new technologies.  
        You can find him trying out the latest tech, hiking, 
        and spending time with his two dogs.
      </span>

      <h1 className='abouth2'> Skills</h1>
        <span className='aboutSpan'>JavaScript, React/Redux, Firebase, NoSQL, C++, C#, TypeScript, Web, Game Development</span>
        <br/>
        <a 
        href='https://drive.google.com/file/d/1FtwYH9Nh8q5YiT0UsLOn-xLoS2YUZ-lL/view?usp=sharing'
        target='_blank'
        > 
         Resume
        </a>
        </div>
    </motion.div>
  );
}

export default ProjectDisplay;
