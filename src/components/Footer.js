import React from 'react'
import FB from '../assets/images/fblogo.png';
import IG from '../assets/images/iglogo.png';
import TT from '../assets/images/twlogo.png';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='left foot'>
        Legal
      </div>
      <div className='mid foot'>
      <a href="https://www.facebook.com/login.php/" target="_blank"><img src={FB} id="footlogo" /></a>
			<a href="https://www.instagram.com/accounts/login/" target="_blank"><img src={IG} id="footlogo" /></a>
			<a href="https://twitter.com/i/flow/login" target="_blank"><img src={TT} id="footlogo" /></a>
      </div>
      <div className='right foot'>
        The Wholesome Table &#xA9; 2023
      </div>
    </div>
  )
}

export default Footer