import React, {useEffect, useState} from 'react'

import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'

import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  const [expand, setExpand] = useState(false);

  // onClick going to page
  const Location = useLocation();
  useEffect(() => {
    setExpand(false);
  },[Location]);

  function buttonHandle(){
    setExpand((prev)  => !prev);
  }
  return (
    <nav className='navbar' id={expand ? "open" : "close" }>
      <div className='toggleButton'>
        <button onClick={buttonHandle}>
          <ReorderIcon />
        </button>
      </div>
      <div className='links'>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar;