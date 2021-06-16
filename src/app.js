import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {JumbotronContainer} from "./containers/jumbotron"; // referenced the container here
import {FooterContainer} from './containers/footer';
import * as ROUTES from './constants/routes'

// the image wont return any children, we're only passing in props
export default function App() {
  return (
      <Router>
        <Route exact path = {ROUTES.HOME}>
          <JumbotronContainer />
          <FooterContainer />
        </Route>
      </Router>
  );
}

// EXACT path: ensures it doesn't find path in the order it's there like a switch-case stm without a break
