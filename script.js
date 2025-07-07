// Responsive navigation menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav ul');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  navToggle.classList.toggle('open');
});

// Optional: Smooth scroll for anchor links
const links = document.querySelectorAll('a[href^="#"]');
for (const link of links) {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      if (navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        navToggle.classList.remove('open');
      }
    }
  });
}
