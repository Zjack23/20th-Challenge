document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('.nav-link');
  
    function showSection(sectionId) {
      sections.forEach(section => {
        section.classList.remove('active');
        if (section.id === sectionId) {
          section.classList.add('active');
        }
      });
  
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.section === sectionId) {
          link.classList.add('active');
        }
      });
    }
  
    navLinks.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        const sectionId = event.target.dataset.section;
        showSection(sectionId);
      });
    });
  
    // Show the About Me section by default
    showSection('about');
  
    // Form validation
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', event => {
      event.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
  
      if (!name) {
        alert('Name is required');
        return;
      }
  
      if (!email) {
        alert('Email is required');
        return;
      }
  
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert('Invalid email address');
        return;
      }
  
      if (!message) {
        alert('Message is required');
        return;
      }
  
      alert('Form submitted successfully');
      contactForm.reset();
    });
  });
  