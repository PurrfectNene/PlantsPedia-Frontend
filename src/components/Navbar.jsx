import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg justify-content-center'>
      <Link to="/"><ul className="nav-item">PlantsPedia</ul></Link>
    </nav>
  )
}

export default Navbar