import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import Footer from '../components/Footer'
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about" id="about">
        <h2> Hi, My Name is Moose</h2>
        <div className="prompt">
          <p>I'm a software developer with a love for learning and creating.</p>
          <GithubIcon />
          <EmailIcon />
          <LinkedInIcon />         
        </div>
      </div>
      <div className="skills" id="skills">
        <h1> Skills</h1>
        <span>JavaScript, C++, C#, TypeScript, Web, Games, Audio</span>
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
