// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    if (link.hash) {
      e.preventDefault();
      document.querySelector(link.hash).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Optional: rotate hero text messages
const messages = [
  "Welcome to Bright Cyber",
  "Your tech world starts here",
  "Learn, Connect, Grow"
];
let i = 0;
const heroText = document.querySelector('.hero-text h1');
setInterval(() => {
  heroText.textContent = messages[i];
  i = (i + 1) % messages.length;
}, 4000);
