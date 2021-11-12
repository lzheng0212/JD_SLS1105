import './Home.css';
import FooterComponent from '../component/FooterComponent';
import WelcomeBottom from '../component/WelcomBottom';
import { Content } from 'antd/lib/layout/layout';
import { Layout, Row, Col, Divider, Typography } from 'antd';
import NavigationBar from '../component/NavigationBar';
import PostCardList from '../component/PostCardList';
import { BlockOutlined } from '@ant-design/icons';
import EventList from '../component/EventList';
import InteractiveMap from '../component/InteractiveMap';

function Home() {
    const { Title, Paragraph, Text, Link } = Typography;
    return (
        <Layout style={{ backgroundColor:'white'}}>
            <NavigationBar />
                <Content style={{paddingBottom: '0px', backgroundColor:'white'}}>
                <div className='welcome-container'>
                    <Row justify="center" align='middle'> 
                            <Col xs={22} sm={20} md={16} lg={15} xl={15} xxl={15}>
                            <h1 className="welcome-header">
                                <BlockOutlined style={{color: 'white', lineHeight: '72px', textAlign: 'center'}}/> 
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
                                    <Title level={2}> Features </Title>
                                </div>
                                <p style={{fontSize: '20px', lineHeight: '40px', textAlign: 'justify'}}> 
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
                                    into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                                    passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
                                    into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                                    passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                            <div className="home-container">
                                <div className="home-title">
                                    <Title level={2}> Recent Articles </Title>
                                </div>
                                <PostCardList length={4} />
                            </div>
                            <div className="home-container">
                                <div className="home-title">
                                    <Title level={2}> Activities </Title>
                                </div>
                                <EventList atHome={'True'} length={4}/>
                                {/* <WelcomeBottom /> */}
                            </div>
                            <div className="home-container">
                                <div className="home-title">
                                    <Title level={2}> Our Progress </Title>
                                </div>
                                <InteractiveMap/>
                            </div>
                            
                        </Col>
                    </Row>
                </Content>
            <FooterComponent />
        </Layout>
    );
}

export default Home;