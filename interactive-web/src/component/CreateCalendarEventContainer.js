import React from 'react';
import './CreateCalendarEvent.css';
import { Link } from "react-router-dom";

const subtitleS = {
    border: '10px solid rgba(0, 0, 0, 0)',
    marginBottom: '5px'
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
    console.log(props)
    let dd = new Date(Number(props.year), Number(props.date.month), 1)
    console.log(dd.toString())
    let eventContainer = []

    const createEventContainer = () => {
        console.log(props.date.daysArray)
        props.date.daysArray.forEach((day, index) => {
            // console.log(day)
            const newDate = new Date(Number(props.year), Number(props.date.month), Number(day.day))
            eventContainer.push(<div className="headingStyle">{newDate.toDateString()}</div>)
            day.eventsArray.forEach((calendarEvent, index) => {
                addEventToContainer(calendarEvent, newDate)
            })
        });
        return eventContainer
    }

    const addEventToContainer = (calendarEvent, date) => {
        eventContainer.push( 
            <div className="singleCalendarEvent">
                <Link to={{ pathname: "/specificEvent", state: {calendarEvent, date}} }>
                    <h2 style={subtitleS}>{calendarEvent.description}</h2>
                    <div style={{ marginLeft: 10, color: "black"}}> Category: {calendarEvent.categories.join(", ")}</div>
                    <div style={lineS}></div>
                </Link>
            </div>
        )
    }

    return (
        <div>
            {createEventContainer()}
        </div>
        //     {/* <div className="headingStyle"> {dd.toDateString()}</div>
        //     <h2 style={subtitleS}>This is an event place holder</h2>
        //     <div style={{ marginLeft: 10 }}> Category: Educational</div>
        //     <div style={lineS}></div>

        //     <h2 style={subtitleS}>This is an event place holder</h2>
        //     <div style={{ marginLeft: 10 }}> Category: Educational</div>
        //     <div style={lineS}></div>

        //     <h2 style={subtitleS}>This is an event place holder</h2>
        //     <div style={{ marginLeft: 10 }}> Category: Educational</div> */}
        // </div>
    );
}

export default CreateCalendarEventContainer;