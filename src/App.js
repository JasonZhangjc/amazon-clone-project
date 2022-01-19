import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout"
import Login from "./Login";
import { auth } from "./firebase"
import { useStateValue } from "./StateProvider"
import Payment from './Payment'
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"


const promise = loadStripe('pk_test_51KJhaBGUBm9Jk2szHnRsHfYgBBIZVa2Pmi5DTsQVcxSm8xrJgLd1x5HSbMMnRtGCCG5Itv9EtEuUPpqRfzcvMnw000H8SOVsUO')
// Replace this one with your own Publishable key

function App() {
  const [{}, dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

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
  }, []) // will only run once when the app component loads

  return (
    // BEM

    <Router>
      <div className="app">

        <Switch>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            {/* <h1>I am the payment route</h1> */}
          </Route>

          {/* default home page */}
          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
