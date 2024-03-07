import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";


function Navbar() {

  const [expanded, setExpanded] = useState(false)

  const handleMouseEnter=()=>{
    setExpanded(true)
  }
  const handleMouseLeave=()=>{
    setTimeout(()=> {
      setExpanded(false)
    }, 2000)
  }
  // const clearMouseTimer=()=>{
  //   setExpanded(false)
  // }

  return (
    <div>
      <nav
        className={`navbar p-4 ${expanded ? 'expanded' : ''}`}
        style={{
          fontFamily: "Be Vietnam Pro,Inter,system-ui,sans",
          backgroundColor: "#536847",
        }}
      >
        <div className="container-fluid">
          <Link
            to="/"
            className="navbar-brand fw-bold nav-link fs-3"
            style={{ letterSpacing: "-1px", color: "white" }}
          >
            PlantsPedia
          </Link>
          <button
            className="navbar-toggler navbar-dark"
            type="button"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span
              className={`navbar-toggler-icon `}
              style={{ color: "white" }}
            ></span>
          </button>
        </div>
        <div className={`navbar-collapse ${expanded ? 'expanded' : '' }`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item col text-nowrap ms-auto">
              <Link
                to="/plants"
                className="nav-link px-4 fw-bold"
                style={{ color: "white" }}
              >
                All Plants
              </Link>
            </li>
            <li className="nav-item col text-nowrap ms-auto">
              <Link
                to="/plants/create"
                className="nav-link px-4 fw-bold"
                style={{ color: "white" }}
              >
                Add New Plant
              </Link>
            </li>

            <li className="nav-item col text-nowrap ms-auto">
              <Link
                to="/plants/favourites"
                className="nav-link px-4 fw-bold"
                style={{ color: "white" }}
              >
                Favourites
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
