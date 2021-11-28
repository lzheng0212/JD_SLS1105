import { Col, Row } from 'antd'

import PostItem from './PostItem'
/* eslint-disable react/prop-types */
import React from 'react'
import useFirestore from '../../hooks/useFirestore'

export default function PostCardList (props) {
  const { docs } = useFirestore('posts')
  return (
        <Row gutter={[16, 24]} justify='center'>
            {docs &&
                docs.slice(0, props.length).map((doc) => (
                <Col key={doc} id='col' xs={48 / props.length} sm={48 / props.length} md={48 / props.length} lg={48 / props.length} xl={24 / props.length} xxl={24 / props.length}>
                    <PostItem
                        src={doc.coverImage}
                        title={doc.title}
                        author={doc.author}
                        description={doc.content}
                        date={doc.createdAt}
                        label={doc.postCategory}
                        path="/specificPost"
                    />
                </Col>
                ))}
        </Row>
  )
}
