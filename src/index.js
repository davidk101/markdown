import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { GlobalStyles } from './global-styles'; // add fragment since jsx elements adjacent must be enclosed
import 'normalize.css';
import {firebase} from './lib/firebase.prod';
import {FirebaseContext} from './context/firebase';

ReactDOM.render(
    <>
        <FirebaseContext.Provider value = {{firebase}}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    < />,
    document.getElementById('root'));

