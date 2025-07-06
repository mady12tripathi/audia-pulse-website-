// Scroll Functions
function nextSlide() {
  document.getElementById('heroCarousel').scrollBy({ left: window.innerWidth, behavior: 'smooth' });
}
function prevSlide() {
  document.getElementById('heroCarousel').scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
}

// Modal Popup
function openModal(id) {
  document.getElementById(id).style.display = 'block';
}
function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}
window.onclick = function(event) {
  ['deliveryModal','replaceModal','warrantyModal'].forEach(id => {
    let modal = document.getElementById(id);
    if (event.target == modal) modal.style.display = "none";
  });
}

// Collapsible Footer Menu
function toggleMenu(header) {
  const ul = header.nextElementSibling;
  ul.style.display = ul.style.display === 'block' ? 'none' : 'block';
}
