const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
let current = 0;
const total = dots.length;

function goToSlide(i) {
  slides.style.transform = `translateX(-${i * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[i].classList.add('active');
  current = i;
}

function nextSlide() {
  goToSlide((current + 1) % total);
}

let interval = setInterval(nextSlide, 4000);

// Swipe support
let startX = 0;
slides.addEventListener('touchstart', e => startX = e.touches[0].clientX);
slides.addEventListener('touchend', e => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) nextSlide();
  else if (endX - startX > 50) goToSlide((current - 1 + total) % total);
});
