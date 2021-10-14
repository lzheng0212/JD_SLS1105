import React from 'react';

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

function CreateCalendarEventContainer(props) {

    console.log(props)

    return (
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
    );
}

export default CreateCalendarEventContainer;