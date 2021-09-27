import './DonationPage.css'
import '../component/DonationHeader'
import DonationHeader from '../component/DonationHeader';
import DonationGrid from '../component/DonationGrid';
import NavigationBar from '../component/NavigationBar';  // May not need this line since we already have it in App.js
import FooterComponent from '../component/FooterComponent';

function DonationPageComponent() {
    return (
        <>
        <div className = "donation">
            <NavigationBar></NavigationBar>
            <DonationHeader></DonationHeader>
            <DonationGrid></DonationGrid>
            
            
        </div>
        <FooterComponent/>
        </>
    );
}

export default DonationPageComponent;