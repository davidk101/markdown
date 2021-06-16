import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as ROUTES from './constants/routes'
import {Home, Browse, Signin, Signup} from './pages';

// the image wont return any children, we're only passing in props
export default function App() {
  return (
      <Router>
        <Route exact path = "/browse">
          <Browse/>
        </Route>
        <Route exact path = "/signin">
          <Signin/>
        </Route>
        <Route exact path = "/signup">
          <Signup/>
        </Route>
        <Route exact path = "/home">
          <Home/>
        </Route>
      </Router>
  );
}

// EXACT path: ensures it doesn't look for path in the order it's there like a switch-case stm without a break
