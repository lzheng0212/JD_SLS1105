import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { Button } from './Button';
import './CalendarPage.css';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const CalendarPage = () => {

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
        <>
            <div className="calendar">
                <Calendar />
            </div>
            <div className='event-cont'>
                <div className="header">
                    <h2>Community Event Calendar</h2>
                </div>

                <div className="shadowbox">
                    <div className="rectangle" />
                    <h5 style={{ marginBottom: '10px', marginTop: '10px', fontSize: '18px' }}>Showing events in March 2021, from today onwards</h5>
                    <div className='btn-container'>
                        <ind>{button && <Button buttonStyle='btn--primary' buttonSize="btn--small"><Link to='/' style={{ color: 'white', textDecoration: 'none' }}>Previous Month</Link></Button>}</ind>
                        <ind>{button && <Button buttonStyle='btn--primary' buttonSize="btn--small"><Link to='/' style={{ color: 'white', textDecoration: 'none' }}>Next Month</Link></Button>}</ind>
                    </div>

                </div>

                <div>
                    <div className="headingStyle"> Friday, March 19, 2021</div>
                    <h2 style={subtitleS}>This is an event place holder</h2>
                    <div style={{ marginLeft: 10 }}> Category: Educational</div>
                    <div style={lineS}></div>

                    <h2 style={subtitleS}>This is an event place holder</h2>
                    <div style={{ marginLeft: 10 }}> Category: Educational</div>
                    <div style={lineS}></div>

                    <h2 style={subtitleS}>This is an event place holder</h2>
                    <div style={{ marginLeft: 10 }}> Category: Educational</div>
                </div>

                <div>
                    <div className="headingStyle"> Monday, March 22, 2021</div>
                    <h2 style={subtitleS}>This is an event place holder</h2>
                    <div style={{ marginLeft: 10 }}> Category: Educational</div>

                </div>

                <div>
                    <div className="headingStyle"> Wednesday, March 24, 2021</div>
                    <h2 style={subtitleS}>This is an event place holder</h2>
                    <div style={{ marginLeft: 10 }}> Category: Educational</div>
                    <div style={lineS}></div>

                    <h2 style={subtitleS}>This is an event place holder</h2>
                    <div style={{ marginLeft: 10 }}> Category: Educational</div>

                </div>

                <div>
                    <div className="headingStyle">Friday, March 26, 2021</div>
                    <h2 style={subtitleS}>This is an event place holder</h2>
                    <div style={{ marginLeft: 10 }}> Category: Educational</div>
                    <div style={lineS}></div>

                    <h2 style={subtitleS}>This is an event place holder</h2>
                    <div style={{ marginLeft: 10 }}> Category: Educational</div>
                    <div style={lineS}></div>

                    <h2 style={subtitleS}>This is an event place holder</h2>
                    <div style={{ marginLeft: 10, marginBottom: 50 }}> Category: Educational</div>
                </div>

                <div className="shadowbox">
                    <div className="rectangle" />
                    <div className='btn-container'>
                    <ind>{button && <Button buttonStyle='btn--primary' buttonSize="btn--small"><Link to='/' style={{ color: 'white', textDecoration: 'none' }}>Previous Month</Link></Button>}</ind>
                        <ind>{button && <Button buttonStyle='btn--primary' buttonSize="btn--small"><Link to='/' style={{ color: 'white', textDecoration: 'none' }}>Next Month</Link></Button>}</ind>
                    </div>
                </div>
            </div>

        </>
    )
}

const subtitleS = {
    border: '10px solid rgba(0, 0, 0, 0)',
    marginBottom: '5px'
};

const lineS = {
    width: 690,
    borderTop: "2px solid ",
    marginLeft: 10,
    marginRight: 20,
    marginTop: 30,
    marginBottom: 30
}

export default CalendarPage
