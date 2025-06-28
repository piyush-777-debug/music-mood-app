import React from 'react'
import { Link } from 'react-router-dom'



const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-container'>
            <h1>Listen by Mood</h1>
            <h2>“Feel your vibes with perfect music you loved the most”</h2>
            <br />
            <Link to = '/moods'>
               <button>Get Started</button>
            </Link>
        </div>
    </div>
  )
}

export default Hero