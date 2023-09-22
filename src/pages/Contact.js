import React from 'react';
import BGImage from '../assets/images/bgcontact.jpg';
import '../styles/Contact.css';

function Contact() {
  
  const showAlert = function (e) {
    alert('Enquiry Submitted');
    e.prevendDefault();
  }

  return (
    <div className='contactBody' style={{ backgroundImage: `url(${BGImage})` }}>
      <div className='contactTitle'>
        <h1>Contact Us</h1>
      </div>
      <div className='inqForm'>
        <form onSubmit={showAlert}>
          <h3>Enquire Now!</h3>
          <input placeholder='Your Name Here' required />
          <input placeholder='Your Email Here' required />
          <textarea></textarea>
          <button>Submit</button>
        </form>
      </div>
      <div className='address'>
        <h3>Meet Us</h3>
        <i className="material-icons">place</i> 45 Hereford Street Christchurch Central, Christchurch City<br /><br />
        <strong>Let's Talk</strong><br />
        <i className="material-icons">local_phone</i> 03 123 4567<br />
        <i className="material-icons">stay_current_portrait</i> 0225678934<br />
        <i className="material-icons">mail_outline</i> info@thewholesometable.co.nz
      </div>
    </div>
  )
}

export default Contact