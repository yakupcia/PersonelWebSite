//React
import React from 'react';

//3th party
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//pages
import { Home, Contact, About } from '../pages';

//components
import{AnimCursor} from '../components';
import {Navbar, Footer} from '../layouts'

//styles
import '../styles/GlobalStyles.css';

function App() {
  return (
    <div className='Container'>
    <Router>
      <AnimCursor />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
