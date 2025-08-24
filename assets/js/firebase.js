// Firebase configuration for Bright Cyber & Bookshop
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
const auth = firebase.auth();
const db = firebase.firestore();

// ==============================
// AUTH FUNCTIONS
// ==============================

// Sign up new user
async function signUp(email, password, fullName) {
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;

    // Save full name to Firestore
    await db.collection("users").doc(user.uid).set({
      name: fullName,
      email: email,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });

    alert("Account created successfully!");
    return user;
  } catch (error) {
    console.error("Sign Up Error:", error.message);
    alert(error.message);
  }
}

// Login existing user
async function logIn(email, password) {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    alert("Logged in successfully!");
    return userCredential.user;
  } catch (error) {
    console.error("Login Error:", error.message);
    alert(error.message);
  }
}

// Logout
async function logOut() {
  try {
    await auth.signOut();
    alert("Logged out successfully!");
  } catch (error) {
    console.error("Logout Error:", error.message);
  }
}

// Monitor auth state
auth.onAuthStateChanged(user => {
  if (user) {
    console.log("User is logged in:", user.email);
    // Update UI or redirect if needed
  } else {
    console.log("No user logged in");
    // Redirect to login page or update UI
  }
});
