import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReorderIcon from '@material-ui/icons/Reorder';
import { NavLink } from 'react-router-dom';
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
            <NavLink to="../pages/About" className='linkbtn'> About </NavLink>
            <NavLink to="../pages/Experience" className='linkbtn'> Experience </NavLink>
            <NavLink to="../pages/Projects" className='linkbtn'> Projects </NavLink>
        </div>
    </div>
}

export default Navbar