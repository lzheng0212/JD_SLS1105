import '../App.css';
import WelcomeSection from '../component/WelcomeSection';
import FooterComponent from '../component/FooterComponent';
import WelcomeSub from '../component/WelcomeSub';
import Posts from '../component/Posts';
import WelcomeBottom from '../component/WelcomBottom';
import { Content } from 'antd/lib/layout/layout';
import { Layout } from 'antd';
import NavigationBar from '../component/NavigationBar';



function Home() {
    return (
        <Layout>
            <NavigationBar />
            <Content> 
                <div className='home'>
                    <WelcomeSection />
                    <WelcomeSub />
                    <Posts />
                    <WelcomeBottom />
                </div>
            </Content>
            <FooterComponent />
        </Layout>
    );
}

export default Home;