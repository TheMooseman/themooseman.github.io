import React from "react";
import { useParams } from "react-router-dom";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import Footer from "../components/Footer";

function ProjectDisplay() {
  return (
    <div className="about">
      <h2> About Me </h2>
      <div className="prompt">
        <p> I'm a software developer with a love for learning new technologies, 
          developing useful tools, and creating responsive websites. </p>
      </div>
      <Footer/>
    </div>
  );
}

export default ProjectDisplay;
