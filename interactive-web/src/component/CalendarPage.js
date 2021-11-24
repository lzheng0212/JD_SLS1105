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
import { Day, Month, SingleEvent } from '../objects/CalendarObjects';
import { isEmptyStatement } from '@babel/types';

const CalendarPage = () => {

    let [date, setDate] = useState(new Date())
    let [eventsMap, setEventsMap] = useState(new Map())

    let eventsArray = []

    const newDateCalenderEvent = (newDate, event) => {
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

    useEffect(() => {
        projectFirestore.collection("Events").get().then(
            snapshot => {
                snapshot.forEach(doc => {
                    const year = doc.id
                    const monthsArray = []
                    for (let [month, eventArray] of Object.entries(doc.data())) {
                        const newMonth = new Month(month)
                        console.log(eventArray)
                        for (let [indexOfEvent, event] of Object.entries(eventArray.events)) {
                            console.log(indexOfEvent)
                            console.log(event)
                            newMonth.addEvent(new SingleEvent(event.categories, event.content, event.location, event.title, event.startTime, event.endTime))
                            console.log(newMonth.eventsArray)
                        }
                        monthsArray.push(newMonth)
                    }
                    setEventsMap((prevMap) => new Map(prevMap).set(year, monthsArray))
                })
            }
        )
    }, [])

    return (
        <Layout>
            <NavigationBar />
            <Content>
                <div className="calendar">
                    <Calendar onClickMonth={newDateCalenderEvent} value={date} view="year" />
                </div>
                <div className='event-cont'>
                    <div className="header">
                        <h2>Community Event Calendar</h2>
                    </div>

                    <div className="shadowbox">
                        <div className="rectangle" />
                        <h5 style={{ marginBottom: '10px', marginTop: '10px', fontSize: '18px' }}>Showing events on {`${date.toLocaleDateString("en-US", { month: 'long' })} ${date.getFullYear()}`}</h5>
                        <div className='btn-container'>
                            <ind><Button onClick={prevMonth} buttonStyle='btn--primary' buttonSize="btn--small">Previous Month</Button></ind>
                            <ind><Button onClick={nextMonth} buttonStyle='btn--primary' buttonSize="btn--small">Next Month</Button></ind>
                        </div>
                    </div>
                    <div>
                        {/* this looks to see if there are any events for the selected month */}
                        {eventsMap.size !== 0 && eventsMap.has(date.getFullYear().toString()) && eventsMap.get(date.getFullYear().toString()).map((month) => {
                            // month number representation: 0 - 11.
                            if (Number(month.month) - 1 === date.getMonth()) {
                                eventsArray.push(<CreateCalendarEvent date={month} year={date.getFullYear().toString()} />)
                            }
                        })}
                        {/* if eventsArray is not empty then show the events else show a div block so the page isnt squished */}
                        {eventsArray.length > 0 && eventsArray}
                        {eventsArray.length === 0 &&
                            <div style={{ height: "500px" }} />
                        }
                    </div>
                </div>
            </Content>
            <FooterComponent />
        </Layout >
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
