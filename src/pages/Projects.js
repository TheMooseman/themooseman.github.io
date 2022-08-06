import React from 'react';
import { motion } from 'framer-motion';
import "../styles/Projects.css";
import ProjectCard from '../components/ProjectCard';

function Projects() {
  return (
    <motion.div 
    className="projects"
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    exit={{ x: window.innerWidth, transition: {duration: 0.01} }}
    >
      <h1> My Personal Projects</h1>
      <div className="projectList">
        <ProjectCard 
          img='https://sportshub.cbsistatic.com/i/r/2022/08/05/b7f9b325-b2fe-4dcb-8571-6696b84de7ba/thumbnail/640x360/c79cfff48b368d0d7a6775d32b77d231/gettyimages-1191106966-2.jpg'
          title='Hockey'
          desc='Some hockey data.'
        />

        <ProjectCard 
          img='https://images-na.ssl-images-amazon.com/images/I/61yJfCrclqL._SY498_BO1,204,203,200_.jpg'
          title='Not Hockey'
          desc='Definitely not hockey data.'
        />

      </div>
    </motion.div>
  );
}

export default Projects;
