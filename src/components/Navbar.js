import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import GithubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import '../styles/Navbar.css'


function Navbar() {
    const [expandNavBar, setExpandNavbar] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);

    return <div className="topnav" id={expandNavBar ? "open" : "close"}>
        <div className='title'>
            <h1 className='dh1'> Skyler Moosman </h1> 
            <br></br>
            <span className='titleSpan'>
                Front End Developer
            </span>
        </div>

        <div className="links">
            <NavLink to="../pages/About" className='linkBtn'>
                <a>About</a> 
            </NavLink>
            <NavLink to="../pages/Projects" className='linkBtn'>
                <a>Projects</a>
            </NavLink>
            
            
        </div>

        <div className='socialMedia'>
            <GithubIcon />
            <LinkedInIcon />
        </div>

    </div>
}

export default Navbar