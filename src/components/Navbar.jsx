import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
<div>
      <nav className='navbar p-4' style={{ fontFamily: 'Be Vietnam Pro,Inter,system-ui,sans', backgroundColor: '#536847'}}>
      <div className='container-fluid' >
        <Link to="/" className="navbar-brand fw-bold nav-link fs-3" style={{ letterSpacing: '-1px', color: 'white' }}>PlantsPedia</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item col text-nowrap ms-auto">
            <Link to="/plants" className="nav-link px-4 fw-bold" style={{color: 'white'}} >All Plants</Link>
          </li>

          <li className="nav-item col text-nowrap ms-auto">
            <Link to="/plants/create" className="nav-link px-4 fw-bold" style={{color: 'white'}} >Add New Plant</Link>
          <li className="nav-item col text-nowrap">
            <Link to="/plants/create" className="nav-link px-4 fw-bold" style={{color: 'white'}}>Add New Plant</Link>

          </li>
        </ul>
      </div>
    </nav>
    </div>
    
  )
}

export default Navbar