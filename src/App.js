import React from 'react';
import "./index.css";
import Home from './routes/Home';
import About from './routes/About';
// import Skill from './routes/Skill';
import Project from './routes/Project';
import Contact from './routes/Contact';
import Services from './routes/Services';

import { Routes,Route } from "react-router-dom";



function App() {
  return (
   <>
   <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      {/* <Route path="/skill" element={<Skill />}/> */}
      <Route path="/services" element={<Services />}/>
      <Route path="/Project" element={<Project />}/>
      <Route path="/contact" element={<Contact />}/>
   </Routes>
   </>
  )
}

export default App