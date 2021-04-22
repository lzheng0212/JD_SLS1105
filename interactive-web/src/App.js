
import './App.css';
// import NavigationBar from './component/NavigationBar';
// import Footer from './component/Footer';
// import DonationHeader from './component/DonationHeader';
import DonationPage from './pages/DonationPage';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavigationBar from './component/NavigationBar';
import Home from './pages/Home';
import PostSection from './pages/postSection';
import React, { useState, useEffect } from "react";
import aboutUsPage from './pages/aboutUsPage';
import FullCalendarPage from './pages/FullCalendarPage';
<<<<<<< HEAD
import CreatePostPage from './pages/CreatePostPage';
//import React, { useState, useEffect } from "react";
//import projectFirestore from "./firebase/config";

function App() {
  // const [schools, setSchools] = useState([]);
  // const [loading, setLoading] = useState(false);

  // const ref = projectFirestore.collection("schools");

  // function getSchools() {
  //   setLoading(true);
  //   ref.onSnapshot((querySnapshot) => {
  //     const items = [];
  //     querySnapshot.forEach((doc) => {
  //       items.push(doc.data());
  //     });
  //     setSchools(items);
  //     setLoading(false);
  //   });
  // }

  // useEffect(() => {
  //   getSchools();
  // }, []);

  // if (loading) {
  //   return <h1>Loading.... </h1>;
  // }
=======
import SpecificPost from './pages/specifcPost';

function App() {
>>>>>>> 8d619fae88abe33d3841dd15e1d61ad9a426f4cd

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
          <Route path='/specificPost' exact component={SpecificPost}/>
        </Switch>
      </Router>
<<<<<<< HEAD
    {/* <div>
      <h1>Schools</h1>
      {schools.map((school) => (
        <div key={school.id}>
          <h2>{school.title}</h2>
          <p>{school.desc}</p>
        </div>
      ))}
    </div> */}
=======
>>>>>>> 8d619fae88abe33d3841dd15e1d61ad9a426f4cd
    </>
    
  );
}

export default App;
