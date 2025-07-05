// script.js

let currentIndex = 0;

function nextSlide() {
  const carousel = document.querySelector(".carousel-container");
  currentIndex = (currentIndex + 1) % 4;
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(nextSlide, 4000);

// Info Modal Popup (if added later)
function openModal(text) {
  alert(text);
}
