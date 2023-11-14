import React from 'react'
import '../styles/Footer.css'
import { Link } from 'react-router-dom'

//icon 
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';


function Footer() {
  return (
    <div className="footer" >
      <div className='socialMedia'>
        <a
          href="https://github.com/yakupcia"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/yakupkok/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://stackoverflow.com/users/22748871/yakup-kok"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StackedLineChartIcon />
        </a>
        <a
          href="https://instagram.com/yakupcia"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://twitter.com/yakupcia"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon />
        </a>
      </div>
      <div className='innerFooter'>
        <div className='footerLinkContainer'>
        <Link to="/blog">Blog</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        </div>
        <div className='footerWriterContainer'>
          <p className='ykp'> © 2023 Yakup KOK </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
