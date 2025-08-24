// auth.js
import { auth } from './firebase.js';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut 
} from "firebase/auth";

// SIGN UP FUNCTION
export function signup(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert(`Signup successful! Welcome, ${user.email}`);
            // Optionally, redirect to home page
            window.location.href = "index.html";
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(`Signup failed: ${errorMessage}`);
        });
}

// SIGN IN FUNCTION
export function signin(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert(`Login successful! Welcome back, ${user.email}`);
            // Optionally, redirect to home page
            window.location.href = "index.html";
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(`Login failed: ${errorMessage}`);
        });
}

// SIGN OUT FUNCTION
export function logout() {
    signOut(auth)
        .then(() => {
            alert("You have been signed out.");
            window.location.href = "index.html";
        })
        .catch((error) => {
            alert(`Sign out error: ${error.message}`);
        });
}

// AUTH STATE LISTENER
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User is signed in:", user.email);
        // Optional: update UI to show user is logged in
    } else {
        console.log("No user is signed in.");
        // Optional: update UI to show user is logged out
    }
});
