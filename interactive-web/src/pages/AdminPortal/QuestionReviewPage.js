import '../../component/postComponents/Posts.css'

import { Col, Row } from 'antd'

import QuestionReviewList from '../../component/ListViews/QuestionReviewList'
import React from 'react'

// Resources: https://github.com/zenoamaro/react-quill
// License is also in the link above for react-quill

function QuestionReviewPage () {
  return (
    <Row justify="center">
      <Col xs={22} sm={20} md={16} lg={15} xl={15} xxl={15}>
        <QuestionReviewList/>
      </Col>
    </Row>

  )
}

export default QuestionReviewPage
