import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 
import './styles/FirstPage.css'

//pages
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
//components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//styles
import './App.css'

function App() {
  return (
    <div className='Container'>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;