import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import 'firebase/storage';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpvLHWCfl2jaMPJw36sWx-LCJ--bmhH80",
  authDomain: "fyp1-3d00d.firebaseapp.com",
  projectId: "fyp1-3d00d",
  storageBucket: "fyp1-3d00d.appspot.com",
  messagingSenderId: "709153003016",
  appId: "1:709153003016:web:0eae8d55fdfe5d1a54e3bd",
  measurementId: "G-81JE9MJ8BY"
};

// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebase.firestore();
export default db  ;