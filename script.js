
let slideIndex = 0;
const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % dots.length;
  showSlide(slideIndex);
}

dots.forEach((dot, idx) => {
  dot.addEventListener("click", () => {
    slideIndex = idx;
    showSlide(slideIndex);
  });
});

setInterval(nextSlide, 4000);
