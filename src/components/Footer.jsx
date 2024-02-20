import React from 'react'
import FacebookIcon from '../assets/facebook-icon.png'
import InstagramIcon from '../assets/instagram-icon.png'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='p-3' style={{backgroundColor: '#474443', color: '#fff'}}>
        <footer className='footer d-flex justify-content-end'>
            <div className="row mx-4">
                <div className="col">
                    <Link><img src={FacebookIcon} style={{height:'40px'}} alt="" /></Link>
                </div>
                <div className="col">
                    <Link><img src={InstagramIcon} style={{height:'40px'}} alt="" /></Link>
                </div>
            </div>
        </footer>
    </div>

  )
}
