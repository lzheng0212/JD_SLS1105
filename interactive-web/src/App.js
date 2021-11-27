import './App.css'
import DonationPage from './pages/DonationPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import PostSection from './pages/postSection'
import MapPage from './pages/MapPage'
import React from 'react'
import aboutUsPage from './pages/aboutUsPage'
import FullCalendarPage from './pages/FullCalendarPage'
import SpecificPost from './pages/specifcPost'
import AdminLoginPage from './pages/AdminPortal/AdminLoginPage'
import AdminPortal from './pages/AdminPortal/AdminPortal'
import TimelinePage from './pages/TimelinePage'
import 'antd/dist/antd.css'
import SpecificEvent from './pages/SpecificEvent'
import FAQPage from './pages/FAQPage'
import ContactUsPage from './pages/ContactUsPage'
import StripeContainer from './component/Payment/StripeContainer'

function App () {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/post" exact component={PostSection} />
        <Route path="/donate" exact component={DonationPage} />
        <Route path="/donatePayment" exact component={StripeContainer} />
        <Route path="/aboutUs" exact component={aboutUsPage} />
        <Route path="/FAQPage" exact component={FAQPage} />
        <Route path="/adminLogin" exact component={AdminLoginPage} />
        <Route path="/adminportal" exact component={AdminPortal} />
        <Route path="/map" exact component={MapPage} />
        <Route path="/events" exact component={FullCalendarPage} />
        <Route path="/specificPost" exact component={SpecificPost} />
        <Route path="/timeline" exact component={TimelinePage} />
        <Route path="/specificEvent" exact component={SpecificEvent} />
        <Route path="/contactUs" exact component={ContactUsPage} />
      </Switch>
    </Router>
  )
}

export default App
