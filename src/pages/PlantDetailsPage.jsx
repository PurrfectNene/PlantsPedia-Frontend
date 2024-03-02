import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import SimilarPlants from '../components/SimilarPlants'
 

function PlantDetailsPage() {

  const {plantId} = useParams()
  const [plant, setPlant] = useState(null)
  const navigate = useNavigate()


  function getPlant(){
    axios.get(`http://localhost:5005/plants/${plantId}?_embed=comments`)
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
    axios.delete(`http://localhost:5005/plants/${plantId}`)
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
    axios.post(`http://localhost:5005/comments`, newComment)
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
            <div className="col text-center mx-5 mb-5">
                <h1 className="mt-5" style={{letterSpacing: '-5.5px', fontSize: '3rem'}}>{plant.name}</h1>
                <h2 className='custom-italic mt-3' style={{letterSpacing: '-3px'}}>{plant.latin_name}</h2>
                <img src={plant.image} className='mt-3' style={{height: '400px', width: 'auto', borderRadius: '50px'}} />
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
              <div className='px-5'>
                <Link to={`/plants/${plant.id}/edit`}>
                <button className="btn btn-outline-dark mb-5">Edit me</button>
                </Link>
                <button className="btn btn-outline-dark mx-3 mb-5" onClick={deletePlant}>Delete me</button>
              </div>

              <div className="flex-column d-flex pt-4 px-5 pb-4" style={{backgroundColor: '#bdc6b3'}}>
                <h3 className="pb-4">Got something to say about the {plant.name}? Add a comment below to help others:</h3>
                <div className="col">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-4">
                      <input className="form-control mb-3" type="text" placeholder="Name" value={commentName} onChange={(e) =>setCommentName(e.target.value)} />
                      </div>
                    <div className="row">
                      <div className="col-8">
                        <input className="form-control mb-3" type="text" placeholder="Comment" value={comment} onChange={(e) =>setComment(e.target.value)} />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <button className="btn btn-outline-dark">Submit</button>
                      </div>
                    </div>
                    </div>
                  </form>
                </div>
                
                <h4 className='pt-5'>Comments from other users:</h4>
                <div>
                  {plant.comments.map((oneComment)=>(
                    <div key={oneComment.id} className='container-fluid mb-4' style={{border: '1px solid #fff', borderRadius: '10px'}}>
                      <div className="row">
                        <p><strong>{oneComment.name}</strong></p>
                      </div>
                      <div className="row">
                        <p>{oneComment.commentBody}</p>
                      </div>
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