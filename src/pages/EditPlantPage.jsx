import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EditPlantPage() {
  const [name, setName] = useState('')
  const [latin, setLatin] = useState('')
  const [description, setDescription] = useState('')
  const [care, setCare] = useState('')
  const [origin, setOrigin] = useState('')
  const [image, setImage] = useState('')
  const [indoor, setIndoorOutdoor] = useState('')

  const {plantId} = useParams()

  const navigate = useNavigate()


  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/plants/${plantId}`)
    .then((response)=>{
      setName(response.data.name)
      setLatin(response.data.latin_name)
      setDescription(response.data.description)
      setCare(response.data.care_detail)
      setOrigin(response.data.origin)
      setIndoorOutdoor(response.data.indoor)
    })
    .catch((err)=> {
      console.log(err)
    })

  },[])

    function handleSubmit(e){
        e.preventDefault()

        let editPlants = {name:name,latin_name:latin,description:description,care_detail:care,origin:origin,image:image,outdoor_or_indoor:indoor}

        axios.put(`${import.meta.env.VITE_API_URL}/plants/${plantId}`, editPlants)
        .then((updatedPlantsFromAPI) => {
            navigate(`/plants/${updatedPlantsFromAPI.data.id}/`)
            console.log(updatedPlantsFromAPI.data.id)
        })
        .catch((err) => {
          console.log(err)
        })
    }


  return (
    <div className='vw-100 d-flex justify-content-center' style={{color:'#474443', backgroundColor: '#E2E2E2'}} >
      <div className='row' >
        <div className='p-4'>
          <h1 className="text-center" style={{fontSize:'3rem'}}>EDIT PLANT DETAILS</h1>
        </div>
  
      <div className='col'>
        <form onSubmit={handleSubmit} >

          <div className='container-fluid col-md-10 col-sm-10 px-5'>
            <label className="form-label row">
              <h3 className="mt-4">Name</h3> 
              <input type="text" className="custom-input" value={name} style={{borderRadius: '10px', border: 'none'}} onChange={(e) => setName(e.target.value)} />
            </label>
          </div>

          <div className="container-fluid col-md-10 col-sm-10 px-5">
            <label className="form-label row">
              <h3 className="mt-4">Latin Name</h3>
              <input type="text" className="custom-input" value={latin} style={{borderRadius: '10px', border: 'none'}} onChange={(e) => setLatin(e.target.value)} />
            </label>
          </div>

          <div className="container-fluid col-md-10 col-sm-10 px-5">
            <label className="form-label row">
              <h3 className="mt-4">Description</h3>
              <input type="text" className="custom-input" value={description} style={{borderRadius: '10px', border: 'none'}} onChange={(e) => setDescription(e.target.value)} />
            </label>
          </div>

          <div className="container-fluid col-md-10 col-sm-10 px-5">
          <label className="form-label row">
            <h3 className="mt-4">Care Details</h3>
            <input type="text" className="custom-input" value={care}  style={{borderRadius: '10px', border: 'none'}} onChange={(e) => setCare(e.target.value)} />
          </label>
          </div>

          <div className="container-fluid col-md-10 col-sm-10 px-5">
            <label className="form-label row">
              <h3 className="mt-4">Origin</h3>
              <input type="text" className="custom-input" value={origin} style={{borderRadius: '10px', border: 'none'}} onChange={(e) => setOrigin(e.target.value)}/>
            </label>
          </div>

          <div className="container-fluid col-md-10 col-sm-10 px-5">
          <label className="form-label row">
            <h3 className="mt-4">Add an image</h3>
            <input type="text" className="custom-input" placeholder="Add an image that best portrays me" style={{borderRadius: '10px', border: 'none'}} onChange={(e)=>setImage(e.target.value)} />
          </label>
          </div>

          <div className="container-fluid col-md-10 col-sm-10 px-5">
          <h3 className="mt-4">Outdoor or Indoor?</h3>
            <select className="form-select row custom-input" style={{borderRadius: '10px', border: 'none'}} onChange={(e) => setIndoorOutdoor(e.target.value)}>
              <option selected>Should I live indoors or outdoors?</option>
              <option value="1">Indoor</option>
              <option value="2">Outdoor</option>
              <option value="3">Outdoor/Indoor</option>
            </select>
          </div>
          
          <div className="container-fluid d-flex justify-content-center">
            <div className="row d-flex ">
              <div className="col">
                <button className="p-3 m-5 btn btn-outline-dark">Edit</button>
              </div>
            </div>
          </div>
        </form>
        </div>
      </div>
    </div>
  )
}

export default EditPlantPage