// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_eFdQyC1JzuAVj_aseX54mzxpG1-LXBs",
  authDomain: "app-router-next.firebaseapp.com",
  projectId: "app-router-next",
  storageBucket: "app-router-next.appspot.com",
  messagingSenderId: "458549939029",
  appId: "1:458549939029:web:8e8cffe787b63c78653ddc",
  measurementId: "G-HXGYXE1MKG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
