// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDN5JKVM32Su4B0EF8ClMeukcGmHtmjUrA",
  authDomain: "glowcart-ecom.firebaseapp.com",
  projectId: "glowcart-ecom",
  storageBucket: "glowcart-ecom.firebasestorage.app",
  messagingSenderId: "754116963945",
  appId: "1:754116963945:web:85b56b56a3c82e0c3d3cf8",
  measurementId: "G-GW2ZJPPKWE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);