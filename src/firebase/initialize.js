// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAdazY0zHTW7Ko6xwcSdvJnjfHA_tEk5mQ",
    authDomain: "portfolio-generator-cf501.firebaseapp.com",
    projectId: "portfolio-generator-cf501",
    storageBucket: "portfolio-generator-cf501.appspot.com",
    messagingSenderId: "930734886482",
    appId: "1:930734886482:web:315b68594593a4d980198b",
    measurementId: "G-6VNVEQY8M6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

// module.exports = { auth }
