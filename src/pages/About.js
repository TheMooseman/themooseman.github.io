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
      <div className='home'>
      <h1 className='abouth1'> About Me </h1>
      <span className="aboutSpan">
        Moose is software developer whose shipped code to millions of users 
        and continues to grow his love for new technologies.  
        You can find him trying out the latest tech, hiking, 
        and spending time with his two dogs.
      </span>

      <h1 className='abouth2'> Skills</h1>
        <span className='aboutSpan'>JavaScript, C++, C#, TypeScript, Web, Games, Audio</span>
        <a href='https://drive.google.com/file/d/1U5Lf-A6zvvcJ-X-o4OikQShZnAuqq483/view?usp=sharing'/>
        <Document
          file={"https://drive.google.com/file/d/1U5Lf-A6zvvcJ-X-o4OikQShZnAuqq483/view?usp=sharing"}
          onLoadError={console.error}
          style={{ width: '100vw', height: 'auto'}}
        >
          <Page pageIndex={0} />
        </Document>
      </div>
    </motion.div>
  );
}

export default ProjectDisplay;
