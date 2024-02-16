import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg justify-content-center p-3' style={{backgroundColor: '#536847'}}>
      <Link to="/"><ul className="nav-item fw-bold fs-3 text-center no-underline" style={{color: '#edebe9'}} >PlantsPedia</ul></Link>
    </nav>
  )
}

export default Navbar