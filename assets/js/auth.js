// auth.js
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Firebase app (from firebase.js)
  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  // ===== SIGNUP =====
  const signupForm = document.getElementById("signup-form");
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("su-name").value.trim();
      const email = document.getElementById("su-email").value.trim();
      const password = document.getElementById("su-password").value.trim();
      const confirm = document.getElementById("su-confirm").value.trim();

      if (password !== confirm) {
        alert("Passwords do not match.");
        return;
      }

      auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          // Optionally update display name
          user.updateProfile({ displayName: name });
          alert(`Welcome ${name}! Account created successfully.`);
          signupForm.reset();
          window.location.href = "login.html"; // redirect to login
        })
        .catch((error) => {
          alert(error.message);
        });
    });
  }

  // ===== LOGIN =====
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("li-email").value.trim();
      const password = document.getElementById("li-password").value.trim();

      auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          alert(`Welcome back, ${user.displayName || "user"}!`);
          loginForm.reset();
          window.location.href = "index.html"; // redirect after login
        })
        .catch((error) => {
          alert(error.message);
        });
    });
  }

  // Optional: auto redirect if already logged in
  auth.onAuthStateChanged((user) => {
    if (user) {
      // You can redirect or show user info if logged in
      console.log(`Logged in as ${user.email}`);
    }
  });
});
