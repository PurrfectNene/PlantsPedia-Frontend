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
          display: "flex",
          justifyContent: "flex-end",
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
          <ul style={{ listStyleType: "none", margin: 0, padding: 0, display: "flex" }}>
            <li className="nav-item">
              <Link
                to="/plants"
                className="nav-link px-4 fw-bold"
                style={{ color: "white" }}
              >
                All Plants
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/plants/create"
                className="nav-link px-4 fw-bold"
                style={{ color: "white" }}
              >
                Add New Plant
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/plants/favourites"
                className="nav-link px-4 fw-bold"
                style={{ color: "white" }}
              >
                Favourites
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/login"
                className="nav-link px-4 fw-bold"
                style={{ color: "white" }}
              >
                Log In
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/signup"
                className="nav-link px-4 fw-bold"
                style={{ color: "white" }}
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>

  );
}

export default Navbar;
