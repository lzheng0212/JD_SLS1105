import "./App.css";
import DonationPage from "./pages/DonationPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostSection from "./pages/postSection";
import MapPage from "./pages/MapPage";
import React from "react";
import aboutUsPage from "./pages/aboutUsPage";
import FullCalendarPage from "./pages/FullCalendarPage";
import CreatePostPage from "./pages/CreatePostPage";
import SpecificPost from "./pages/specifcPost";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminPortal from "./pages/AdminPortal";
import DeletePostPage from "./pages/DeletePostPage";
import ManageCategoriesPage from "./pages/ManageCategoriesPage";
import { Layout } from 'antd';
import "antd/dist/antd.css";
import FooterComponent from "./component/FooterComponent";


function App() {
  return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/post" exact component={PostSection} />
          <Route path="/map" exact component={MapPage} />
          <Route path="/donate" exact component={DonationPage} />
          <Route path="/aboutUs" exact component={aboutUsPage} />
          <Route path="/adminLogin" exact component={AdminLoginPage} />
          <Route path="/adminportal" exact component={AdminPortal} />
          <Route path="/events" exact component={FullCalendarPage} />
          {/* <Route path="/manage" exact component={DeletePostPage} />
          <Route path="/create" exact component={CreatePostPage} />
          <Route path="/specificPost" exact component={SpecificPost} />
          <Route path="/manage/categories" exact component={ManageCategoriesPage} /> */}
        </Switch>
      </Router>
  );
}

export default App;
