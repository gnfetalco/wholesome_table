import React from 'react';
import { useRef } from 'react';
import BFast from '../assets/images/bfast-peanut-butter-banana-muffin.jpg';
import BFast2 from '../assets/images/bfast-olive-toast-w-berries.jpg';
import BFast3 from '../assets/images/bfast-pumpkin-pancake.jpg';
import Lunch from '../assets/images/lunch-adobo-beef-torta.jpg';
import Lunch2 from '../assets/images/lunch-angel-hair-shrimp-pasta.jpg';
import Lunch3 from '../assets/images/lunch-chicken-stirfry-w-cauliflower-rice.jpg';
import Main from '../assets/images/bgmenu1.jpg';
import Menu1 from '../assets/images/bgmenu2.jpg';
import Menu2 from '../assets/images/bgmenu3.jpg';
import ScrollToTop from '../components/ScrollToTop';
import '../styles/Menu.css';

function Menu() {
  const main = useRef(null);
  const breakfast = useRef(null);
  const lunch = useRef(null);

  const scrollToSect = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className='menuBody'>
      {/* ---------- Main Menu ---------- */}
      <div className='bg main' ref={main} style={{ backgroundImage: `url(${Main})` }}>
        <div className='menuTitle'><h1>MENU</h1></div>
        <div className='menuBox'>
          <div className='selection'>
            <img src={BFast} />
            <p onClick={() => scrollToSect(breakfast)}>Our Breakfast Selections
              <span className='extra' />
            </p>
          </div>
          <div className='selection'>
            <img src={Lunch} />
            <p onClick={() => scrollToSect(lunch)}>Our Lunch Selections
              <span className='extra' />
            </p>
          </div>
        </div>
      </div>

      {/* ---------- List of Breakfast Menu ---------- */}
      <div className='bg menuBfast' ref={breakfast} style={{ backgroundImage: `url(${Menu1})` }}>
        <div className='breakfast'>
          <div className='foodImg'>
            <img src={BFast2} />
          </div>
          <div className='foodInfo'>
            <p class="foodName">Olive Toast with Berries - $10.00</p>
            <p class="foodIngr">Olive Bread, Raspberry or BLueberry, Honey, Cream Cheese, Chilies</p>
            <p class="foodDesc">The combination of the olives in the bread with cream cheese and honey, with pinch of chopped fresh or dry spicy chilies, yet spicy fruit is simply delicious. </p>
          </div>
        </div>
        <div className='breakfast'>
          <div className='foodImg'>
            <img src={BFast} />
          </div>
          <div className='foodInfo'>
            <p class="foodName">Peanut Butter Banana Muffin - $13.00</p>
            <p class="foodIngr">Cereals, Baking Soda, Salt, Rice Flour, Ripe Banana, Honey, Organic Peanut Butter, Free Range Eggs</p>
            <p class="foodDesc">Gluten and dairy free. Made with organic ingredients. Topped with few choco chips, perfect for your breakfast needs, served freshly baked.</p>
          </div>
        </div>
        <div className='breakfast'>
          <div className='foodImg'>
            <img src={BFast3} />
          </div>
          <div className='foodInfo'>
            <p class="foodName">Pumpkin Pancake - $13.00</p>
            <p class="foodIngr">Flour, Melted Butter, Baking Powder, Salt, Sugar, Eggs</p>
            <p class="foodDesc">Fresh organic pumpkin from our local supplier, mixed with our in-house ingredients. All from local suppliers. Served hot and fresh.</p>
          </div>
        </div>
      </div>

      {/* ---------- List of Lunch Menu ---------- */}
      <div className='bg menuLunch' ref={lunch} style={{ backgroundImage: `url(${Menu2})` }}>
        <div className='lunch'>
          <div className='foodImg'>
            <img src={Lunch} />
          </div>
          <div className='foodInfo'>
            <p class="foodName">Adobo Beef Torta - $19.99</p>
            <p class="foodIngr">Olive Bread, Raspberry or BLueberry, Honey, Cream Cheese, Chilies</p>
            <p class="foodDesc">The combination of the olives in the bread with cream cheese and honey, with pinch of chopped fresh or dry spicy chilies, yet spicy fruit is simply delicious. </p>
          </div>
        </div>
        <div className='lunch'>
          <div className='foodImg'>
            <img src={Lunch2} />
          </div>
          <div className='foodInfo'>
            <p class="foodName">Angel Hair Shrimp Pasta - $19.99</p>
            <p class="foodIngr">Cereals, Baking Soda, Salt, Rice Flour, Ripe Banana, Honey, Organic Peanut Butter, Free Range Eggs</p>
            <p class="foodDesc">Gluten and dairy free. Made with organic ingredients. Topped with few choco chips, perfect for your breakfast needs, served freshly baked.</p>
          </div>
        </div>
        <div className='lunch'>
          <div className='foodImg'>
            <img src={Lunch3} />
          </div>
          <div className='foodInfo'>
            <p class="foodName">Chicken Stirfry with Cauliflower Rice - $25.00</p>
            <p class="foodIngr">Flour, Melted Butter, Baking Powder, Salt, Sugar, Eggs</p>
            <p class="foodDesc">Fresh organic pumpkin from our local supplier, mixed with our in-house ingredients. All from local suppliers. Served hot and fresh.</p>
          </div>
        </div>
      </div>
      <ScrollToTop />
      
    </div>
  )
}

export default Menu