import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { GlobalStyles } from './global-styles'; // add fragment since jsx elements adjacent must be enclosed
import 'normalize.css'

ReactDOM.render(
    <>
    <GlobalStyles />
    <App />
    < />,
    document.getElementById('root'));

