let slides = document.querySelectorAll(".slide");
let indicatorsContainer = document.querySelector(".indicators");

// Create indicators dynamically
slides.forEach((_, index) => {
  const dot = document.createElement("span");
  if (index === 0) dot.classList.add("active");
  indicatorsContainer.appendChild(dot);
});

let indicators = document.querySelectorAll(".indicators span");

let currentSlide = 0;
const showSlide = (index) => {
  slides.forEach(slide => slide.classList.remove("active"));
  indicators.forEach(dot => dot.classList.remove("active"));
  slides[index].classList.add("active");
  indicators[index].classList.add("active");
};

const nextSlide = () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
};

setInterval(nextSlide, 5000); // Auto scroll every 5 seconds

// Swipe functionality
let startX = 0;
document.querySelector(".banner-slider").addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

document.querySelector(".banner-slider").addEventListener("touchend", (e) => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) nextSlide();
  if (endX - startX > 50) {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }
});
