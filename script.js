// script.js

let slides = document.querySelector('.slides');
let index = 0;

setInterval(() => {
  index = (index + 1) % slides.children.length;
  slides.style.transform = `translateX(-${index * 100}%)`;
}, 5000);
