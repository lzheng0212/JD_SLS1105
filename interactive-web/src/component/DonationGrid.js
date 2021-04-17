import React, { useState, useEffect } from 'react';

import { Button } from './Button';
import './DonationGrid.css';

function DonationGrid() {
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
        <div className='Body'>
            <div className="Header1">
                <p>
                    Your donation will provide...
                </p>
            </div>

            <div className='button-wrapper'>
                <btn1>{button && <Button buttonStyle='btn--donate' buttonSize="btn--large"><p style={{ fontSize: '35px' }}>$50 means that...</p></Button>}</btn1>
                <btn1>{button && <Button buttonStyle='btn--donate' buttonSize="btn--large"><p style={{ fontSize: '33px' }}>$150 means that...</p></Button>}</btn1>
                <btn1>{button && <Button buttonStyle='btn--donate' buttonSize="btn--large"><p style={{ fontSize: '33px' }}>$250 means that...</p></Button>}</btn1>
                <btn1>{button && <Button buttonStyle='btn--donate' buttonSize="btn--large"><p style={{ fontSize: '33px' }}>$500 means that...</p></Button>}</btn1>
                <btn1>{button && <Button buttonStyle='btn--donate' buttonSize="btn--large"><p style={{ fontSize: '33px' }}>$1000 means that...</p></Button>}</btn1>
            </div>

            <div className="Header1">
                <p>
                Select a Amount
                </p>
            </div>
           
            <div className='button-wrapper'>
                <btn2>{button && <Button buttonStyle='btn--circle' buttonSize="btn--huge"><p >$50</p></Button>}</btn2>
                <btn2>{button && <Button buttonStyle='btn--circle' buttonSize="btn--huge"><p >$150</p></Button>}</btn2>
                <btn2>{button && <Button buttonStyle='btn--circle' buttonSize="btn--huge"><p >$250</p></Button>}</btn2>
                <btn2>{button && <Button buttonStyle='btn--circle' buttonSize="btn--huge"><p >$500</p></Button>}</btn2>
                <btn2>{button && <Button buttonStyle='btn--circle' buttonSize="btn--huge"><p >$1000</p></Button>}</btn2>
                
            </div>

            

            <div className='payment'>
            {button && <Button buttonStyle='btn--primary' buttonSize="btn--large"><p style={{ fontSize: '30px' }}>Third Party Payment Link</p></Button>}
            </div>
        </div>
    );
}

export default DonationGrid;