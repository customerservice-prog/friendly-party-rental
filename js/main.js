// Friendly Party Rental - main.js

// Mobile hamburger menu
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('mainNav');
if (hamburger && mainNav) {
  hamburger.addEventListener('click', () => mainNav.classList.toggle('open'));
  document.querySelectorAll('.main-nav .dropdown > a').forEach(link => {
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        link.parentElement.classList.toggle('open');
      }
    });
  });
}

// Close nav on outside click
document.addEventListener('click', (e) => {
  if (mainNav && !mainNav.contains(e.target) && hamburger && !hamburger.contains(e.target)) {
    mainNav.classList.remove('open');
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
