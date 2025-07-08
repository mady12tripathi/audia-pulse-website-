// Hero Carousel
let index = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;

function showSlide(i) {
  slides.style.transform = `translateX(-${i * 100}%)`;
}
function nextSlide() {
  index = (index + 1) % totalSlides;
  showSlide(index);
}
setInterval(nextSlide, 4000);

// Info Modals
const labels = document.querySelectorAll('.info-strip div');
const modals = document.querySelectorAll('.modal');
const closes = document.querySelectorAll('.close');

labels.forEach((label, i) => {
  label.onclick = () => modals[i].style.display = 'block';
});
closes.forEach((btn, i) => {
  btn.onclick = () => modals[i].style.display = 'none';
});
window.onclick = e => {
  modals.forEach(modal => {
    if (e.target === modal) modal.style.display = 'none';
  });
};

// Footer Collapsible
document.querySelectorAll('.footer-toggle').forEach(toggle => {
  toggle.addEventListener('click', () => {
    const links = toggle.nextElementSibling;
    links.style.display = links.style.display === 'block' ? 'none' : 'block';
  });
});
