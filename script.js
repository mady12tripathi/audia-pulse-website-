// FAQ toggle behavior (optional enhancement)
document.querySelectorAll("details").forEach((detail) => {
  detail.addEventListener("toggle", () => {
    if (detail.open) {
      // Close other open FAQs for cleaner UX
      document.querySelectorAll("details").forEach((d) => {
        if (d !== detail) d.open = false;
      });
    }
  });
});

// Optional scroll indicator for carousels
const heroCarousel = document.querySelector('.carousel-container');
const techCarousel = document.querySelector('.tech-carousel');

function enableSwipeScroll(container) {
  let isDown = false;
  let startX;
  let scrollLeft;

  container.addEventListener('mousedown', (e) => {
    isDown = true;
    container.classList.add('scrolling');
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener('mouseleave', () => {
    isDown = false;
    container.classList.remove('scrolling');
  });

  container.addEventListener('mouseup', () => {
    isDown = false;
    container.classList.remove('scrolling');
  });

  container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5; // scroll speed
    container.scrollLeft = scrollLeft - walk;
  });
}

if (heroCarousel) enableSwipeScroll(heroCarousel);
if (techCarousel) enableSwipeScroll(techCarousel);
