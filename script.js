const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
let index = 0;

function showSlide(i) {
  index = i;
  slides.style.transform = `translateX(-${i * 100}vw)`;
  updateDots();
}

function updateDots() {
  dots.forEach((dot, i) => {
    dot.style.backgroundColor = i === index ? '#333' : '#bbb';
  });
}

// Auto Slide
setInterval(() => {
  index = (index + 1) % dots.length;
  showSlide(index);
}, 4000);

// Optional: Make dots clickable in the future
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => showSlide(i));
});
