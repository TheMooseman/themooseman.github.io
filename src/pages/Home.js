import React from "react";
import Footer from '../components/Footer'
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="homeInfo" id="homeInfo">
        <h2> Hi, My Name is Moose</h2>
        <div className="prompt">
          <p>This is my personal website where I show off the projects I've worked on.</p>      
        </div>
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
