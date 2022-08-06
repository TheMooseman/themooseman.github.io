import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Experience from '../pages/Experience';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence>
        <Routes location ={location} key={location.pathname}>
            <Route index element={<Home />} />
            <Route path='/pages/Home' element={<Home />} />
            <Route path='/pages/About' element={<About />} />
            <Route path='/pages/Experience' element={<Experience />} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes