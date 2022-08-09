import React from "react";
import "../styles/Home.css";
import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.div 
    className="title"
    initial={{ opacity:0, duration: 1 }}
    animate={{ opacity:1, duration: 3 }}
    transition={{ opacity: 1, duration: 2}}
    exit={{ opacity:0, duration: 1.5 }}
    >
    </motion.div>
  );
}

export default Home;
