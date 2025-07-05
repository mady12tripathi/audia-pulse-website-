// Banner Carousel Logic
let currentSlide = 0;
const slides = document.querySelectorAll(".banner-slide");
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

// Auto-slide every 5 seconds
let slideInterval = setInterval(nextSlide, 5000);

// Pause on hover
document.querySelector(".banner-carousel").addEventListener("mouseenter", () => {
  clearInterval(slideInterval);
});

document.querySelector(".banner-carousel").addEventListener("mouseleave", () => {
  slideInterval = setInterval(nextSlide, 5000);
});

// Swipe support (mobile)
let touchStartX = 0;
let touchEndX = 0;

document.querySelector(".banner-carousel").addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

document.querySelector(".banner-carousel").addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  if (touchEndX < touchStartX - 50) {
    nextSlide();
  } else if (touchEndX > touchStartX + 50) {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
  }
});

// Accordion for FAQ
const acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  });
}

// Modal Logic
const modals = document.querySelectorAll(".modal");
const openModalBtns = document.querySelectorAll(".info-label");
const closeBtns = document.querySelectorAll(".close");

openModalBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    modals[index].style.display = "block";
  });
});

closeBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    modals[index].style.display = "none";
  });
});

window.addEventListener("click", (event) => {
  modals.forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

// Confirmation for Buy Now Button
const buyNowBtns = document.querySelectorAll(".buy-now-btn");
buyNowBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const confirmBuy = confirm("Do you want to proceed to Amazon to buy Audia+ Pulse 1.0?");
    if (!confirmBuy) {
      e.preventDefault();
    }
  });
});
