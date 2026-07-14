// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgt0tqrJZ861xTh8k89PDp4zjPuUNDHEg",
  authDomain: "pocket-locker-644aa.firebaseapp.com",
  projectId: "pocket-locker-644aa",
  storageBucket: "pocket-locker-644aa.firebasestorage.app",
  messagingSenderId: "613209813018",
  appId: "1:613209813018:web:f31ae9eb50b302997e61a3",
  measurementId: "G-XNJ8W4DNFG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);