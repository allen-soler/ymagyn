// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDRPI0qAlw9EDO-3-dCND6W3Zo14ug4J14",
    authDomain: "ymagyn-b7db1.firebaseapp.com",
    databaseURL: "https://ymagyn-b7db1-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "ymagyn-b7db1",
    storageBucket: "ymagyn-b7db1.appspot.com",
    messagingSenderId: "25326693893",
    appId: "1:25326693893:web:0b8beffb980958c958f66c",
    measurementId: "G-KLLDVBFX10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
