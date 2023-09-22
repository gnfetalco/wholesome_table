import React, { useState, useEffect} from 'react';
import '../styles/ScrollToTop.css';

function ScrollToTop() {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100) {
        setShowScrollTopButton(true)
      } else {
        setShowScrollTopButton(false)
      }
    })
  }, [])

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div>
      {showScrollTopButton && (<div className='toTop'><p onClick={scrollTop}>Back to Top</p></div>)}
    </div>
  );
}

export default ScrollToTop;