import React from "react";
import GithubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://github.com/TheMooseman">
        <GithubIcon />
        </a>
        <a href="https://www.linkedin.com/in/skylermoosman/">
        <LinkedInIcon />
        </a>
      </div>
      <p> &copy; 2022 Skyler Moosman</p>
    </div>
  );
}

export default Footer;
