import React from 'react'
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import * as ROUTES from './constants/routes'
import {Home, Browse, Signin, Signup} from './pages';
import {IsUserRedirect, ProtectedRoute} from './helpers/routes';

// the image wont return any children, we're only passing in props
export default function App() {

    const user = null;
    return (

        <Router>
            <Switch>
                <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
                    <Signin />
                </IsUserRedirect>
                <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
                    <Signup />
                </IsUserRedirect>
                <ProtectedRoute user={user} path={ROUTES.BROWSE}>
                    <Browse />
                </ProtectedRoute>
                <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
                    <Home />
                </IsUserRedirect>
            </Switch>
        </Router>
    );
}

// EXACT path: ensures it doesn't look for path in the order it's there like a switch-case stm without a break
