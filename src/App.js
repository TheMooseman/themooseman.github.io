import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import {HashLink as Link } from 'react-router-hash-link';
import About from './pages/About';
import Experience from './pages/Experience';
import Navbar from './components/Navbar';
import AnimatedRoutes from './components/AnimatedRoutes';
import { Helmet } from 'react-helmet';
import '@fontsource/montserrat'
import ParticleBackground from './components/particleBackground';

function App() {

  return (
    <div className="App">
      <Helmet>
        <meta charSet='utf-8' />
        <title>Moose Dev</title>
        <meta name='description' content='Moose Dev Portfolio' />
        <link rel='canonical' href='https://themooseman.github.io' />
      </Helmet>
      <Router>
      <Routes>
          <Route path='/' element={<Navigate to={'/pages/About'} />} />
        </Routes>
        <div className='wrapper'>
        <ParticleBackground></ParticleBackground>
        <div className='bodyWrapper'>
        <Navbar/>
        <Link to={About} />
        <Link to={Experience} />
        <AnimatedRoutes className="main" />
        </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
