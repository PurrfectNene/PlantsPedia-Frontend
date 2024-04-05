import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function AddPlantPage() {

  const [name, setName] = useState('')
  const [latin, setLatin] = useState('')
  const [description, setDescription] = useState('')
  const [care, setCare] = useState('')
  const [origin, setOrigin] = useState('')
  const [image, setImage] = useState('')
  const [indoor, setIndoorOutdoor] = useState('')


  const navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault()
    const newPlant = {name:name,latin_name:latin,description:description,care_detail:care,origin:origin,image:image,outdoor_or_indoor:indoor}
    axios.post(`${import.meta.env.VITE_API_URL}/api/plants`, newPlant)
    .then((response) => {
      console.log(response.data)
      navigate(`/plants/${response.data.id}/`)
    })
    .catch((err) => {
      console.log(err)
    })
  }


  return (
    <div className='vw-100 d-flex justify-content-center' style={{color:'#474443'}} >
      <div className='row' >

  
      <div className='container m-4' style={{backgroundColor: '#E2E2E2', borderRadius: '10px', width: '50vw'}}>
        <div className='p-4'>
            <h1 className="text-center" style={{fontSize:'3rem'}}>Add a new plant</h1>
        </div>
        <form onSubmit={handleSubmit} >

          <div className='container-fluid col-md-10 col-sm-10 px-5'>
            <label className="form-label row">
              <h3 className="mt-4">Name</h3> 
              <input type="text" className="custom-input" placeholder="What's my name?" style={{borderRadius: '10px', border: 'none'}} onChange={(e) => setName(e.target.value)} />
            </label>
          </div>

          <div className="container-fluid col-md-10 col-sm-10 px-5">
            <label className="form-label row">
              <h3 className="mt-4">Latin Name</h3>
              <input type="text" className="custom-input" placeholder="What's my name in Latin?" style={{borderRadius: '10px', border: 'none'}} onChange={(e) => setLatin(e.target.value)} />
            </label>
          </div>

          <div className="container-fluid col-md-10 col-sm-10 px-5">
            <label className="form-label row">
              <h3 className="mt-4">Description</h3>
              <input type="text" className="custom-input" placeholder="Describe me!" style={{borderRadius: '10px', border: 'none'}} onChange={(e) => setDescription(e.target.value)} />
            </label>
          </div>

          <div className="container-fluid col-md-10 col-sm-10 px-5">
          <label className="form-label row">
            <h3 className="mt-4">Care Details</h3>
            <input type="text" className="custom-input" placeholder="How should you take care of me?" style={{borderRadius: '10px', border: 'none'}} onChange={(e) => setCare(e.target.value)} />
          </label>
          </div>

          <div className="container-fluid col-md-10 col-sm-10 px-5">
            <label className="form-label row">
              <h3 className="mt-4">Origin</h3>
              <input type="text" className="custom-input" placeholder="Where am I from?" style={{borderRadius: '10px', border: 'none'}} onChange={(e) => setOrigin(e.target.value)}/>
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
              <option value="Indoor">Indoor</option>
              <option value="Outdoor">Outdoor</option>
              <option value="Outdoor/Indoor">Outdoor/Indoor</option>
          </select>
          </div>
          
          <div className="container-fluid d-flex justify-content-center">
            <div className="row d-flex ">
              <div className="col">
                <button className="p-3 m-5 btn btn-outline-dark">Add Plant</button>
              </div>
            </div>
          </div>
        </form>
        </div>
      </div>
    </div>
  )
}

export default AddPlantPage
