import Menu from './Menu';
import Home from './Home';
import Details from './Details';
import BlueRidge from './BlueRidge';
import Products from './Products';
import Cart from './Cart';
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Menu></Menu>
      </div>
      <Switch>
        <Route path="/blueridge">
          <BlueRidge />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/blueridge">
          <BlueRidge />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
