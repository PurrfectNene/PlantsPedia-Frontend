import axios from 'axios'
import React, { useEffect, useState } from 'react'

function TopPlantPicks() {

    const [lastPlant, setLastPlant] = useState(null)
    const [secondToLastPlant, setSecondToLastPlant] = useState(null)
    const [thirdToLastPlant, setThirdToLastPlant] = useState(null)

    axios.get(`http://localhost:5005/plants/`)
    .then((response) =>{
        const allPlants = response.data
        // console.log(allPlants)
        const lastPlant = allPlants[allPlants.length-1]
        // console.log(lastPlant)
        setLastPlant(lastPlant)
        const secondToLastPlant = allPlants[allPlants.length-2]
        setSecondToLastPlant(secondToLastPlant)
        const thirdToLastPlant = allPlants[allPlants.length-3]
        setThirdToLastPlant(thirdToLastPlant)
    })
    .catch((err) => {
        // console.log(err)
    })


  return (
    <div className="container-fluid row p-5">
        <h1 className="text-center">Recently Added Plants</h1>
        <div className="row">
          <div className="col card m-4">
            {!lastPlant && <p>No plant details</p>}
            {lastPlant && 
            <div className='d-flex flex-column'>
                <img src={lastPlant.image} style={{height: '200px'}} alt="" />
                {lastPlant.name}
            </div>
            }
          </div>
          <div className="col card m-4">
            {!secondToLastPlant && <p>No plant details</p>}
            {secondToLastPlant && 
                <div className='d-flex flex-column'>
                    <img src={secondToLastPlant.image} style={{height: '200px'}} alt="" />
                    {secondToLastPlant.name}
                </div>
            }
          </div>
          <div className="col card m-4">
            {!thirdToLastPlant && <p>No plant details</p>}
            {thirdToLastPlant && 
                <div className='d-flex flex-column'>
                    <img src={thirdToLastPlant.image} style={{height: '200px'}} alt="" />
                    {thirdToLastPlant.name}
                </div>
            }
          </div>
        </div>
        </div>
  )
}

export default TopPlantPicks