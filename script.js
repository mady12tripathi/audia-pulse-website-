const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
let index = 0;

function showSlide(i) {
  slides.style.transform = `translateX(-${i * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[i].classList.add('active');
}

function nextSlide() {
  index = (index + 1) % dots.length;
  showSlide(index);
}

// Auto-slide every 5 seconds
let autoSlide = setInterval(nextSlide, 5000);

// Manual swipe support
let startX = 0;
slides.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});
slides.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) {
    // Swipe left
    index = (index + 1) % dots.length;
  } else if (endX - startX > 50) {
    // Swipe right
    index = (index - 1 + dots.length) % dots.length;
  }
  showSlide(index);
});
