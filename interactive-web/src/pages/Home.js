import '../App.css';
import WelcomeSection from '../component/WelcomeSection';
import Footer from '../component/Footer';
import WelcomeSub from '../component/WelcomeSub';
import Posts from '../component/Posts';
import WelcomeBottom from '../component/WelcomBottom';
import calendarIcon from '../assets/calendarIcon.png';


function Home() {
    return (
        <> 
            <div className='home'>
                <WelcomeSection />
                <WelcomeSub />
                <Posts />
                <WelcomeBottom />
                <img src={calendarIcon} alt='calendar'></img>
    
                
            </div>
            <Footer />
        </>
    );
}

export default Home;