
let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;

function showSlide(index) {
  const slider = document.querySelector('.slider');
  const width = slides[0].clientWidth;
  slider.style.transform = `translateX(-${index * width}px)`;
}
function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}
setInterval(nextSlide, 5000);

document.querySelectorAll('.info-icon').forEach((el) => {
  el.addEventListener('click', () => {
    const target = el.getAttribute('data-target');
    document.getElementById(target).style.display = 'block';
  });
});
document.querySelectorAll('.close').forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.closest('.modal').style.display = 'none';
  });
});
