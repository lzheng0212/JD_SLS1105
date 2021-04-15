import './DonationPage.css'
import '../component/DonationHeader'
import DonationHeader from '../component/DonationHeader';
import DonationGrid from '../component/DonationGrid';
import NavigationBar from '../component/NavigationBar';
import Footer from '../component/Footer';

function DonationPageComponent() {
    return (
        <div className = "Component">
            
            <DonationHeader></DonationHeader>
            <DonationGrid></DonationGrid>
            <NavigationBar></NavigationBar>
            <Footer></Footer>
        </div>
    );
}

export default DonationPageComponent;