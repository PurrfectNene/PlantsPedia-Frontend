import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div >
      <nav className='navbar navbar-expand-lg p-3' style={{backgroundColor: '#536847'}}>
        <div className="container-fluid">
          <div className="row w-100 align-items-center">
            <div className="col">
            <Link to="/" className="nav-item fw-bold fs-3 no-underline text-light text-decoration-none" > <ul>PlantsPedia</ul></Link>
            </div>
            <div className="col-2">
            <Link to="/plants/" className="nav-item fw-bold fs-5 no-underline text-light text-decoration-none" ><ul>All Plants</ul></Link>
            </div>
            <div className="col-2">
            <Link to="/plants/create" className="nav-item fw-bold fs-5 no-underline text-light text-decoration-none"><ul>Add Plant</ul></Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
    
  )
}

export default Navbar