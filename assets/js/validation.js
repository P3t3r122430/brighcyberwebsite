// Basic form validation: required fields + password confirmation for signup
document.addEventListener("DOMContentLoaded", () => {

  // Generic required validation for all forms
  document.querySelectorAll("form").forEach(form => {
    const inputs = form.querySelectorAll("input[required], textarea[required]");

    inputs.forEach(el => {
      // Reset border on focus
      el.addEventListener("focus", () => el.style.border = "1px solid #dcdcdc");
    });

    form.addEventListener("submit", (e) => {
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
        return; // stop further validation
      }

      // Password confirmation for signup
      const suPass = document.getElementById("su-password");
      const suConfirm = document.getElementById("su-confirm");
      if (suPass && suConfirm && suPass.value !== suConfirm.value) {
        e.preventDefault();
        alert("Passwords do not match.");
        suConfirm.focus();
      }
    });
  });
});
