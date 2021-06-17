import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as ROUTES from './constants/routes'
import {Home, Browse, Signin, Signup} from './pages';

// the image wont return any children, we're only passing in props
export default function App() {
  return (
      <Router>
        <Route exact path = {ROUTES.BROWSE}>
          <Browse/>
        </Route>
        <Route exact path = {ROUTES.SIGN_IN}>
          <Signin/>
        </Route>
        <Route exact path = {ROUTES.SIGN_UP}>
          <Signup/>
        </Route>
        <Route exact path = {ROUTES.HOME}>
          <Home/>
        </Route>
      </Router>
  );
}

// EXACT path: ensures it doesn't look for path in the order it's there like a switch-case stm without a break
