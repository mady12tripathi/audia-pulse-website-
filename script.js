const slides = document.querySelector('.slides'); const dots = document.querySelectorAll('.dot'); let index = 0; let intervalId; let startX = 0; let endX = 0;

function showSlide(i) { index = i; slides.style.transform = translateX(-${i * 100}vw); updateDots(); }

function updateDots() { dots.forEach((dot, i) => { dot.style.backgroundColor = i === index ? '#333' : '#bbb'; }); }

function startAutoSlide() { intervalId = setInterval(() => { index = (index + 1) % dots.length; showSlide(index); }, 4000); }

function stopAutoSlide() { clearInterval(intervalId); }

// Auto Slide startAutoSlide();

// Pause on hover const carousel = document.querySelector('.carousel'); carousel.addEventListener('mouseenter', stopAutoSlide); carousel.addEventListener('mouseleave', startAutoSlide);

// Dots clickable dots.forEach((dot, i) => { dot.addEventListener('click', () => showSlide(i)); });

// Swipe support slides.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; });

slides.addEventListener('touchend', (e) => { endX = e.changedTouches[0].clientX; handleSwipe(); });

function handleSwipe() { const threshold = 50; // Minimum swipe distance if (endX - startX > threshold) { // Swipe right index = index > 0 ? index - 1 : dots.length - 1; showSlide(index); } else if (startX - endX > threshold) { // Swipe left index = (index + 1) % dots.length; showSlide(index); } }

