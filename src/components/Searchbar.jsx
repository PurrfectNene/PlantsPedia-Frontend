import axios from 'axios';
import React, { useState } from 'react'


function Searchbar(props) {
    
    const handleInput = (e) => {
        e.preventDefault();

        let query = e.target.value;
        console.log("query: ", query)
    
        axios.get(`${import.meta.env.VITE_API_URL}/plants?name_like=${query}`)
        .then((response)=>{
            props.setPlants(response.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container d-flex justify-content-lg-center">
    <input
            onChange={(e) => {handleInput(e)}}
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />

    </div>
  </nav>
  
  </div>
  )
}

export default Searchbar