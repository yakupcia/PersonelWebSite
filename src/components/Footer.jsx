import React from 'react'
import '../styles/Footer.css'
import { Link } from 'react-router-dom'

//icon 
import { FaMedium } from "react-icons/fa6";
import { BsStackOverflow } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";







function Footer() {
  return (
    <div className="footer" >
      <div className='socialMedia'>
        <a
          href="https://github.com/yakupcia"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/yakupkok/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://stackoverflow.com/users/22748871/yakup-kok"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsStackOverflow />
        </a>
        <a
          href="https://medium.com/@yakupcia"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaMedium />
        </a>
        <a
          href="https://instagram.com/yakupcia"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare />
        </a>
        <a
          href="https://twitter.com/yakupcia"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
      </div>
      <div className='innerFooter'>
        <div className='footerLinkContainer'>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        </div>
        <div className='footerWriterContainer'>
          <p> © 2023 Yakup KOK </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
