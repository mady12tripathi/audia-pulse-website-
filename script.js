// Carousel functionality
let currentSlide = 0;
let slides = document.querySelectorAll('.slide');
let dotsContainer = document.querySelector('.carousel-dots');
let autoScroll = true;
let interval;

// Create dots for carousel
slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function goToSlide(n) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = (n + slides.length) % slides.length;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
    
    document.querySelector('.carousel').style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    if (!autoScroll) return;
    goToSlide(currentSlide + 1);
}

// Auto-scroll every 5 seconds
interval = setInterval(nextSlide, 5000);

// Pause on hover
const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseenter', () => {
    autoScroll = false;
    clearInterval(interval);
});

carousel.addEventListener('mouseleave', () => {
    autoScroll = true;
    interval = setInterval(nextSlide, 5000);
});

// Swipe functionality for mobile
let startX = 0;
let endX = 0;

carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
});

function handleSwipe() {
    const diff = startX - endX;
    const threshold = 50;

    if (diff > threshold) {
        goToSlide(currentSlide + 1);
    } else if (diff < -threshold) {
        goToSlide(currentSlide - 1);
    }
}

// Modal functionality
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const closeBtn = document.querySelector('.close');

const modalContent = {
    delivery: {
        title: "Free Delivery",
        text: "Enjoy free shipping on all orders across India. No minimum purchase required. Orders typically arrive within 3-5 business days."
    },
    replacement: {
        title: "7-Day Replacement",
        text: "Not satisfied with your purchase? We offer a no-questions-asked replacement policy within 7 days of delivery. Contact our support team to initiate a replacement."
    },
    warranty: {
        title: "1-Year Warranty",
        text: "Your Audia+ product is covered by a 1-year manufacturer warranty against defects. Warranty covers parts and labor. Proof of purchase required."
    }
};

document.querySelectorAll('.info-item').forEach(item => {
    item.addEventListener('click', () => {
        const modalType = item.dataset.modal;
        modalTitle.textContent = modalContent[modalType].title;
        modalText.textContent = modalContent[modalType].text;
        modal.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        faqItem.classList.toggle('active');
    });
});

// Buy Now Confirmation
document.querySelectorAll('.buy-now-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.getElementById('offer');
        window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
        });
        
        // Show confirmation after scroll
        setTimeout(() => {
            modalTitle.textContent = "Special Offer!";
            modalText.textContent = "You're about to get an amazing deal! Continue to checkout?";
            modal.style.display = 'flex';
        }, 800);
    });
});

// Save Button (Offer Banner)
document.getElementById('saveBtn').addEventListener('click', () => {
    modalTitle.textContent = "Limited Time Offer!";
    modalText.textContent = "You're saving ₹3500 on this premium product! Continue to checkout?";
    modal.style.display = 'flex';
});
