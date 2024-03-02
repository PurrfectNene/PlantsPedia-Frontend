import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function TopPlantPicks() {

    const [lastPlant, setLastPlant] = useState(null)
    const [secondToLastPlant, setSecondToLastPlant] = useState(null)
    const [thirdToLastPlant, setThirdToLastPlant] = useState(null)


    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/plants/`)
        .then((response) =>{
            const allPlants = response.data
            const lastPlant = allPlants[allPlants.length-1]
            setLastPlant(lastPlant)
            const secondToLastPlant = allPlants[allPlants.length-2]
            setSecondToLastPlant(secondToLastPlant)
            const thirdToLastPlant = allPlants[allPlants.length-3]
            setThirdToLastPlant(thirdToLastPlant)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    


  return (
    <div className="container-fluid" style={{color: '#474443'}} >
      <div className="row p-5" style={{backgroundColor: '#e8ebe8'}}>
        <h2 className="text-center" >Recently Added Plants</h2>
        <p className="text-center fs-5 mt-5">Check out what our users have most recently added into our catalogue.</p>
        <div className="row text-center justify-content-center">
          
          <div className="col-12 col-md-3 card mx-5 border-0" style={{backgroundColor: '#e8ebe8'}}>
            {!lastPlant && <p>Loading</p>}
            {lastPlant && 
            <div className='d-flex flex-column p-3'>
              <Link to={`plants/${lastPlant.id}`}> <img src={lastPlant.image} alt="" className="m-3 rounded-5" style={{height: '200px', width: '200px'}}  /></Link>
              <h3 style={{color: '#474443'}}>{lastPlant.name}</h3>
            </div>
            }
          </div>

          <div className="col-12 col-md-3 card mx-5 p-3 border-0" style={{backgroundColor: '#e8ebe8'}}>
            {!secondToLastPlant && <p>Loading</p>}
            {secondToLastPlant && 
            <div className='d-flex flex-column'>
              <Link to={`plants/${secondToLastPlant.id}`}> <img src={secondToLastPlant.image} alt="" className="m-3 rounded-5" style={{height: '200px', width: '200px'}}/></Link>
              <h3 style={{color: '#474443'}}>{secondToLastPlant.name}</h3>
            </div>
            }
          </div>

          <div className="col-12 col-md-3 card mx-5 p-3 border-0" style={{backgroundColor: '#e8ebe8'}}>
            {!thirdToLastPlant && <p>Loading</p>}
            {thirdToLastPlant && 
            <div className='d-flex flex-column'>
              <Link to={`plants/${thirdToLastPlant.id}`}> <img src={thirdToLastPlant.image} alt="" className="m-3 rounded-5" style={{height: '200px', width: '200px'}}/></Link>
              <h3 style={{color: '#474443'}}>{thirdToLastPlant.name}</h3>
            </div>
            }
          </div>

        </div>
      </div>
    </div>
  )
}

export default TopPlantPicks