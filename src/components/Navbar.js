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
        <div className="toggleButton">
            <button 
                onClick={() => {
                    setExpandNavbar((prev) => !prev);
                }}>
                <ReorderIcon />
            </button>
        </div>
        <div className="links">
            <NavLink to="../pages/Home" className='linkbtn'> Home </NavLink>
            <NavLink to="../pages/About" className='linkbtn'> About </NavLink>
            <NavLink to="../pages/Experience" className='linkbtn'> Experience </NavLink>
            
        </div>
    </div>
}

export default Navbar