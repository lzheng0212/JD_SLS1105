import '../App.css';
import WelcomeSection from '../component/WelcomeSection';
import FooterComponent from '../component/FooterComponent';
import WelcomeSub from '../component/WelcomeSub';
import Posts from '../component/Posts';
import WelcomeBottom from '../component/WelcomBottom';



function Home() {
    return (
        <> 
            <div className='home'>
                <WelcomeSection />
                <WelcomeSub />
                <Posts />
                <WelcomeBottom />
            </div>
            <FooterComponent />
        </>
    );
}

export default Home;