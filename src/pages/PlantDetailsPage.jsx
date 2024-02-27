import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import SimilarPlants from '../components/SimilarPlants'
 

function PlantDetailsPage() {

  const {plantId} = useParams()
  const [plant, setPlant] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:5005/plants/${plantId}`)
    .then((response) => {
      setPlant(response.data)
    })
    .catch((err)=> {
      console.log(err)
    })
  }, [plantId])

  function deletePlant(){
    axios.delete(`http://localhost:5005/plants/${plantId}`)
    .then(()=>{
      navigate('/plants')
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  return (
    <div>
      {!plant && <p>Loading...</p>}
      {plant && 
        <div className="row d-flex justify-content-center">
            <div className="col text-center mx-5">
                <h1 className="mt-5" style={{letterSpacing: '-5.5px', fontSize: '3rem'}}>{plant.name}</h1>
                <h2 className='custom-italic' style={{letterSpacing: '-3px'}}>{plant.latin_name}</h2>
                <img src={plant.image} alt="" style={{height: '500px', width: 'auto', borderRadius: '50px'}} />
            </div>
            <div className="row">
              <div className="px-5">
                <p>{plant.description}</p>
              </div>
              <div className="px-5">
                <h2>Where am I from?</h2>
                <p>{plant.origin}</p>
              </div>
              <div className="px-5">
                <h2>How to look after me</h2>
                <p>{plant.care_detail}</p>
              </div>
              <div className="px-5">
                <h2>Where should I live?</h2>
                <p>{plant.outdoor_or_indoor}</p>
              </div>
              <div className='d-flex justify-content-center mb-5'>
                <Link to={`/plants/${plant.id}/edit`}>
                <button className="m-3 btn btn-outline-dark">Edit me</button>
                </Link>
                <button className="m-3 btn btn-outline-dark" onClick={deletePlant}>Delete me</button>
              </div>
              
              <SimilarPlants plant={plant}></SimilarPlants>

            </div>
        </div>
      }
    </div>
  )
}

export default PlantDetailsPage