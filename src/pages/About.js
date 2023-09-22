import React from 'react';
import BGImage from '../assets/images/bgabout.jpg';
import RTeam from '../assets/images/ourteam.jpg';
import RVideo from '../assets/videos/ourstory.mp4';
import '../styles/About.css';

function About() {
  return (
    <div className='aboutBody' style={{ backgroundImage: `url(${BGImage})` }}>
      <div className='aboutTitle'>
        <h1>The Wholesome Table Team</h1>
      </div>
      <div className='subTitle'>
        <h1>Our Story</h1>
      </div>
      <div className='aboutTable'>
        <div className='column aboutLeft'>
          <h3>Al fresco dining for customers</h3><br />
          <video width="340" controls>
            <source src={RVideo} type='video/mp4' />
          </video>
          <p>Our beautiful cafe was born from a genuine love of servicing people and a deep appreication of the benefits of organic and real food.</p>
          <p>We're proud of our food and service, we absolutely love what we do and we hope you do too.</p>
        </div>
        <div className='column aboutMid'>
          <br /><h3>Our Team</h3><br />
          <img src={RTeam} />
          <p>We have a great crew, who are passionate about quality organic whole food, real customer service, caring for our planet with sustainable practices.</p>
        </div>
        <div className='column aboutRight'>
          <br /><br /><br /><h2>Café Hours</h2><br />
          <strong>
          Tuesday to Sunday<br />
          8 am to 3 pm</strong><br /><br /><br /><br />
          <em><p>We look forward to welcoming you with a smile into our beautiful, bright and open space restaurant, and helping you to enjoy some delicious and nutritious treats.</p></em>
        </div>
      </div>
    </div>
  )
}

export default About