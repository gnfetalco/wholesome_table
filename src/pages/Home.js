import React from 'react'
import BGImage from '../assets/images/bgindex.jpg';
import Modal from '../components/Modal';
import '../styles/Home.css';

function Home() {
  return (
    <div className='mainBody' style={{ backgroundImage: `url(${BGImage})` }}>
      <div className='bodyTitle'>
        <div className='titleCont'>
        <p class="one">Nourish your body with</p></div>
        <div className='titleCont'>
        <p class="two">Organic Food</p></div>
      </div>
      <div>
        <Modal />
      </div>
      <div className='bodyBot'>
        <p>Our Promise<br /><br />
          <i class="fa-solid fa-bowl-food"></i>&nbsp;Organic Food &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;
          <i class="fa-solid fa-seedling"></i>&nbsp;Sustainability&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp; 
          <i class="fa-solid fa-recycle"></i>&nbsp;Eco Friendly</p>
      </div>
    </div>
  )
}

export default Home