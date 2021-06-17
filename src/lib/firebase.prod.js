import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import {seedDatabase} from '../seed';
// seed DB

// config here -> from firebase SDK
const config = {
    apiKey: "AIzaSyCSapjuyRkP6uzELA0JAgdD_DXOM-510n8",
    authDomain: "markdown-87d4f.firebaseapp.com",
    projectId: "markdown-87d4f",
    storageBucket: "markdown-87d4f.appspot.com",
    messagingSenderId: "948863154460",
    appId: "1:948863154460:web:cb12c2aa3b58738f8a22d9"
};

const firebase  = Firebase.initializeApp(config);

// seedDatabase(firebase); // populates/seeds DB -> be very cautious to avoid duplicate data

export {firebase}
