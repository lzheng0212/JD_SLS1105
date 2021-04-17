import './DonationHeader.css';
import heroIMG from "../assets/Hero.png";

function DonationHeader() {
    return (
        <div className = "DonationHeaderPic">
            <element className = "Pic">
                <img src = {heroIMG} alt = "Hero" width = "90%" height = "90%"></img>
            </element>
            <element className = "Header">
                <h1>
                    Donation
                </h1>
            </element>
        </div>
    );
}

export default DonationHeader;