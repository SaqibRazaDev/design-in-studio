// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqChvLvN6dU4ZsNeIEj057Mvv5zgYO-u4",
  authDomain: "designin-5593d.firebaseapp.com",
  projectId: "designin-5593d",
  storageBucket: "designin-5593d.appspot.com",
  messagingSenderId: "856688352936",
  appId: "1:856688352936:web:8f3fa7d7fc659794186c9d",
  measurementId: "G-84FRWLBP1Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);