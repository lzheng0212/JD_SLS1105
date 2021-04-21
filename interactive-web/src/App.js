
import './App.css';
// import NavigationBar from './component/NavigationBar';
// import Footer from './component/Footer';
// import DonationHeader from './component/DonationHeader';
import DonationPage from './pages/DonationPage';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavigationBar from './component/NavigationBar';
import Home from './pages/Home';
import PostSection from './pages/postSection';
import aboutUsPage from './pages/aboutUsPage';
import FullCalendarPage from './pages/FullCalendarPage';
import CreatePostPage from './pages/CreatePostPage';
import React, { useState, useEffect } from "react";
import firebase from "./firebase";

function App() {
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection("schools");

  function getSchools() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setSchools(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getSchools();
  }, []);

  if (loading) {
    return <h1>Loading.... </h1>;
  }

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
          <Route path='/events' exact component={FullCalendarPage}/>
          <Route path='/create' exact component={CreatePostPage}/>
        </Switch>
      </Router>
    <div>
      <h1>Schools</h1>
      {schools.map((school) => (
        <div key={school.id}>
          <h2>{school.title}</h2>
          <p>{school.desc}</p>
        </div>
      ))}
    </div>
    </>
    
  );
}

export default App;
