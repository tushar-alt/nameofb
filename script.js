// Navbar scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Hamburger toggle
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('show');
    });
  }
});

// Typewriter (only on home)
window.addEventListener('load', () => {
  const textElement = document.getElementById('typewriter-text');
  if (!textElement) return; // skip if not home page
  const text = "We Create Next-Gen Websites,\nApps & Software — Faster and Smarter.";
  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      textElement.textContent += text.charAt(i);
      i++;
      const delay = text[i - 1] === ',' ? 200 : 60;
      setTimeout(typeWriter, delay);
    }
  }
  setTimeout(typeWriter, 400);
});
