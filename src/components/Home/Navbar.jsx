import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nv-div'>
    <nav>
       <Link to='/'><button>Home</button></Link>
       <Link to='/moods'><button>Moods</button></Link>
       <Link to='/liked'><button>Liked</button></Link>
       <Link to='/about'><button>About</button></Link>
    </nav>
    </div>
  )
}

export default Navbar