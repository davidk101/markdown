import React from 'react'
import {JumbotronContainer} from "./containers/jumbotron"; // referenced the container here
import {FooterContainer} from './containers/footer';
// the image wont return any children, we're only passing in props
export default function App() {
  return (<>
    <JumbotronContainer />
    <FooterContainer />
    < />
  );
}
