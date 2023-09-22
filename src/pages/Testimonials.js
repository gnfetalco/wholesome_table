import React from 'react';
import BGImage from '../assets/images/bggallery.jpg';
import { Reviews } from '../components/Reviews';
import ReviewList from '../components/ReviewList';
import '../styles/Testimonials.css';

function Testimonials() {
  return (
    <div className='testiBody' style={{ backgroundImage: `url(${BGImage})` }}>
      <div className='testiTitle'>
        <h1>Customer Reviews / Testimonials</h1>
      </div>
      <div className='featTestimonial'>
        
        <div><i className="fas fa-quote-left"></i></div>
        <div className='featCont'>
						<p className='featMsg'>Highly Recommended</p>
						<p className='featName'>-JAZZ</p>
					</div>
      </div>
      <div className='allTestimonial'>
        {Reviews.map((reviewItem, key) => {
          return <ReviewList key ={key} name={reviewItem.name} message={reviewItem.message} />
        })}
      </div>
    </div>
  )
}

export default Testimonials