let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');

function showSlide(index) {
  if (index >= slides.length) currentIndex = 0;
  else if (index < 0) currentIndex = slides.length - 1;
  else currentIndex = index;

  const offset = -currentIndex * 100;
  document.querySelector('.slider').style.transform = `translateX(${offset}%)`;

  indicators.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex);
  });
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

setInterval(nextSlide, 5000); // Auto-scroll every 5 sec

// Manual swipe (mobile touch)
let startX = 0;
const slider = document.querySelector('.slider');

slider.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

slider.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  const diff = startX - endX;

  if (diff > 50) nextSlide();
  else if (diff < -50) showSlide(currentIndex - 1);
});

// Clickable indicators
indicators.forEach((dot, i) => {
  dot.addEventListener('click', () => showSlide(i));
});
