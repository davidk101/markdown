import React from 'react';
import {Route, Redirect} from 'react-router-dom';

// redirects user from signin / signup page to browse page if signed in
export function IsUserRedirect({user, loggedInPath, children, ...rest}){

    return (
        <Route
            {...rest}
            render = {() =>{
                if (!user){
                    return children; // children will be the component page for Sign In
                }

                if (user){
                return (
                    <Redirect to = {{pathname: loggedInPath}} /> // if user is logged in, redirect them to loggedInPath
                )}

                return null;
            }
            }
        />
    )
}

// redirects user from browse page to sign in page if not signed in
export function ProtectedRoute({user, children, ...rest}){

    return (
        <Route
            {...rest}
            render = {({ location}) => {
                if (user){
                    return children; // the children will be the browse page
                }

                if (!user){

                    return (
                        <Redirect
                            to = {{
                                pathname: "signin",
                                state: {from: location}
                            }}
                        />
                    )
                }

                return null;
            }}
        />
    )
}
