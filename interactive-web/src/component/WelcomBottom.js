import React, { useState, useEffect } from 'react';
import './WelcomeBottom.css';
import EventItem from './eventItem';
import { Button } from './Button';



function WelcomBottom() {

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
            <section class="container">
                <section id="col-1">
                    <EventItem
                        title='Final Presentation'
                        date='April 18th, 2021'
                        description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
                        category='Final'
                        path='/'>
                    </EventItem>
                    <EventItem
                        title='Code Demo'
                        date='April 18th, 2021'
                        description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
                        category='Final'
                        path='/'>
                    </EventItem>
                    <EventItem
                        title='Farm Boba Retreat'
                        date='May 16th'
                        description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
                        category='Social'
                        path='/'>
                    </EventItem>

                    <section className='section_button'>
                        {button && <Button buttonStyle='btn--black' buttonSize="btn--large">More Events</Button>}
                    </section>
                </section>
                <section id="col-2">
                    <h1>This is another half of a page</h1>
                </section>
            </section>
        </>
    )
}

export default WelcomBottom
