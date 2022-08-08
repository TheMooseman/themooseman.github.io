import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import {HashLink as Link } from 'react-router-hash-link';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedRoutes from './components/AnimatedRoutes';
import { Helmet } from 'react-helmet';
import '@fontsource/montserrat'

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
        <div className='wrapper'>
        <div className='bodyWrapper'>
        <Link to={Home} />
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
