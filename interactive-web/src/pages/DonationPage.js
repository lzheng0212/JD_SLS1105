import './DonationPage.css'
import '../component/DonationHeader'
import DonationHeader from '../component/DonationHeader';
import DonationGrid from '../component/DonationGrid';
import NavigationBar from '../component/NavigationBar';
import Footer from '../component/Footer';

function DonationPageComponent() {
    return (
        <>
        <div className = "donation">
            <NavigationBar></NavigationBar>
            <DonationHeader></DonationHeader>
            <DonationGrid></DonationGrid>
            
            
        </div>
        <Footer></Footer>
        </>
    );
}

export default DonationPageComponent;