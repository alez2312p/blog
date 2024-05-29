// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE,
    authDomain: "blog-e1c21.firebaseapp.com",
    projectId: "blog-e1c21",
    storageBucket: "blog-e1c21.appspot.com",
    messagingSenderId: "137631401321",
    appId: "1:137631401321:web:e49661a56a73b41c1ce9f8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);