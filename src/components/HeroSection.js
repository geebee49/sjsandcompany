import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'
import mainbg from '../img/acc.jpg'
import calogo from '../img/calogo.png'

function HeroSection() {
  return (
        <div className='hero-container'>
          <img className='img-bg' src={mainbg} alt=""></img>
          <div className='sjs-cont'>
          <img  className='logo' src={calogo} alt=""></img>
          <h1 className='title'>SJS AND COMPANY</h1>
          </div>
          <p>Charted Accountants</p>

      {/* <div className='hero-btns'>        
      <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>CONTACT US</Button>
    </div> */}

    </div>
  )
}

export default HeroSection
