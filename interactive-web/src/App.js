import "./App.css";
import DonationPage from "./pages/DonationPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostSection from "./pages/postSection";
import MapPage from "./pages/MapPage";
import React from "react";
import aboutUsPage from "./pages/aboutUsPage";
import FullCalendarPage from "./pages/FullCalendarPage";
import SpecificPost from "./pages/specifcPost";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminPortal from "./pages/AdminPortal";
import TimelinePage from "./pages/TimelinePage";
import "antd/dist/antd.css";
import SpecificEvent from "./pages/SpecificEvent";
import FAQPage from "./pages/FAQPage";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/post" exact component={PostSection} />
        <Route path="/donate" exact component={DonationPage} />
        <Route path="/aboutUs" exact component={aboutUsPage} />
        <Route path="/FAQPage" exact component={FAQPage} />
        <Route path="/adminLogin" exact component={AdminLoginPage} />
        <Route path="/adminportal" exact component={AdminPortal} />
        <Route path="/map" exact component={MapPage} />
        <Route path="/events" exact component={FullCalendarPage} />
        <Route path="/specificPost" exact component={SpecificPost} />
        <Route path="/timeline" exact component={TimelinePage} />
        <Route path="/specificEvent" exact component={SpecificEvent} />
      </Switch>
    </Router>
  );
}

export default App;
