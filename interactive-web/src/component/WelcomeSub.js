import React, { useState, useEffect } from 'react';

import './WelcomeSub.css';
import { Button } from './Button';

function WelcomeSub() {

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
        <div className='welcomeSub-container'>
            <h1>Regenerative land use is the future</h1>
            <div className='buttons-container'>
                <but>{button && <Button buttonStyle='btn--round' buttonSize="btn--large">Subscribe</Button>}</but>
                <but>{button && <Button buttonStyle='btn--round' buttonSize="btn--large">Join Us</Button>}</but>
            </div>
            <div className='seperator'></div>
        </div>
    )
}

export default WelcomeSub
