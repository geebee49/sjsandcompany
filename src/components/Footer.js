import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
      <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Partners</h2>
            <div className='contact-us-items'>
            <p className='contact-p'>Jose George</p>
            <p className='contact-p'>Santhosh C G</p>
            </div>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <div className='contact-us-items'>
            <div className='contact-email'>
            <i class="fa fa-envelope" aria-hidden="true"></i>
            <p className='contact-p'>sjsandcompany@gmail.com</p>
            </div>
            <p className='contact-p'>+91 9846322263</p>
            <p className='contact-p'>+91 8547254650</p>
            </div>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Location</h2>
            <Link to='https://maps.app.goo.gl/p3r89WBU1oyGL69v8' className='location-link'><i class="fa fa-map-pin fa-3x" aria-hidden="true"></i>
            <p>Vasudev Complex, 3rd Floor, Civil Line Rd, Palarivattom, Ernakulam, Kerala 682025</p>
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;