import React from 'react';
import PostSection from './postFolder/postSection';
import NavigationBar from './component/NavigationBar';
import Footer from './component/Footer';

function App() {
  return (
    //can swap our my <PostSection/> for whatever page you want to test
    <div className = "main">
      <NavigationBar></NavigationBar>
      <PostSection/>
      <Footer/>
    </div>
  );
}

export default App;
