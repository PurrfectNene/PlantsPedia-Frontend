import React from 'react'
import { Link } from 'react-router-dom'

function LoginPage() {
  return (
    <div className='vh-100 vw-100 d-flex flex-column align-items-center' style={{color:'#474443'}}>
        <div className='container-fluid m-5' style={{backgroundColor: '#E2E2E2', maxWidth: '40vw', borderRadius: '10px'}}>
            <h1 className='m-4 text-center'>Log In</h1>
                <form className='m-4 mt-5'>
                    <div className="row mt-3">
                        <input type="email" style={{borderRadius: '10px', border: 'none'}} placeholder='Email'/>
                    </div>
                    <div className="row mt-3">
                        <input type="email" style={{borderRadius: '10px', border: 'none'}} placeholder='Password'/>
                    </div>
                    <div className="row mt-4 d-flex justify-content-center">
                      <button className='btn btn-outline-dark' style={{width: '100px'}}>Log in</button>
                    </div>
                </form>
                <p className='pb-4 text-center'>Don't have an account yet? <Link to='/login'>Sign up.</Link></p>
            </div>
        </div>
  )
}

export default LoginPage