// Auto-scroll banner
let carousel = document.querySelector('.carousel');
let banners = document.querySelectorAll('.carousel img');
let index = 0;

function scrollBanners() {
  index = (index + 1) % banners.length;
  carousel.scrollTo({
    left: banners[index].offsetLeft,
    behavior: 'smooth'
  });
}
setInterval(scrollBanners, 4000);

// Pause on hover
carousel.addEventListener("mouseover", () => clearInterval(scrollInterval));
carousel.addEventListener("mouseout", () => scrollInterval = setInterval(scrollBanners, 4000));

// Modal Clickable Info Strip
const infoItems = document.querySelectorAll(".info-item");
infoItems.forEach(item => {
  item.addEventListener("click", () => {
    alert(`You clicked on: ${item.innerText}`);
  });
});
