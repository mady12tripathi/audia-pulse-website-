// FAQ Accordion Logic
document.querySelectorAll('.accordion').forEach(button => {
  button.addEventListener('click', () => {
    const panel = button.nextElementSibling;

    // Toggle active state
    button.classList.toggle('active');

    // Open or close the panel
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
});

// Modal popup placeholder logic (future use)
/*
document.querySelectorAll('.info-label').forEach(label => {
  label.addEventListener('click', () => {
    const modalId = label.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'block';
  });
});

document.querySelectorAll('.modal .close').forEach(closeBtn => {
  closeBtn.addEventListener('click', () => {
    closeBtn.closest('.modal').style.display = 'none';
  });
});

window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
  }
});
*/
