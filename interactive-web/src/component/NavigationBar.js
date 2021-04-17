import React, { useState, useEffect } from 'react';

import './NavigationBar.css';
import './Logo.css';
import Logo from './Logo';
import { Link } from 'react-router-dom';
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
      <Link to='/home' style={{color: '#bdbdbd', textDecoration:'none'}}>
      <Logo></Logo>
        </Link>
      
      <div className="tabRoulette">
        <Link to='/post' style={{color: '#bdbdbd', textDecoration:'none'}} className="tab">
          Posts
        </Link>
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
            Events
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
          <Link to='/aboutUs' style={{color: '#bdbdbd', textDecoration:'none'}}>About Us</Link>
              </p>
        </element>
        <element className="donateButton-container">
          {button && <Button buttonStyle='btn--round' buttonSize="btn--large"><Link to='/donate' style={{color: 'white', textDecoration:'none'}}>Donate</Link></Button>}
        </element>
      </div>
    </div>
  );
}

export default NavigationBar;