// Navbar mobile toggle + active link highlighting

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelector(".nav-links");

  if (navbar && navLinks) {
    // Create hamburger button
    const navToggle = document.createElement("button");
    navToggle.setAttribute("aria-label", "Toggle navigation");
    navToggle.classList.add("nav-toggle");
    navToggle.innerHTML = "&#9776;";

    // Insert before navLinks
    navbar.insertBefore(navToggle, navLinks);

    navToggle.addEventListener("click", () => navLinks.classList.toggle("show"));
  }

  // Active link based on current URL
  document.querySelectorAll(".nav-links a").forEach(a => {
    if (a.href === window.location.href) a.classList.add("active");
  });
});
________________________________________
13) assets/js/validation.js (Required fields + password match)
// Basic form validation: required fields + password confirmation for signup

document.addEventListener("DOMContentLoaded", () => {
  // Generic required validation for all forms
  document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", (e) => {
      const inputs = form.querySelectorAll("input[required], textarea[required]");
      let ok = true;
      inputs.forEach(el => {
        if (!el.value.trim()) {
          ok = false;
          el.style.border = "2px solid red";
        } else {
          el.style.border = "1px solid #dcdcdc";
        }
      });
      if (!ok) {
        e.preventDefault();
        alert("Please fill in all required fields.");
      }
    });
  });

  // Password confirmation (signup)
  const suPass = document.getElementById("su-password");
  const suConfirm = document.getElementById("su-confirm");
  const signupForm = document.getElementById("signup-form");
  if (signupForm && suPass && suConfirm) {
    signupForm.addEventListener("submit", (e) => {
      if (suPass.value !== suConfirm.value) {
        e.preventDefault();
        alert("Passwords do not match.");
        suConfirm.focus();
      }
    });
  }
});
