import React from 'react';
import '../styles/Home.css';
import { motion } from 'framer-motion';
import {Document, Page, pdfjs} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Experience() {
  return (
    <motion.div className="home"
    initial={{ opacity:0, duration: 1 }}
    animate={{ opacity:1, duration: 3 }}
    transition={{ opacity: 1, duration: 2}}
    exit={{ opacity:0, duration: 1.5 }}
    >
      <div className="home" id="home">
        <h1 className='dh1'> Skills</h1>
        <span className='homeSpan'>JavaScript, C++, C#, TypeScript, Web, Games, Audio</span>
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
