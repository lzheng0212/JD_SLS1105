import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { Button } from './Button';
import './CalendarPage.css';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { Content } from 'antd/lib/layout/layout';
import { Layout } from 'antd';
import NavigationBar from './NavigationBar';
import FooterComponent from './FooterComponent';
import CreateCalendarEvent from './CreateCalendarEventContainer';
import { projectFirestore } from '../firebase/config';

const CalendarPage = () => {

    let [date, setDate] = useState(new Date())

    const newDateCalenderEvent = (newDate) => {
        setDate(newDate)
    }

    const nextMonth = () => {
        const newDate = new Date(date.getFullYear(), date.getMonth() + 1)
        setDate(newDate)
    }

    const prevMonth = () => {
        const newDate = new Date(date.getFullYear(), date.getMonth() - 1)
        setDate(newDate)
    }

    const query = {
        "december": {
            "1": {
                "events": {
                    "random": "test",
                    "eventDescription": "this is an event description placeHolder",
                    "eventTitle": "Event Title",
                    "eventCategories": ["string of categories", "cate2"],
                    "eventTime": "time",
                    "eventLocation": "location"
                }
            }
        }
    }

    //query firebase with the events
    const addEventToFirebase = () => {
        projectFirestore.collection("Events").doc("1999").set({
            "december": {
                "1": {
                    "events": {
                        "random": "test",
                        "eventDescription": "this is an event description placeHolder",
                        "eventTitle": "Event Title",
                        "eventCategories": ["string of categories", "cate2"],
                        "eventTime": "time",
                        "eventLocation": "location"
                    }
                }
            }
        })
    }

    const psudoEventQuery = {
        "years": {
            "2020": {
                "december": {
                    "1": {
                        "events": [
                            {
                                "random": "test",
                                "eventDescription": "this is an event description placeHolder",
                                "eventTitle": "Event Title",
                                "eventCategories": ["string of categories", "cate2"],
                                "eventTime": "time",
                                "eventLocation": "location"
                            },
                            {
                                "random": "test",
                                "eventDescription": "this is an event description placeHolder",
                                "eventTitle": "Event Title",
                                "eventCategories": ["string of categories", "cate2"],
                                "eventTime": "time",
                                "eventLocation": "location"
                            },
                        ]
                    }
                }
            },
            "2021": {
                "december": {
                    "1": {
                        "events": {
                            "random": "test",
                            "eventDescription": "this is an event description placeHolder",
                            "eventTitle": "Event Title",
                            "eventCategories": ["string of categories", "cate2"]
                        }
                    }
                }
            }
        }
    }

    const { years: { 2020: { december: { 1: { events } } } } } = psudoEventQuery;
    console.log(events.length)

    console.log(psudoEventQuery)

    return (
        <Layout>
            <NavigationBar />
            <Content>
                <div className="calendar">
                    <Calendar onChange={newDateCalenderEvent} value={date} />
                </div>
                <div className='event-cont'>
                    <div className="header">
                        <h2>Community Event Calendar</h2>
                    </div>

                    <div className="shadowbox">
                        <div className="rectangle" />
                        <h5 style={{ marginBottom: '10px', marginTop: '10px', fontSize: '18px' }}>Showing events from {date.toDateString()}, onwards.</h5>
                        <div className='btn-container'>
                            <ind><Button onClick={prevMonth} buttonStyle='btn--primary' buttonSize="btn--small">Previous Month</Button></ind>
                            <ind><Button onClick={nextMonth} buttonStyle='btn--primary' buttonSize="btn--small">Next Month</Button></ind>
                        </div>
                    </div>

                    <CreateCalendarEvent date="randomDate" description="hello random description" categories="educational" />

                    {/* <div>
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
                    </div> */}
                </div>

            </Content>
            <FooterComponent />
        </Layout>
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
