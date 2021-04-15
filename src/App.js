
import './App.css';
import FirstPage from './Components/FirstPage';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Aboot from './Components/Aboot';
import { Route, Switch } from 'react-router';
import Works from './Components/Works';
import ScrollToTop from './Components/UtilComponents/ScrollToTop';

function App() {

  return (
    <div className="App">
      <Nav />
      <ScrollToTop />
      <Switch>
        <Route path='/' exact component={FirstPage}/>
        <Route path='/works' component={Works} />
        <Route path="/aboot" component={Aboot} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
