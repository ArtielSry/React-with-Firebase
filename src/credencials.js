// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcK369Fe2nQOEglrhFteUsIFDlRAXrAzI",
  authDomain: "react-firebase1-e2c1d.firebaseapp.com",
  projectId: "react-firebase1-e2c1d",
  storageBucket: "react-firebase1-e2c1d.appspot.com",
  messagingSenderId: "980544936915",
  appId: "1:980544936915:web:7e4633a677940abd3fad26"
};

// Initialize Firebase
 const firebaseApp = initializeApp(firebaseConfig);
 
 export default firebaseApp