
import './App.css';
import FirstPage from './Components/FirstPage';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import { Route, Switch } from 'react-router';
import Works from './Components/Works';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path='/' exact component={FirstPage}/>
        <Route path='/works' component={Works} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
