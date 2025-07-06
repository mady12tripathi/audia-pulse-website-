// ----- Collapsible Footer Menu -----
document.querySelectorAll('.footer-section h4').forEach(heading => {
  heading.addEventListener('click', () => {
    heading.classList.toggle('active');
    const submenu = heading.nextElementSibling;
    submenu.classList.toggle('open');
  });
});

// ----- Modal Pop-ups for Info Labels -----
const modals = document.querySelectorAll('.info-modal');
const modalTriggers = document.querySelectorAll('.info-label');
const closeBtns = document.querySelectorAll('.close-modal');

modalTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const modalId = trigger.getAttribute('data-modal');
    document.getElementById(modalId).classList.add('show');
  });
});

closeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.info-modal').classList.remove('show');
  });
});

window.addEventListener('click', e => {
  modals.forEach(modal => {
    if (e.target === modal) {
      modal.classList.remove('show');
    }
  });
});

// ----- Buy Now Button Confirmation -----
const buyBtn = document.querySelector('.buy-now-btn');
const confirmation = document.querySelector('.confirmation-popup');
const confirmClose = document.querySelector('.close-confirmation');

buyBtn.addEventListener('click', () => {
  confirmation.classList.add('visible');
});

confirmClose.addEventListener('click', () => {
  confirmation.classList.remove('visible');
});

window.addEventListener('click', e => {
  if (e.target === confirmation) {
    confirmation.classList.remove('visible');
  }
});

// ----- Horizontal Scroll for Tech Banners -----
const techContainer = document.querySelector('.tech-scroll');
let isDown = false;
let startX;
let scrollLeft;

techContainer.addEventListener('mousedown', e => {
  isDown = true;
  techContainer.classList.add('grabbing');
  startX = e.pageX - techContainer.offsetLeft;
  scrollLeft = techContainer.scrollLeft;
});

techContainer.addEventListener('mouseleave', () => {
  isDown = false;
  techContainer.classList.remove('grabbing');
});

techContainer.addEventListener('mouseup', () => {
  isDown = false;
  techContainer.classList.remove('grabbing');
});

techContainer.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - techContainer.offsetLeft;
  const walk = (x - startX) * 2; // Speed factor
  techContainer.scrollLeft = scrollLeft - walk;
});

// ----- Auto Scroll Tech Section -----
setInterval(() => {
  techContainer.scrollBy({ left: 320, behavior: 'smooth' });
  if (techContainer.scrollLeft + techContainer.offsetWidth >= techContainer.scrollWidth) {
    techContainer.scrollTo({ left: 0, behavior: 'smooth' });
  }
}, 4000);
