import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='footer-container'>
        <h2>Ready To Vibe ? </h2>
        <Link to = '/moods'>
        <button className='mood-btn'>Explore Moods</button>
        </Link>
    </div>
  )
}

export default Footer