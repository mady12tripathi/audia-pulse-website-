// Footer collapsible menu logic
document.querySelectorAll('.footer-section h4').forEach(section => {
  section.addEventListener('click', () => {
    section.parentElement.classList.toggle('active');
  });
});

// Placeholder subscribe button
document.querySelector('.email-alert-section button')?.addEventListener('click', () => {
  alert("Thanks for subscribing! 🎉 (Functionality to be added)");
});
