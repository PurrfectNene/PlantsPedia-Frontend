import React from 'react'
import { Link } from 'react-router-dom'
import homePageImage from '../assets/homepage-image-5.jpeg'
import '../HomePage.css'
import TopPlantPicks from '../components/TopPlantPicks'

function HomePage() {
  return (
    <div>
      <div className="has-bg-img align-items-center">
        <div className="bg-img d-flex align-items-center" style={{backgroundImage: `url(${homePageImage})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className="container ">
            <div className="row justify-content-end ">
              <div className='col-lg-5 ' >
                <h1 className="text-uppercase" style={{fontSize:'4.5rem', color:'#474443', display: "block", letterSpacing: '-8px', textAlign: 'right'}} >Cultivate wisdom. Nurture your houseplants.</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid text-center p-5" style={{backgroundColor: '#bdc6b3'}}>
        <p style={{fontSize: '2rem', color: '#474443'}}>Explore our extensive collection of plants, tailored to suit your unique needs and space. Discover the ideal houseplant to brighten your home or office environment effortlessly.</p>
        <div className="col">
          <Link to="/plants"><button className="p-3 m-3 btn btn-outline-light" style={{color: '#474443' }}>Find your perfect houseplant</button></Link>
        </div>
      </div>

      <div>
        <TopPlantPicks/>
      </div>
    </div>
  </div>
        
  )
}

export default HomePage