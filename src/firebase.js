import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
// import { initializeApp } from 'firebase/app';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBi-_u1s2ejioIR00W20FfhbskQhnwsxJ8",
  authDomain: "clone-8dc48.firebaseapp.com",
  projectId: "clone-8dc48",
  storageBucket: "clone-8dc48.appspot.com",
  messagingSenderId: "36586667640",
  appId: "1:36586667640:web:230a2a9bc7cacc55de378d",
  measurementId: "G-8LBM9EN296"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db,auth }

