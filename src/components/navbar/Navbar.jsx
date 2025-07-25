import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (

    <div className='navbar'>
        <h1 className='logo'>LS</h1>
         <div className='navbar-list'>
          

<Link to="/"> Home</Link>
<Link to="/contact">Contact</Link>
<Link to="/about">About</Link>
<Link to="/project">Project</Link>
<Link to="/login">Login</Link>


{/* <Link> Home</a>
<> Project</a>
<> Contact</a>
<> About</a> */}


        </div>

<button>
  <Link to="/login">Login
  
  </Link>
  </button>
</div>
)

}

export default Navbar
