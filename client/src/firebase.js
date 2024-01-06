// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// for example
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ee9cd.firebaseapp.com",
  projectId: "mern-estate-ee9cd",
  storageBucket: "mern-estate-ee9cd.appspot.com",
  messagingSenderId: "619475360920",
  appId: "1:619475360920:web:934ccc90a1ac43b51ac4ed",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
