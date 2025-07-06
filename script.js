// Auto-scroll carousel (hero and tech sections)
let heroIndex = 0;
const heroImages = ["Images/hero-image.jpg", "Images/banner2.jpg", "Images/banner3.jpg", "Images/banner4.jpg"];
const heroImgElement = document.getElementById("hero-carousel-img");

function autoScrollHero() {
  heroIndex = (heroIndex + 1) % heroImages.length;
  heroImgElement.src = heroImages[heroIndex];
}
setInterval(autoScrollHero, 4000); // every 4 seconds

// Info strip modal logic
const modals = document.querySelectorAll(".modal");
const openBtns = document.querySelectorAll(".info-strip span");
const closeBtns = document.querySelectorAll(".close");

openBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    modals[index].style.display = "block";
  });
});

closeBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    modals[index].style.display = "none";
  });
});

window.addEventListener("click", (e) => {
  modals.forEach(modal => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

// Collapsible footer sections
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) => {
  item.addEventListener("click", function () {
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
