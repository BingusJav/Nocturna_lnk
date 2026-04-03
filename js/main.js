document.addEventListener('DOMContentLoaded', () => {
  // Sticky Header Functionality
  const header = document.querySelector('.header');
  
  const toggleHeader = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  
  window.addEventListener('scroll', toggleHeader);
  toggleHeader(); // Init

  // Mobile Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  // Note: For a fully responsive custom mobile menu, we'd typically add a separate mobile nav container.
  // We'll simulate a simple toggle for this demo.
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      // In a real app we would toggle a class to show/hide the mobile menu properly
      alert('Mobile menu toggle action - Para un menú responsivo completo se adaptaría la clase activa.');
    });
  }

  // Scroll Reveal Animations setup using IntersectionObserver
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const revealObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    });
  }, revealOptions);

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });
});
