import React from "react";
import "../styles/Home.css";
import { motion } from 'framer-motion';
import { duration } from "@material-ui/core";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <motion.div 
    className="title"
    initial={{ opacity:0, duration: 1 }}
    animate={{ opacity:1, duration: 3 }}
    transition={{ opacity: 1, duration: 2}}
    exit={{ opacity:0, duration: 1.5 }}
    >
      <Navbar/>
    </motion.div>
  );
}

export default Home;
