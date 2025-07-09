// HERO BANNER CAROUSEL
let currentHeroIndex = 0;
const heroCarousel = document.querySelector('.hero-carousel');
const heroDots = document.querySelectorAll('.dot');

function showHeroSlide(index) {
  heroCarousel.style.transform = `translateX(-${index * 100}vw)`;
  heroDots.forEach(dot => dot.classList.remove('active'));
  heroDots[index].classList.add('active');
}

heroDots.forEach((dot, idx) => {
  dot.addEventListener('click', () => {
    currentHeroIndex = idx;
    showHeroSlide(currentHeroIndex);
  });
});

setInterval(() => {
  currentHeroIndex = (currentHeroIndex + 1) % heroDots.length;
  showHeroSlide(currentHeroIndex);
}, 4000); // Slide every 4s

// MODALS FOR INFO LABELS
const infoLabels = document.querySelectorAll('.info-label');
infoLabels.forEach((label, index) => {
  label.addEventListener('click', () => {
    const modalId = `modal${index + 1}`;
    document.getElementById(modalId).style.display = 'block';
  });
});

const modals = document.querySelectorAll('.modal');
modals.forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal') || e.target.classList.contains('close')) {
      modal.style.display = 'none';
    }
  });
});

// BUY NOW CONFIRMATION
const buyNowButtons = document.querySelectorAll('.buy-now-banner');
buyNowButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const confirmBuy = confirm("Do you want to proceed to buy Audia+ Pulse 1.0?");
    if (confirmBuy) {
      window.location.href = "https://amzn.to/4eEH6K2";
    }
  });
});
