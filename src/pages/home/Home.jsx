import React from 'react';
import '../home/Home.css'
import myImage from '../../photos/IMG_7358.jpg'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import { FaArrowRight } from "react-icons/fa";



function Home() {
  return ( 
    <section className='home'>
      <Helmet>
        <title>Yakup KOK</title>
        <meta name="description" content='Home - Yakup KOK'/>
      </Helmet>
      <div>
      <img src={myImage} alt="yakup kok" className="home_image" />
      </div> 
      <div className='preview'>
        <h1> <span>I'm Yakup KOK!</span></h1>
        <p>I'm a focused on creating creative and innovative solutions</p>
        <p> I'm delighted to have you here!</p>
        <Link to='/about' className='button' >
          More About Me <span className='nav_icon'>
           <FaArrowRight />
          </span>
        </Link>
      </div>
    </section>
  )
}

export default Home

