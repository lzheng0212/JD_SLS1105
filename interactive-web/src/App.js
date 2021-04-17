//import './App.css';
// import NavigationBar from './component/NavigationBar';
// import Footer from './component/Footer';
// import DonationHeader from './component/DonationHeader';
import DonationPage from './pages/DonationPage';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavigationBar from './component/NavigationBar';
import Home from './pages/Home';
import PostSection from './postFolder/postSection';
import aboutUsPage from './aboutUsPage/aboutUsPage';

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Switch>
        <Route path='/' exact component={Home}/>
          <Route path='/home' exact component={Home}/>
          <Route path='/post' exact component={PostSection}/>
          <Route path='/donate' exact component={DonationPage}/>
          <Route path='/aboutUs' exact component={aboutUsPage}/>
        </Switch>
      </Router>
    </>
    
  );
}

export default App;
