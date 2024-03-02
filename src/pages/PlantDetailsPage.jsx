import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import SimilarPlants from '../components/SimilarPlants'
 

function PlantDetailsPage() {

  const {plantId} = useParams()
  const [plant, setPlant] = useState(null)
  const navigate = useNavigate()


  function getPlant(){
    axios.get(`${import.meta.env.VITE_API_URL}/plants/${plantId}?_embed=comments`)
    .then((response) => {
      setPlant(response.data)
    })
    .catch((err)=> {
      console.log(err)
    })
  }
  useEffect(() => {
    getPlant()
  }, [plantId])

  function deletePlant(){
    axios.delete(`${import.meta.env.VITE_API_URL}/plants/${plantId}`)
    .then(()=>{
      navigate('/plants')
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  const [commentName, setCommentName] = useState('')
  const [comment, setComment] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    const newComment = {name:commentName, commentBody:comment, plantId:parseInt(plantId)}
    axios.post(`${import.meta.env.VITE_API_URL}/comments`, newComment)
    .then((response)=>{
      console.log(response.data)
      getPlant()
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
              <div className='px-5 mb-5'>
                <Link to={`/plants/${plant.id}/edit`}>
                <button className="m-3 btn btn-outline-dark">Edit me</button>
                </Link>
                <button className="m-3 btn btn-outline-dark" onClick={deletePlant}>Delete me</button>
              </div>
              <div className="flex-column d-flex p-5 mb-5">
                <h3>Got something to say about the {plant.name}? Add a comment below to help others:</h3>
                <form onSubmit={handleSubmit}>
                  <h4>Name:</h4>
                  <input type="text" value={commentName} onChange={(e) =>setCommentName(e.target.value)} />
                  <h4>Comment:</h4>
                  <input type="text" value={comment} onChange={(e) =>setComment(e.target.value)} />
                  <button>Submit</button>
                </form>

                <h3>Comments from other users</h3>
                <div>
                  {plant.comments.map((oneComment)=>(
                    <div key={oneComment.id}>
                      <p>{oneComment.name}: {oneComment.commentBody}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <SimilarPlants plant={plant}></SimilarPlants>

            </div>
        </div>
      }
    </div>
  )
}

export default PlantDetailsPage