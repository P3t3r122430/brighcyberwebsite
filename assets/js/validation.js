// Validation for login & signup forms

document.addEventListener("DOMContentLoaded", () => {
  // Signup form validation
  const signupForm = document.querySelector("form[action='#'][method='POST']");
  if (signupForm && document.querySelector("#confirm-password")) {
    signupForm.addEventListener("submit", (e) => {
      const password = document.querySelector("#password").value;
      const confirmPassword = document.querySelector("#confirm-password").value;

      if (password !== confirmPassword) {
        e.preventDefault();
        alert("Passwords do not match. Please try again.");
      }
    });
  }

  // Login form validation (basic check)
  const loginForm = document.querySelector("form[action='#'][method='POST']");
  if (loginForm && !document.querySelector("#confirm-password")) {
    loginForm.addEventListener("submit", (e) => {
      const email = document.querySelector("#email").value;
      const password = document.querySelector("#password").value;

      if (!email || !password) {
        e.preventDefault();
        alert("Please enter both email and password.");
      }
    });
  }
});
