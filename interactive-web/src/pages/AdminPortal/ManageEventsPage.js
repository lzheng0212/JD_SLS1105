import '../../component/postComponents/Posts.css'

import { Col, Row } from 'antd'

import EventList from '../../component/ListViews/EventList'
import React from 'react'

// Resources: https://github.com/zenoamaro/react-quill
// License is also in the link above for react-quill

function ManageEventsPage () {
  return (
    <Row justify="center">
      <Col xs={22} sm={20} md={16} lg={15} xl={15} xxl={15}>
        <EventList admin={true}/>
      </Col>
    </Row>

  )
}

export default ManageEventsPage
