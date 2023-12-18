import React from 'react';
import '../styles/Home.css'
import myImage from '../photos/IMG_7358.jpg'


function Home() {
  return (
    <div className='home'>
      <div className='image'>
      <img src={myImage} alt="yakup kok" style={{borderRadius: 200, width:400, height:400, marginTop: 150, marginBottom: 150, marginRight: 700}}/>
      </div> 
      <div className='preview'>
        <h1>Hello, I'm Yakup KOK!</h1>
        <p>I'm a focused on creating creative and innovative solutions</p>
        <p> I'm delighted to have you here!</p>
      </div>
    </div>
  )
}

export default Home