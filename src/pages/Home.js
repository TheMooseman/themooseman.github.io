import React from "react";
import "../styles/Home.css";
import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.div 
    className="home"
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    exit={{ x: window.innerWidth }}
    >
      <div className="homeInfo" id="homeInfo">
        <h2> Hi, My Name is Moose</h2>
        <div className="prompt">
          <p>This is my personal website where I show off the projects I've worked on.</p>      
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
