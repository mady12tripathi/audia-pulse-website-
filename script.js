// ========== HERO BANNER CAROUSEL ==========
let currentSlide = 0;
const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-track img');
const dots = document.querySelectorAll('.carousel-dots button');
let intervalId;

function updateSlide(position) {
  currentSlide = position;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentSlide].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide(currentSlide);
}

function startAutoSlide() {
  intervalId = setInterval(nextSlide, 5000);
}

function stopAutoSlide() {
  clearInterval(intervalId);
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => updateSlide(index));
});

// Swipe Support for Mobile
let startX = 0;
track.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});
track.addEventListener('touchend', e => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) nextSlide();
  if (endX - startX > 50) {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide(currentSlide);
  }
});

// Pause on hover
track.addEventListener('mouseenter', stopAutoSlide);
track.addEventListener('mouseleave', startAutoSlide);

// Start slider
updateSlide(0);
startAutoSlide();

// ========== MODAL POPUPS ==========
const modalTriggers = document.querySelectorAll('.info-icon');
const modals = document.querySelectorAll('.modal');

modalTriggers.forEach((trigger, index) => {
  trigger.addEventListener('click', () => {
    modals[index].classList.add('active');
  });
});

modals.forEach(modal => {
  const closeBtn = modal.querySelector('.close');
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
});

// ========== BUY NOW BUTTON CONFIRM ==========
const buyButtons = document.querySelectorAll('.buy-btn');
buyButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const proceed = confirm("Ready to grab this launch offer now?");
    if (proceed) {
      window.location.href = "https://amzn.to/4eEH6K2";
    }
  });
});
