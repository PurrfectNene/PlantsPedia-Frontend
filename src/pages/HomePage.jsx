import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="container d-flex flex-column">
      <div className="row justify-content-center ">
          <h1 className="fw-bold text-center col-8 m-5">Cultivate wisdom, nurture your houseplants.</h1>
      </div>
      <div className="row">
        <div className="col px-4 mx-4">
          <Link to="/plants"><h2 className="text-center">View All Plants</h2></Link>
          <p className="text-center">Explore our jungle of houseplants to find your green soulmate!</p>
        </div>
        <div className="col px-4 mx-4">
          <Link to="plants/create"><h2 className="text-center">Add a New Plant</h2></Link>
          <p className="text-center">Can't spot your favorite? Grow our collection by adding it.</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage