import React from 'react';
import './CreateCalendarEvent.css';
import { Link } from "react-router-dom";

const subtitleS = {
    border: '10px solid rgba(0, 0, 0, 0)',
    marginBottom: '5px',
    color: 'black'
};

const lineS = {
    width: 690,
    borderTop: "2px solid black",
    marginLeft: 10,
    marginRight: 20,
    marginTop: 30,
    marginBottom: 30
}

function CreateCalendarEventContainer(props) {
    //Event container holds the jsx code for our event calendar formatting
    let eventContainer = []

    const createEventContainer = () => {
        const eventsForTheMonth = props.date.eventsArray

        //sorts the events in this month increasing order
        eventsForTheMonth.sort(function (a, b) {
            return a.startTime - b.endTime
        })

        //goes through the events in this month and groups events that are on the same day
        for (let i = 0; i < eventsForTheMonth.length; i++) {
            const event = eventsForTheMonth[i]
            console.log(event)
            const newDate = new Date(event.startTime)
            eventContainer.push(<div className="headingStyle">{newDate.toDateString()}</div>)
            addEventToContainer(event, newDate)
            while (findEventsOccuringOnTheSameDay(i, eventsForTheMonth, newDate.getDate())) {
                console.log(Number(eventsForTheMonth[i + 1].dayOfTheMonth) === Number(event.dayOfTheMonth))
                addEventToContainer(eventsForTheMonth[i + 1], newDate)
                i = i + 1
            }
        }
        return eventContainer
    }

    const findEventsOccuringOnTheSameDay = (index, eventsForTheMonth, currDay) => {
        if ((index + 1) < eventsForTheMonth.length) {
            const nextDate = new Date(eventsForTheMonth[index + 1].startTime)
            return nextDate.getDate() === currDay
        } else {
            return false
        }
    }

    //adds either the header jsx or event jsx to the eventConatiner 
    const addEventToContainer = (calendarEvent, date) => {
        eventContainer.push(
            <div className="singleCalendarEvent">
                <Link to={{ pathname: "/specificEvent", state: { calendarEvent, date } }}>
                    <h2 style={subtitleS}>{calendarEvent.title}</h2>
                    <p style={subtitleS}>{calendarEvent.description}</p>
                    <div style={{ marginLeft: 10, color: "black" }}> Category: {calendarEvent.categories.join(", ")}</div>
                    <div style={lineS}></div>
                </Link>
            </div>
        )
    }

    return (
        <div>
            {createEventContainer()}
        </div>
    );
}

export default CreateCalendarEventContainer;