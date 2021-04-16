import '../App.css';
import WelcomeSection from '../component/WelcomeSection';
import Footer from '../component/Footer';
import WelcomeSub from '../component/WelcomeSub';
import Posts from '../component/Posts';

function Home() {
    return (
        <> 
            <div className='home'>
                <WelcomeSection />
                <WelcomeSub />
                <Posts />
                
            </div>
            <Footer />
        </>
    );
}

export default Home;