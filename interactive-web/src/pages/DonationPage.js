import './DonationPage.css'
import '../component/DonationHeader'
import DonationHeader from '../component/DonationHeader';
import DonationGrid from '../component/DonationGrid';
import NavigationBar from '../component/NavigationBar';  // May not need this line since we already have it in App.js
import FooterComponent from '../component/FooterComponent';
import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';

function DonationPageComponent() {
    return (
        <Layout>
            <NavigationBar/>
            <Content>
                <div className = "donation">
                    <DonationHeader></DonationHeader>
                    <DonationGrid></DonationGrid>
                    
                </div>
            </Content>
            <FooterComponent/>
        </Layout>
    );
}

export default DonationPageComponent;