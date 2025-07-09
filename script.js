// Modal logic for info strip
const modalTriggers = document.querySelectorAll(".info-strip span");
const modals = document.querySelectorAll(".modal");
const closeButtons = document.querySelectorAll(".close");

// Open modal on info strip click
modalTriggers.forEach((trigger, index) => {
  trigger.addEventListener("click", () => {
    modals[index].style.display = "block";
  });
});

// Close modal on 'X' click
closeButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    modals[index].style.display = "none";
  });
});

// Close modal on outside click
window.addEventListener("click", (e) => {
  modals.forEach((modal) => {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  });
});

// Buy Now confirmation popup
const buyNowButtons = document.querySelectorAll(".floating-buy");
buyNowButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const confirmBuy = confirm("Buy Now for ₹1499?\n(This will redirect you to Amazon)");
    if (confirmBuy) {
      window.open("https://amzn.to/4eEH6K2", "_blank");
    }
  });
});

// Scrollable Hero Slider Auto Scroll (optional)
let heroSlider = document.querySelector(".hero-slider");
let slideInterval = setInterval(() => {
  heroSlider.scrollBy({ left: window.innerWidth, behavior: "smooth" });
}, 5000);

// Stop scroll if user interacts
heroSlider.addEventListener("mouseenter", () => clearInterval(slideInterval));

// Restart scroll on leave
heroSlider.addEventListener("mouseleave", () => {
  slideInterval = setInterval(() => {
    heroSlider.scrollBy({ left: window.innerWidth, behavior: "smooth" });
  }, 5000);
});

// Collapsible footer menu
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((collapsible) => {
  collapsible.addEventListener("click", function () {
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});
