import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function TopPlantPicks() {

    const [lastPlant, setLastPlant] = useState(null)
    const [secondToLastPlant, setSecondToLastPlant] = useState(null)
    const [thirdToLastPlant, setThirdToLastPlant] = useState(null)


    useEffect(() => {
        axios.get(`http://localhost:5005/plants/`)
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
    <div className="container-fluid row p-5" style={{backgroundColor: '#e8ebe8'}}>
        <h2 className="text-center">Recently Added Plants</h2>
        <div className="row text-center">
          <div className="col card m-4 border-0" style={{backgroundColor: '#e8ebe8'}}>
            {!lastPlant && <p>Loading</p>}
            {lastPlant && 
            <div className='d-flex flex-column p-3'>
                <img src={lastPlant.image} alt="" className="m-3 rounded-5" />
                <h3>{lastPlant.name}</h3>
            </div>
            }
          </div>
          <div className="col card m-4 p-3 border-0" style={{backgroundColor: '#e8ebe8'}}>
            {!secondToLastPlant && <p>Loading</p>}
            {secondToLastPlant && 
                <div className='d-flex flex-column'>
                    <img src={secondToLastPlant.image} alt="" className="m-3 rounded-5" />
                    <h3>{secondToLastPlant.name}</h3>
                </div>
            }
          </div>
          <div className="col card m-4 p-3 border-0" style={{backgroundColor: '#e8ebe8'}}>
            {!thirdToLastPlant && <p>Loading</p>}
            {thirdToLastPlant && 
                <div className='d-flex flex-column'>
                    <img src={thirdToLastPlant.image} alt="" className="m-3 rounded-5" />
                    <h3>{thirdToLastPlant.name}</h3>
                </div>
            }
          </div>
        </div>
        </div>
  )
}

export default TopPlantPicks