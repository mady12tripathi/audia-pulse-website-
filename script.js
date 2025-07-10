// Hero Banner Carousel
let currentIndex = 0;
const carouselImages = document.querySelector('.carousel-images');
const dots = document.querySelectorAll('.dot');
const totalSlides = dots.length;

function updateCarousel() {
  carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel();
  });
});

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);

// Floating icon actions
document.getElementById("whatsapp-icon").addEventListener("click", () => {
  window.open("https://wa.me/919999999999", "_blank");
});

document.getElementById("amazon-icon").addEventListener("click", () => {
  window.open("https://www.amazon.in/dp/YOUR_PRODUCT_ID", "_blank");
});
