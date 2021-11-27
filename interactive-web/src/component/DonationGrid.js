import React, { useState, useEffect } from 'react';

import { Button } from './Button';
import './DonationGrid.css';
import { Link } from "react-router-dom";
import StripeContainer from './Payment/StripeContainer';

function DonationGrid() {
    const [button, setButton] = useState(true);
    const [pay, setPay] = useState(false);
    const [price, setPrice] = useState(0);
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

    const donate = (num) => {
        return (
            <div className='payment'>
                
            {pay && <StripeContainer price = {num} />}
            </div>
        )
    }
    return (
        <>
        <div className='Body'>
            <div className="Header1">
                <p>
                    Your donation will provide...
                </p>
            </div>

            <div className='Donationbutton-wrapper'>
                <btn1>{button && <Button buttonStyle='btn--donate' buttonSize="btn--medium"><p style={{ fontSize: '25px', lineHeight: '1.2' }}>$50 means that...</p></Button>}</btn1>
                <btn1>{button && <Button buttonStyle='btn--donate' buttonSize="btn--medium"><p style={{ fontSize: '25px', lineHeight: '1.2' }}>$150 means that...</p></Button>}</btn1>
                <btn1>{button && <Button buttonStyle='btn--donate' buttonSize="btn--medium"><p style={{ fontSize: '25px', lineHeight: '1.2' }}>$250 means that...</p></Button>}</btn1>
                <btn1>{button && <Button buttonStyle='btn--donate' buttonSize="btn--medium"><p style={{ fontSize: '25px', lineHeight: '1.2' }}>$500 means that...</p></Button>}</btn1>
                <btn1>{button && <Button buttonStyle='btn--donate' buttonSize="btn--medium"><p style={{ fontSize: '25px', lineHeight: '1.2' }}>$1000 means that...</p></Button>}</btn1>
            </div>

            <div className="Header1">
                <p>
                Select a Amount
                </p>
            </div>
           
            <div className='Donationbutton-wrapper'>
                <btn2>{button && <Button buttonStyle='btn--circle' buttonSize="btn--huge" onClick={() => setPrice(50)}>
                        $50
                </Button>}</btn2>
                <btn2>{button && <Button buttonStyle='btn--circle' buttonSize="btn--huge" onClick={() => setPrice(150)}>
                        $150
                </Button>}</btn2>
                <btn2>{button && <Button buttonStyle='btn--circle' buttonSize="btn--huge" onClick={() => setPrice(250)}>
                        $250
                </Button>}</btn2>
                <btn2>{button && <Button buttonStyle='btn--circle' buttonSize="btn--huge" onClick={() => setPrice(500)}>
                        $500
                </Button>}</btn2>
                <btn2>{button && <Button buttonStyle='btn--circle' buttonSize="btn--huge" onClick={() => setPrice(1000)}>
                        $1000
                </Button>}</btn2>

                
            </div>

            <div className='payment'>
                
            <StripeContainer price = {price} />
            </div>
            
        </div>
        
        
        </>
    );
}

export default DonationGrid;