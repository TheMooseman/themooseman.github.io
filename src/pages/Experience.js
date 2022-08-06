import React from 'react';
import '../styles/Home.css';
import { motion } from 'framer-motion';
import {Document, Page, pdfjs} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
        <a href='https://drive.google.com/file/d/1U5Lf-A6zvvcJ-X-o4OikQShZnAuqq483/view?usp=sharing'>
        <Document
          file={"https://drive.google.com/file/d/1U5Lf-A6zvvcJ-X-o4OikQShZnAuqq483/view?usp=sharing"}
          onLoadError={console.error}
          style={{ width: '100vw', height: 'auto'}}
        >
          <Page pageIndex={0} />
        </Document>
        </a>
      </div>
    </motion.div>
  );
}

export default Experience;
