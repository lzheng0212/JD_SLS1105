import '../App.css';
import WelcomeSection from '../component/WelcomeSection';
import Footer from '../component/Footer';
import WelcomeSub from '../component/WelcomeSub';
import Posts from '../component/Posts';

function Home() {
    return (
        <>
            <WelcomeSection />
            <WelcomeSub />
            <Posts />
            <Footer />
        </>
    );
}

export default Home;