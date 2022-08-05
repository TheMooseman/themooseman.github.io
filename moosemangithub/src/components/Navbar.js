import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReorderIcon from '@material-ui/icons/Reorder';
import { HashLink as Link } from 'react-router-hash-link';
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
            <Link to="../#about" className='linkbtn'> Home </Link>
            <Link to="../#skills" className='linkbtn'> Skills </Link>
            
        </div>
    </div>
}

export default Navbar