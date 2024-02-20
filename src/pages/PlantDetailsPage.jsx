import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
 

function PlantDetailsPage() {

  const {plantId} = useParams()
  const [plant, setPlant] = useState(null)

  useEffect(() => {
    axios.get(`http://localhost:5005/plants/${plantId}`)
    .then((response) => {
      setPlant(response.data)
    })
    .catch((err)=> {
      console.log(err)
    })
  }, [plantId])


  const navigate = useNavigate()

  function deletePlant(){
    axios.delete(`http://localhost:5005/plants/${plantId}`)
    .then(()=>{
      navigate('/plants')
    })
    .catch((err)=>{
      console.log(err)
    })
  }




  function deletePlant(){
    axios.get(`http://localhost:5005/plants/${plantId}`)
    .then(()=>{})
    .catch(()=>{})
  }
  
  
  return (
    <div>
      {!plant && <p>Loading...</p>}
      {plant && 
        <div className="row d-flex justify-content-center">
            <div className="col text-center">
                <h1 className="mt-5" style={{letterSpacing: '-5.5px', fontSize: '3rem'}}>{plant.name}</h1>
                <h2 className='custom-italic' style={{letterSpacing: '-3px'}}>{plant.latin_name}</h2>
                <img src={plant.image} alt="" style={{height: '500px', width: 'auto', borderRadius: '50px'}} />
            </div>
            <div className="row p-5">
              <div className="">
                <p>{plant.description}</p>
              </div>
              <div>
                <h2>Where am I from?</h2>
                <p>{plant.origin}</p>
              </div>
              <div>
                <h2>How to look after me</h2>
                <p>{plant.care_detail}</p>
              </div>
              <div>
                <h2>Where should I live?</h2>
                <p>{plant.outdoor_or_indoor}</p>
              </div>
              <div className='d-flex justify-content-center'>
                <button className="m-3">Edit me</button>
                <button className="m-3" onClick={deletePlant}>Delete me</button>
              </div>
            </div>
        </div>
      }
    </div>
  )
}

export default PlantDetailsPage