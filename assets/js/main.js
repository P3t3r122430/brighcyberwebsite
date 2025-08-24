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

    // Toggle menu on click
    navToggle.addEventListener("click", () => navLinks.classList.toggle("show"));

    // Close menu when a link is clicked (mobile)
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => navLinks.classList.remove("show"));
    });

    // Close menu if click outside
    document.addEventListener("click", (e) => {
      if (!navbar.contains(e.target) && navLinks.classList.contains("show")) {
        navLinks.classList.remove("show");
      }
    });
  }

  // Active link based on pathname (safer than full URL)
  const currentPath = window.location.pathname;
  document.querySelectorAll(".nav-links a").forEach(a => {
    if (a.pathname === currentPath) a.classList.add("active");
  });
});
