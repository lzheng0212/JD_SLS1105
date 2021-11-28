import './Home.css'

import { Col, Layout, Row, Typography } from 'antd'

import { BlockOutlined } from '@ant-design/icons'
import { Content } from 'antd/lib/layout/layout'
import EventList from '../component/ListViews/EventList'
import FooterComponent from '../component/FooterComponent'
import MapList from '../component/ListViews/MapList'
import NavigationBar from '../component/NavigationBar'
import PostCardList from '../component/postComponents/PostCardList'
import React from 'react'

function Home () {
  const { Title } = Typography
  return (
        <Layout style={{ backgroundColor: 'white' }}>
            <NavigationBar />
                <Content style={{ paddingBottom: '0px', backgroundColor: 'white' }}>
                <div className='welcome-container'>
                    <Row justify="center" align='middle'>
                            <Col xs={22} sm={20} md={16} lg={15} xl={15} xxl={15}>
                            <h1 className="welcome-header">
                                <BlockOutlined style={{ color: 'white', lineHeight: '72px', textAlign: 'center' }}/>
                                Institute of Education and Regenerative Communities
                            </h1>
                            </Col>
                    </Row>
                </div>
                    <Row justify="center">
                        <Col xs={22} sm={20} md={16} lg={15} xl={15} xxl={15}>

                            {/* <WelcomeSub /> */}
                            <div className="home-container">
                                <div className="home-title">
                                    <Title level={2}> Features
                                        <div className="home-extra">
                                            <a href="./aboutUS" style={{ alignContent: 'end' }}>Our Story</a>
                                        </div>
                                    </Title>
                                </div>
                                <p style={{ fontSize: '20px', lineHeight: '40px', textAlign: 'justify' }}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                                    into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                    passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                                    into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                    passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                            <div className="home-container">
                                <div className="home-title">
                                    <Title level={2}> Recent Articles
                                        <div className="home-extra">
                                            <a href="./post" style={{ alignContent: 'end' }}>Read More</a>
                                        </div>
                                    </Title>
                                </div>
                                <PostCardList length={4} />
                            </div>
                            <div className="home-container">
                                <div className="home-title">
                                    <Title level={2}> Activities
                                        <div className="home-extra">
                                            <a href="./events" style={{ alignContent: 'end' }}>Read More</a>
                                        </div>
                                    </Title>
                                </div>
                                <EventList atHome={'True'} length={4}/>
                                {/* <WelcomeBottom /> */}
                            </div>
                            <div className="home-container">
                                <div className="home-title">
                                    <Title level={2}> Our Progress
                                        <div className="home-extra">
                                            <a href="./map" style={{ alignContent: 'end' }}>Full Map</a>
                                        </div>
                                    </Title>
                                </div>
                                <MapList atHome={'True'} length={4}/>
                            </div>

                        </Col>
                    </Row>
                </Content>
            <FooterComponent />
        </Layout>
  )
}

export default Home
