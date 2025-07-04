let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");
const indicators = document.querySelectorAll(".indicator");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
    indicators[i].classList.toggle("active", i === index);
  });
}
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}
let startX = 0;
document.querySelector(".carousel").addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});
document.querySelector(".carousel").addEventListener("touchend", e => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) nextSlide();
  else if (endX - startX > 50) prevSlide();
});
let interval = setInterval(nextSlide, 4000);
document.querySelector(".carousel").addEventListener("mouseenter", () => {
  clearInterval(interval);
});
document.querySelector(".carousel").addEventListener("mouseleave", () => {
  interval = setInterval(nextSlide, 4000);
});
indicators.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});
showSlide(currentSlide);