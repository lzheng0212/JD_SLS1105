import React from 'react'
import './postStyle.css'
import '../component/Posts.css'

import { Row, Col } from 'antd'

import EventList from '../component/EventList'

// Resources: https://github.com/zenoamaro/react-quill
// License is also in the link above for react-quill

function ManageMapElePage () {
  return (
    <Row justify="center">
      <Col xs={22} sm={20} md={16} lg={15} xl={15} xxl={15}>
        <EventList admin={true}/>
      </Col>
    </Row>

  )
}

export default ManageMapElePage
