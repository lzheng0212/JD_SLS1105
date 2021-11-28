import './postStyle.css'
import '../component/postComponents/Posts.css'

import { Col, Layout, Row } from 'antd'

import { Content } from 'antd/lib/layout/layout'
import FooterComponent from '../component/FooterComponent'
import NavigationBar from '../component/NavigationBar'
import PostList from '../component/ListViews/PostList'
import React from 'react'

export default function PostSection () {
  return (
    <Layout>
      <NavigationBar/>
      <Content style={{ margin: '24px 24px 0px', paddingBottom: '0px', backgroundColor: 'white' }}>
          <Row justify="center">
            <Col xs={22} sm={20} md={16} lg={15} xl={15} xxl={15}>
              <PostList/>
            </Col>
          </Row>
      </Content>
      <FooterComponent/>
    </Layout>
  )
}
