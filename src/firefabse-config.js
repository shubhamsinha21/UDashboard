// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyBus51GM4JggOyZF0hVn6wvidMxsfC9O-g",
    authDomain: "udashboard-e4275.firebaseapp.com",
    projectId: "udashboard-e4275",
    storageBucket: "udashboard-e4275.appspot.com",
    messagingSenderId: "612476261105",
    appId: "1:612476261105:web:a7cf45cccd7ac749368f50",
    measurementId: "G-NXCTW4C9T0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);