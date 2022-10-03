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
  apiKey: "AIzaSyBJB4bY-HgayVeV4vGaCfeFgdbKrfSJL2k",
  authDomain: "automechanic-46c2c.firebaseapp.com",
  projectId: "automechanic-46c2c",
  storageBucket: "automechanic-46c2c.appspot.com",
  messagingSenderId: "972876773008",
  appId: "1:972876773008:web:9f3bb5dc865996278aca15",
  measurementId: "G-260G2W1FSJ"
};

// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const st = firebase.storage();
export default st ;