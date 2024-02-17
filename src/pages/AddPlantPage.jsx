import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function AddPlantPage() {

  const [name, setName] = useState('')
  const [latin, setLatin] = useState('')
  const [description, setDescription] = useState('')
  const [care, setCare] = useState('')
  const [origin, setOrigin] = useState('')
  const [image, setImage] = useState('')
  const [indoor, setIndoor] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    const newPlant = {name:name,latin:latin,description:description,care:care,origin:origin,image:image,indoor:indoor}
    axios.post(`http://localhost:5005/plants`, newPlant)
    .then((response) => {
      console.log(response.data)
    })
    .catch((err) => {
      console.log(err)
    })


  }

  return (
    <div className='text-center' style={{color:'#474443', backgroundColor: '#E2E2E2'}} >
      <div className="has-bg-img"></div>

      <h1 className="text-uppercase text-center pt-5" style={{fontSize:'3rem', display: "block"}}>Add a New Plant</h1>
    
      <form className="container justify-content-center col-6 p-5" onSubmit={handleSubmit} >
        <div className="d-flex flex-column mb-3">
          <label className="form-label row">
           <h3>Name</h3> 
            <input type="text" className="custom-input" placeholder="What's my name?" style={{borderRadius: '10px', border: 'none'}} onChange={(e) => setName(e.target.value)} />
          </label>
        </div>

        <div className="d-flex flex-column mb-3">
          <label className="form-label row">
            <h3>Latin Name</h3>
            <input type="text" className="custom-input" placeholder="What's my name in Latin?" style={{borderRadius: '10px', border: 'none'}} onChange={(e) => setLatin(e.target.value)} />
          </label>
        </div>

        <div className="d-flex flex-column mb-3">
          <label className="form-label row">
            <h3>Description</h3>
            <input type="text" className="custom-input" placeholder="Describe me!" style={{borderRadius: '10px', border: 'none'}} onChange={(e) => setDescription(e.target.value)} />
          </label>
        </div>

        <div className="d-flex flex-column mb-3">
        <label className="form-label row">
          <h3>Care Details</h3>
          <input type="text" className="custom-input" placeholder="How should you take care of me?" style={{borderRadius: '10px', border: 'none'}} onChange={(e) => setCare(e.target.value)} />
        </label>
        </div>

        <div className="d-flex flex-column mb-3">
          <label className="form-label row">
            <h3>Origin</h3>
            <input type="text" className="custom-input" placeholder="Where am I from?" style={{borderRadius: '10px', border: 'none'}} onChange={(e) => setOrigin(e.target.value)}/>
          </label>
        </div>

        <div className="d-flex flex-column mb-3">
        <label className="form-label row">
          <h3>Add an image</h3>
          <input type="text" className="custom-input" placeholder="Add an image that best portrays me" style={{borderRadius: '10px', border: 'none'}} onChange={(e)=>setImage(e.target.value)} />
        </label>
        </div>

        <div className="d-flex flex-column mb-3">
        <h3>Outdoor or Indoor?</h3>
          <select className="form-select row custom-input" style={{borderRadius: '10px', border: 'none'}} onChange={(e) => setIndoor(e.target.value)}>
            <option selected>Should I live indoors or outdoors?</option>
            <option value="1">Indoor</option>
            <option value="2">Outdoor</option>
            <option value="3">Both</option>
          </select>
        </div>
        <button>Add Plant</button>
      </form>
    </div>
  )
}

export default AddPlantPage