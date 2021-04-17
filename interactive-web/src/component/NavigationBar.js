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
      <Logo></Logo>
      <div className="tabRoulette">
        <Link to='/post' className="tab">
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
          <Link to='/home'>About Us</Link>
              </p>
        </element>
        <element className="donateButton-container">
<<<<<<< HEAD
          {button && <Button buttonStyle='btn--round' buttonSize="btn--large">Donate</Button>}
=======
          {button && <Button buttonStyle='btn--outline' buttonSize="btn--large"><Link to='/donate'>Donate</Link></Button>}
>>>>>>> 8a55539aa787ebfe84731e47503c55e18d83c2be
        </element>
      </div>
    </div>
  );
}

export default NavigationBar;