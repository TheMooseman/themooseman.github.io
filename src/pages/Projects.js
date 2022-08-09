import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import ToggleSwitch from '../components/ToggleSwitch';
import NHLProj from './ProjectPages/NHLData';
import "../styles/Projects.css";
import ProjectCard from '../components/ProjectCard';



function Projects() {
  const [hockeyText, setHockey] = useState('Hockey');
  const [notHockeyText, setNotHockey] = useState('Not Hockey');

  function changeTitles(toggleVal) {
    if(toggleVal){
      setHockey('Not Hockey');
      setNotHockey('Not Not Hockey')
    } else {
      setHockey('Hockey');
      setNotHockey('Not Hockey')
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
        <p>incognito</p>
        <ToggleSwitch onChange={(event) => changeTitles(event.target.checked)} />
      </div>

      <div className="projectList">
        <ProjectCard
          projLoc='./ProjectPages/NHLData'
          github='https://github.com/TheMooseman/themooseman.github.io/blob/master/src/pages/ProjectPages/NHLData.js'
          img='https://sportshub.cbsistatic.com/i/r/2022/08/05/b7f9b325-b2fe-4dcb-8571-6696b84de7ba/thumbnail/640x360/c79cfff48b368d0d7a6775d32b77d231/gettyimages-1191106966-2.jpg'
          title={hockeyText}
          desc='Data from the NHL API that allows you to text search team names, locations, and their venues.'
        />

        <ProjectCard 
          img='https://images-na.ssl-images-amazon.com/images/I/61yJfCrclqL._SY498_BO1,204,203,200_.jpg'
          title={notHockeyText}
          desc='Definitely not hockey data.  Just a placeholder.'
        />

      </div>
    </motion.div>
  );
}

export default Projects;
