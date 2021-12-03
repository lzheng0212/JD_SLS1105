import React, { useEffect, useState } from 'react'
// import Clock from '../component/Clock'
import Clock from 'react-clock'
import 'react-clock/dist/Clock.css'
import './dashboardPage.css'
import { Col, Row, Typography } from 'antd'
function dashboardPage () {
  const [value, setValue] = useState(new Date())
  const { Title } = Typography
  useEffect(() => {
    const interval = setInterval(
      () => setValue(new Date()),
      1000
    )

    return () => {
      clearInterval(interval)
    }
  }, [])
  return (
    <Row style={{ minHeight: '100%' }} justify="space-around" align="middle">
        <Col span={24} align='middle'>
        {/* <div className="App">
        <div className="clock">
        <label id = 'welcomeText'>
            Welcome to the admin portal!
        </label>

          <Clock id = 'clock_position' />
        </div>
        </div> */}
          <Title level={2}> Welcome to the Admin Portal </Title>
          <Clock value={value} size={250} secondHandWidth={2} minuteMarksWidth={2} minuteHandWidth={3} hourMarksLength={12} hourMarksWidth={4} hourHandOppositeLength={20} hourHandLength={80} minuteHandLength={80} minuteHandOppositeLength={20}/>
        </Col>
      </Row>
  )
}
export default dashboardPage
