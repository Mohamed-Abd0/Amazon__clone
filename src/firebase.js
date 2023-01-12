import * as  firebase from "firebase/app";
import {getAuth} from  "firebase/auth";
;

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDHR45fYjCqvAWa4YA5mDF3wePAYs9bTpA",
    authDomain: "clone-52b98.firebaseapp.com",
    projectId: "clone-52b98",
    storageBucket: "clone-52b98.appspot.com",
    messagingSenderId: "81022350298",
    appId: "1:81022350298:web:8b25e3b40aa2e0d16246e3",
    measurementId: "G-CLBB6YLQ9S"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);


export { auth };