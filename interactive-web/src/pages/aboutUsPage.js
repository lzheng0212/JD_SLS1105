// import React from 'react'
import './aboutUsPage.css';
import stuffImage from '../assets/stuffImage.png';
import FooterComponent from '../component/FooterComponent';
import { Layout, Row, Col, Avatar, Divider, Typography, Space } from 'antd';

import NavigationBar from '../component/NavigationBar';
import { Content } from 'antd/lib/layout/layout';

export default function PostSection() {
    const { Title, Paragraph, Text, Link } = Typography;

    return (
        <Layout >
            <NavigationBar />
            <Content style={{margin: '24px 24px 0px', paddingBottom: '0px', backgroundColor:'white'}}>
                <Row justify="center"> 
                    <Col xs={22} sm={20} md={16} lg={15} xl={15} xxl={15}>
                        <Row justify="center" align="middle"> 
                            <Col span={24}>
                                <h1 class="h1top" style={{paddingTop: '64px'}}>Our team</h1>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8} style={{textAlign: 'center'}}>
                                <Avatar src={"https://joeschmoe.io/api/v1/random"} size={200} style={{zIndex: '0'}}/>
                                <h2 style={{paddingTop: '16px'}}>Name/Description</h2>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8} style={{textAlign: 'center'}}>
                                <Avatar src={"https://joeschmoe.io/api/v1/random"} size={200} style={{zIndex: '0'}}/>
                                <h2 style={{paddingTop: '16px'}}>Name/Description</h2>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8} style={{textAlign: 'center'}}>
                                <Avatar src={"https://joeschmoe.io/api/v1/random"} size={200} style={{zIndex: '0'}}/>
                                <h2 style={{paddingTop: '16px'}}>Name/Description</h2>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8} style={{textAlign: 'center'}}>
                                <Avatar src={"https://joeschmoe.io/api/v1/random"} size={200} style={{zIndex: '0'}}/>
                                <h2 style={{paddingTop: '16px'}}>Name/Description</h2>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8} style={{textAlign: 'center'}}>
                                <Avatar src={"https://joeschmoe.io/api/v1/random"} size={200} style={{zIndex: '0'}}/>
                                <h2 style={{paddingTop: '16px'}}>Name/Description</h2>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8} style={{textAlign: 'center'}}>
                                <Avatar src={"https://joeschmoe.io/api/v1/random"} size={200} style={{zIndex: '0'}}/>
                                <h2 style={{paddingTop: '16px'}}>Name/Description</h2>
                            </Col>
                        </Row>
                        <Divider />
                        <Title level={2} style={{textAlign: "center"}}> About us </Title>
                        <p style={{fontSize: '20px', lineHeight: '40px', textAlign: 'justify'}}> 
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
                            into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                            passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
                            into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                            passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <Divider/>
                        <Title level={2} style={{textAlign: "center"}}> Our Mission </Title>
                        <p style={{fontSize: '20px', lineHeight: '40px', textAlign: 'justify'}}> 
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
                            into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                            passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
                            into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                            passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <Divider/>
                        <Title level={2} style={{textAlign: "center"}}> We value... </Title>
                        <p style={{fontSize: '20px', lineHeight: '40px', textAlign: 'justify'}}> 
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
                            into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                            passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
                            into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                            passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <Divider/>
                        <Title level={2} style={{textAlign: "center"}}> Contact Us </Title>
                        <Title level={4} style={{textAlign: "center"}}> Tel: 404-124-4567 </Title>
                        <Title level={4} style={{textAlign: "center"}}> Tel: 404-124-4567 </Title>
                        <Title level={4} style={{textAlign: "center"}}> Tel: 404-123-4567 </Title>
                    </Col>
                </Row>
            </Content>
            <FooterComponent />
        </Layout>
    );
}