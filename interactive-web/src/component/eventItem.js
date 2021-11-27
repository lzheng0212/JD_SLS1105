import React from 'react'
import './eventItem.css'
import { Link } from 'react-router-dom'

function eventItem (props) {
  return (
        <>
            <Link className="event-container" to={props.path} style={{ textDecoration: 'none' }}>
                <div className='img-container'></div>

                <div className='event_info'>
                    <p className='event_title'>{props.title}</p>
                    <p className='event_date'>{props.date}</p>
                    <p className='event_des'>{props.description}</p>

                    <p className='event_cat'>Category: {props.category}</p>
                </div>

            </Link>

        </>
  )
}

export default eventItem
