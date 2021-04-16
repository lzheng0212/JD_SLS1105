
import './App.css';
// import NavigationBar from './component/NavigationBar';
// import Footer from './component/Footer';
// import DonationHeader from './component/DonationHeader';
import DonationPage from './pages/DonationPage';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavigationBar from './component/NavigationBar';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path='/' exact component={Home}/>
        </Switch>
      </Router>
    </>
    
  );
}

export default App;
