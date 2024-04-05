import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function SignupPage() {

    const [errorMessage,setErrorMessage] = useState('')

  return (
    <div className='vh-100 vw-100 d-flex flex-column align-items-center' style={{color:'#474443'}}>
        <div className='container-fluid m-5' style={{backgroundColor: '#E2E2E2', maxWidth: '40vw', borderRadius: '10px'}}>
            <h1 className='m-4'>Sign Up</h1>
            <h2 className='m-4 fs-5'>Get started with PlantsPedia!</h2>
                <form className='m-4 mt-5' style={{width:'100%'}}>
                    <div className="row">
                        <div className="col-4">
                        <label>First Name</label>
                        </div>
                        <div className="col">
                        <input type="text" style={{borderRadius: '10px', border: 'none'}}/>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-4">
                        <label>Last Name</label>
                        </div>
                        <div className="col">
                        <input type="text" style={{borderRadius: '10px', border: 'none'}}/>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-4">
                        <label>Email</label>
                        </div>
                        <div className="col">
                        <input type="email" style={{borderRadius: '10px', border: 'none'}}/>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-4">
                        <label>Password (6 or more characters)</label>
                        </div>
                        <div className="col">
                        <input type="password" style={{borderRadius: '10px', border: 'none'}}/>
                        </div>
                    </div>
                    <button className='mt-5 btn btn-outline-dark'>Sign up</button>
                    {errorMessage && <p></p>}
                </form>
                <p className='m-4 pt-2'>Already have an account? <Link to='/login'>Log in.</Link></p>
            </div>
        </div>
        
  )
}

export default SignupPage