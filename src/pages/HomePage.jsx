import React from 'react'
import { Link } from 'react-router-dom'
import homePageImage from '../assets/homepage-image.jpeg'

function HomePage() {
  return (
    <div className="container-fluid d-flex flex-column">
      <div className="row justify-content-center align-items-center">
        <div className='col-md-5 m-5'>
          <img src={homePageImage} alt="HousePlants" className="mx-auto d-block img-fluid" style={{height: '400px'}} />
        </div>
        <div className="col-md-5 text-center">
          <h1 className="fw-bold m-5">Cultivate wisdom, nurture your houseplants.</h1>
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
    </div>
  )
}

export default HomePage