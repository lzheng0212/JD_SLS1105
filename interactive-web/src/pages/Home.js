import './Home.css';
import FooterComponent from '../component/FooterComponent';
import WelcomeBottom from '../component/WelcomBottom';
import { Content } from 'antd/lib/layout/layout';
import { Layout, Row, Col, Divider, Typography } from 'antd';
import NavigationBar from '../component/NavigationBar';
import PostCardList from '../component/PostCardList';
import { BlockOutlined } from '@ant-design/icons';


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
                                <WelcomeBottom />
                            </div>
                            
                        </Col>
                    </Row>
                </Content>
            <FooterComponent />
        </Layout>
    );
}

export default Home;