import React from 'react'
import { Link } from 'react-router-dom'
import homePageImage from '../assets/homepage-image-2.png'
import '../HomePage.css'
import TopPlantPicks from '../components/TopPlantPicks'

function HomePage() {
  return (
    <div className=''>
      <div className="bg-img">
        <div className="d-flex align-items-center" style={{backgroundImage: `url(${homePageImage})`, minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: 'center', overflow: 'none'}}>
          <div className="container-fluid overlay">
            <div className="row justify-content-end">
              <div className='col-lg-6 col-md-10 col-sm-12 col-xs-12'>
                <div style={{position: 'absolute', top: '30%', left: '3%', width: '50%'}} >
                  <h1 className="text-uppercase first-h1" style={{fontSize:'4.5rem', color:'#474443', display: "block", letterSpacing: '-5px'}} >Develop Plant Knowledge</h1>
                </div>
                <div className='text-end' style={{position: 'absolute', bottom: '10%', right: '3%', width: '50%'}}>
                  <h1 className="text-uppercase second-h1 " style={{fontSize:'4.5rem', color:'#474443', display: "block", letterSpacing: '-5px'}}>Support Your Indoor Greenery</h1>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid d-flex text-center p-5" style={{backgroundColor: '#bdc6b3'}}>
        <div className="row">
          <div className="col-12">
          <p style={{fontSize: '2rem', color: '#474443'}}>Explore our <strong>extensive collection of plants</strong>, tailored to suit your unique needs and space. Discover the ideal houseplant to brighten your home or office environment effortlessly.</p>
          <Link to="/plants"><button className="p-3 m-3 btn btn-outline-light btn-homepage" style={{color: '#474443' }}>Explore our curated catalogue of houseplants</button></Link>
          </div>
        </div>
      </div>

      <div className="container-fluid text-center p-5">
        <h2 style={{fontSize: '2rem', color: '#474443'}}>Don't see your <strong>favourite plant</strong> in our catalogue?</h2>
        <Link to="plants/create"><button className="p-3 m-3 btn btn-outline-dark btn-homepage justify-content-center">Add a new plant</button></Link>
      </div>

      <div>
        <TopPlantPicks/>
      </div>
    </div>
  </div>
        
  )
}

export default HomePage