// import logo from './logo.svg';
import React from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    //BEM convention
    <div className="app">
      <Router>
        <div className="app">
          <Switch>
            
            <Route path="/checkout">
              <Header/>
              <h1>Checkout Page</h1>
            </Route>

            <Route path="/">
              <Header/>
              <Home/>
            </Route>
            
          </Switch>

        </div>
      </Router>
    </div>
  );
}

export default App;
