import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import {HashLink as Link } from 'react-router-hash-link';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Link to={Home} />
        <Link to={About} />
        <Link to={Experience} />
        <AnimatedRoutes className="main" />
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
