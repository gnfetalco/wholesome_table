import React, { useState } from 'react';
import '../styles/Modal.css';

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const showAlert = function (e) {
    alert('Booking Submitted');
    e.prevendDefault();
  }

  return (
    <>
      <button onClick={toggleModal} className='bookModal'>Book Now!</button>
      {modal && (
        <div className='modal'>
          <div onClick={toggleModal}  className='overlay'></div>
          <div className='bookForm'>
            <div className="go-back" onClick={toggleModal}><p>Go Back</p></div>
            <div className="booking-form">
              <h2>Book a Table</h2>
              <form onSubmit={showAlert}>
                <label for="name" className='formLabel'>Name</label>
                <input className="book-input" type="text" name="name" placeholder="Your Name here" required/>
                <label for="mobile" className='formLabel'>Mobile</label>
                <input className="book-input" type="text" name="mobile" placeholder="Mobile Number" required/>
                <div className='option1'>
                  <div className='option2'>
                    <label for="pax" className='formLabel'>Number of Pax</label>
                    <select name="pax">
                      <option value="1" selected>1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                  <div className='option2'>
                    <label for="time" className='formLabel'>Time</label>
                    <select name="time" id="time">
                      <option value="8am">8am</option>
                      <option value="9am">9am</option>
                      <option value="10am">10am</option>
                      <option value="11am">11am</option>
                      <option value="12pm">12nn</option>
                      <option value="1pm">1pm</option>
                      <option value="2pm">2pm</option>
                      <option value="3pm">3pm</option>
                    </select>
                  </div>
                </div>
                <label for="date" className='formLabel'>Date</label>
                <input id="date" class="book-input" type="date" name="date" placeholder="Pick a date" onchange="checkTimeDate()" required/>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      )}
      
    </>
  )

}