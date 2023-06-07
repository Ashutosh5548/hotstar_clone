import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Landingpage from './landingpage';
import Screening from './screening';
import Navbar from './navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
        <Route exact path="/">
          <Landingpage />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/home/movie">
          <Screening />
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
