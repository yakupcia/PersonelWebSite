import React from 'react';
import '../styles/Blog.css'
import myImage from '../photos/IMG_7358.jpg'


function Blog() {
  return (
    <div className='blogContainer'>
      <div>
      <img src={myImage} alt="Açıklama metni" style={{borderRadius: 200, width:400, height:400, marginTop: 150, marginBottom: 150, marginRight: 700}}/>
      </div>
      <div>
      <p>Blog</p>
      </div>
    </div>
  )
}

export default Blog