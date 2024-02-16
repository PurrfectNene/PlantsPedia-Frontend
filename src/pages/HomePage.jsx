import React from 'react'
import { Link } from 'react-router-dom'
import homePageImage from '../assets/homepage-cover-image.jpeg'
import housePlantImage1 from '../assets/houseplant-card-1.jpeg'
import housePlantImage2 from '../assets/houseplant-card-2.jpeg'

function HomePage() {
  return (
    <div style={{backgroundColor: '#E2E2E2'}}>
      <div className="has-bg-img">
        <div className="bg-img d-flex align-items-center" style={{backgroundImage: `url(${homePageImage})`, height: '100vh', backgroundSize: 'cover', }}>
          <div className="container">
            <div className="row justify-content-end">
              <div className='col-lg-6' >
                <h1 className="text-uppercase text-center" style={{fontSize:'5rem', color:'#474443', display: "block"}} >Cultivate wisdom. Nurture your houseplants.</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5" >
        <div className="row justify-content-center">
          <div className="col-md-4 mx-4 mb-5 card" style={{backgroundColor: '#536847', border: 'none'}}>
            <Link to="/plants"><h2 className="text-center fs-1" style={{color: "#A8A39D"}}>View All Plants</h2></Link>
            <p className="text-center fs-2 m-4" style={{color: '#edebe9'}} >Explore our jungle of houseplants to find your green soulmate!</p>
          </div>

          <div className="col-md-4 mx-4 mb-5 card" style={{backgroundColor: '#536847', border: "none"}} >
            <Link to="plants/create"><h2 className="text-center fs-1" style={{color: "#A8A39D"}}>Add a New Plant</h2></Link>
            <p className="text-center fs-2 m-4" style={{color: '#edebe9'}} >Can't spot your favorite? Grow our collection by adding it.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
        
  )
}

export default HomePage