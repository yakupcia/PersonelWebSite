import React from 'react';
import '../styles/Home.css'
import myImage from '../photos/IMG_7358.jpg'


function Home() {
  return (
    <div className='Container'>
      <div>
      <img src={myImage} alt="yakup kok" style={{borderRadius: 200, width:400, height:400, marginTop: 150, marginBottom: 150, marginRight: 700}}/>
      </div> 
      <div>
        <h2>Hello, I'm Yakup!</h2>
        <p>I'm a mobile app developer with an interest in web development.</p>
        <p>Areas of Interest:</p>
        <ul>
          <li>Mobile App Development</li>
          <li>Web Development</li>
        </ul>
        <p>I'm a developer focused on creating creative and innovative solutions. I'm delighted to have you here!</p>
      </div>
    </div>
  )
}

export default Home