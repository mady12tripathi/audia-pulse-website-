
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  const slideWidth = slides[0].clientWidth;
  document.querySelector('.slides').style.transform = `translateX(-${index * slideWidth}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

setInterval(nextSlide, 4000);

document.querySelector('.carousel').addEventListener('mouseover', () => clearInterval(autoScroll));
document.querySelector('.carousel').addEventListener('mouseout', () => autoScroll = setInterval(nextSlide, 4000));
