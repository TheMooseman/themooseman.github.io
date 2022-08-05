import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {HashLink as Link } from 'react-router-hash-link';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Link to={Home} />
        <Link to={About}/>
        <Link to={Experience} />
        <main>
          <Routes>
            <Route path='/pages/Home' element={<Home />} />
            <Route path='/pages/About' element={<About />} />
            <Route path='/pages/Experience' element={<Experience />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
