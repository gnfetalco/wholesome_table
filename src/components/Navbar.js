import React from 'react'
import Logo from '../assets/images/logo.png';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navContainer'>
      <div className='leftCont'>
        <img src={Logo} />
      </div>
      <div className='rightCont'>
        <div className='title'>
          The Wholesome Table
        </div>
        <div className='naviLinks'>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <a href='#' className='hamburg'>
          <span className='bar' />
          <span className='bar' />
          <span className='bar' />
        </a>
      </div>
    </div>
  )
}

export default Navbar