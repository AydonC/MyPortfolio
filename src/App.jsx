import Home from './Home';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';
import Toolkit from './toolkit.jsx';
import Navbar from './Navbar';


function App() {
  
  return (
    
    <Router>
     
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/toolkit" element={<Toolkit />} />
      </Routes>
      
    </Router>
  );
}

export default App;


