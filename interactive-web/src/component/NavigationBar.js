import React, { useState, useEffect } from 'react';

import './NavigationBar.css';
import './Logo.css';
import Logo from './Logo';

import { Button } from './Button';


function NavigationBar() {

  const [button, setButton] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);




  return (
    <div className="navigationBar">
      <a href = "/home"><Logo></Logo></a>
      
        
      
      <div className="tabRoulette">
        <a href='/post' style={{color: '#bdbdbd', textDecoration:'none'}} className="tab">
          Posts
        </a>
        <element className="tab">
          <p>
            Map
          </p>
        </element>
        <element className="tab">
          <p>
            Timeline
          </p>
        </element>
        <element className="tab">
          <p>
          <a href='/events' style={{color: '#bdbdbd', textDecoration:'none'}}>Events</a>
          </p>
        </element>
        <element className="tab">
          <p>
            FAQ
          </p>
        </element>
      </div>
      <div className='orgRoulette'>
        <element className="tab">
          <p>
          <a href='/aboutUs' style={{color: '#bdbdbd', textDecoration:'none'}}>About Us</a>
              </p>
        </element>
        <element className="donateButton-container">
          {button && <Button buttonStyle='btn--round' buttonSize="btn--large" path='/donate'>Donate</Button>}
        </element>
      </div>
    </div>
  );
}

export default NavigationBar;