// firebase.js
// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration for Bright Cyber website
const firebaseConfig = {
  apiKey: "AIzaSyAOImvPY0h7Dg-I0b6QcfZzWR_y5hjRvJA",
  authDomain: "brightcybersite.firebaseapp.com",
  projectId: "brightcybersite",
  storageBucket: "brightcybersite.firebasestorage.app",
  messagingSenderId: "1062122363677",
  appId: "1:1062122363677:web:22b5e96dd0320a88411ff4",
  measurementId: "G-7HJW1J1RXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export authentication module for use in auth.js
export const auth = getAuth(app);
