import '../App.css';
import WelcomeSection from '../component/WelcomeSection';
import Footer from '../component/Footer';
import WelcomeSub from '../component/WelcomeSub';

function Home() {
    return (
        <>
            <WelcomeSection />
            <WelcomeSub />
            <Footer />
        </>
    );
}

export default Home;