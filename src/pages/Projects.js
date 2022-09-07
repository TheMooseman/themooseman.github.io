import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import ToggleSwitch from '../components/ToggleSwitch';
import NHLProj from './ProjectPages/NHLData';
import "../styles/Projects.css";
import ProjectCard from '../components/ProjectCard';



function Projects() {
  const [shopText, setShopText] = useState('Your Fav Shop');

  function changeTitles(toggleVal) {
    if(toggleVal){
      setShopText('Not Your Fav Shop');
    } else {
      setShopText('Your Fav Shop');
    }
  }

  return (
    <motion.div 
    className="projects"
    initial={{ opacity:0, duration: 1 }}
    animate={{ opacity:1, duration: 3 }}
    transition={{ opacity: 1, duration: 2}}
    exit={{ opacity:0, duration: 1.5 }}
    >
      <Routes >
        <Route path='/pages/ProjectPages' element={<NHLProj />} />
      </Routes>
      <div className='toggleDiv'>
        <p className='togLabel'>incognito</p>
        <ToggleSwitch onChange={(event) => changeTitles(event.target.checked)} />
      </div>

      <div className="projectList">
        <ProjectCard
          projLoc='https://yourfav.shop/'
          github='https://github.com/TheMooseman/TheShop'
          img='https://upload.wikimedia.org/wikipedia/commons/8/8e/Shop.svg'
          title={shopText}
          desc='E-commerce site demo for a fictional shop that sells clothing.  Built with React, Redux, and Firebase.'
        />

      </div>
    </motion.div>
  );
}

export default Projects;
