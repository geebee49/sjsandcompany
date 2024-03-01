import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
  return (
        <div className='hero-container'>
          <img className='img-bg' src={"/images/acc.jpg"}></img>
          <div className='sjs-cont'>
          <img  className='logo' src={"/images/calogo.png"}></img>
          <h1 className='title'>SJS AND COMPANY</h1>
          </div>
          <p>Charted Accountants</p>

      <div className='hero-btns'>        
      <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>CONTACT US</Button>
    </div>

    </div>
  )
}

export default HeroSection
