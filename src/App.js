// import logo from './logo.svg';
import React, {useEffect} from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import {auth} from "./firebase"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useStateValue } from "./StateProvider";


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // wil only run once when page loads
    auth.onAuthStateChanged(authUser => {
      // console.log("")
      if (authUser) {
        // the user just logged in/ the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    //BEM convention
      <Router>
        <div className="app">
          

          <Switch>
            <Route path="/login">
              <Login />
            </Route>

            <Route path="/checkout">
            <Header/>
              <Checkout />
            </Route>

            <Route path="/">
            <Header/>
              <Home/>
            </Route>
            
          </Switch>

        </div>
      </Router>
  );
}

export default App;
