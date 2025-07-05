let currentIndex = 0;
const slides = document.querySelectorAll(".carousel-inner img");
const carousel = document.querySelector(".carousel-inner");

function showSlide(index) {
  if (!carousel) return;
  const offset = index * -100;
  carousel.style.transform = `translateX(${offset}vw)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

let autoScroll = setInterval(nextSlide, 5000);

carousel.addEventListener("touchstart", handleTouchStart, false);
carousel.addEventListener("touchmove", handleTouchMove, false);

let xDown = null;

function handleTouchStart(evt) {
  xDown = evt.touches[0].clientX;
}
function handleTouchMove(evt) {
  if (!xDown) return;
  let xUp = evt.touches[0].clientX;
  let xDiff = xDown - xUp;

  if (xDiff > 5) nextSlide();
  else if (xDiff < -5)
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;

  showSlide(currentIndex);
  xDown = null;
}

// Pause on hover
carousel.addEventListener("mouseenter", () => clearInterval(autoScroll));
carousel.addEventListener("mouseleave", () => autoScroll = setInterval(nextSlide, 5000));

// Modal popups
document.querySelectorAll(".info-item").forEach((item, i) => {
  item.addEventListener("click", () => {
    document.getElementById(`modal${i + 1}`).classList.add("show");
  });
});
document.querySelectorAll(".close").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.parentElement.classList.remove("show");
  });
});
