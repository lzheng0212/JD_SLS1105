import React, { useState, useEffect } from 'react'
import './WelcomeBottom.css'
import EventItem from './eventItem'
import { Button } from './Button'
import InteractiveMap from './InteractiveMap'

function WelcomBottom () {
  const [button, setButton] = useState(true)
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton()
  }, [])

  return (
        <>
            <section className="bottom-container">
                <div id="col-1">
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
                        {button && <Button buttonStyle='btn--black' buttonSize="btn--large" path='/events'>More Events</Button>}
                    </section>
                </div>
                <div id="col-2">
                    <h1 style={{ paddingBottom: '30px' }}>Hovering Your Mouse over the Map!</h1>
                    <InteractiveMap></InteractiveMap>
                    <section className='section_button'>
                        {button && <Button buttonStyle='btn--black' buttonSize="btn--large">Interactive Map</Button>}
                    </section>
                </div>
            </section>
        </>
  )
}

export default WelcomBottom
