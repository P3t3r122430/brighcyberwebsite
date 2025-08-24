// Firebase initialization
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

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
firebase.initializeApp(firebaseConfig);

// Optional services you may use
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
