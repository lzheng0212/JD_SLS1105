import React, { Component } from 'react';
import Clock from '../component/Clock';
import './dashboardPage.css';
function dashboardPage() {
    return (
        <div className="App">
        <div className="clock">
        <label id = 'welcomeText'>
            Welcome to the admin portal!
        </label>

          <Clock id = 'clock_position' />
        </div>
      </div>
    );
}
export default dashboardPage;
  
