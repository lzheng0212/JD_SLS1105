
import './App.css';
// import NavigationBar from './component/NavigationBar';
// import Footer from './component/Footer';
// import DonationHeader from './component/DonationHeader';
import DonationPage from './pages/DonationPage';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavigationBar from './component/NavigationBar';
import Home from './pages/Home';
import PostSection from './pages/postSection';
import React from "react";
import aboutUsPage from './pages/aboutUsPage';
import FullCalendarPage from './pages/FullCalendarPage';
import CreatePostPage from './pages/CreatePostPage';
import SpecificPost from './pages/specifcPost';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminPortal from './pages/AdminPortal';

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
          <Route path='/adminLogin' exact component={AdminLoginPage}/>
          <Route path='/adminPortal' exact component={AdminPortal}/>
          <Route path='/events' exact component={FullCalendarPage}/>
          <Route path='/create' exact component={CreatePostPage}/>
          <Route path='/specificPost' exact component={SpecificPost}/>
        </Switch>
      </Router>
    </>
    
  );
}

export default App;
