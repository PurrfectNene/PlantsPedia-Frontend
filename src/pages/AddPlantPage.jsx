import React from 'react'

function AddPlantPage() {
  return (
    <div className='text-center'>
      <h1 className="text-uppercase text-center mt-5" style={{fontSize:'3rem', color:'#474443', display: "block"}}>Add a New Plant</h1>
    
      <form className="container justify-content-center col-6 mb-5 mt-5">

        <div className="d-flex flex-column mb-3">
          <label className="form-label row">
           <h3>Name</h3> 
            <input type="text" placeholder="Name" />
          </label>
        </div>

        <div className="d-flex flex-column mb-3">
          <label className="form-label row">
            <h3>Latin Name</h3>
            <input type="text" placeholder="Latin name" />
          </label>
        </div>

        <div className="d-flex flex-column mb-3">
          <label className="form-label row">
            <h3>Description</h3>
            <input type="text" placeholder="Description"  />
          </label>
        </div>

        <div className="d-flex flex-column mb-3">
        <label className="form-label row">
          <h3>Care Details</h3>
          <input type="text" placeholder="Care Details" />
        </label>
        </div>

        <div className="d-flex flex-column mb-3">
          <label className="form-label row">
            <h3>Origin</h3>
            <input type="text" placeholder="Origin"/>
          </label>
        </div>

        <div className="d-flex flex-column mb-3">
        <label className="form-label row">
          <h3>Add an image</h3>
          <input type="text" />
        </label>
        </div>

        <div className="d-flex flex-column mb-3">
        <h3>Outdoor or Indoor?</h3>
          <select className="form-select row">
            <option selected>Outdoor or Indoor</option>
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