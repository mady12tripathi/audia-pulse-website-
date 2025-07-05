// Modals for Info Strip
const labels = document.querySelectorAll(".clickable-label");
const modals = document.querySelectorAll(".modal");
const closes = document.querySelectorAll(".close");

labels.forEach(label => {
  label.addEventListener("click", () => {
    const targetId = label.getAttribute("data-modal");
    const targetModal = document.getElementById(targetId);
    if (targetModal) {
      targetModal.style.display = "block";
    }
  });
});

closes.forEach(close => {
  close.addEventListener("click", () => {
    close.closest(".modal").style.display = "none";
  });
});

window.addEventListener("click", event => {
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

// Buy Now Confirmation
const buyBtn = document.querySelector(".buy-btn");
buyBtn.addEventListener("click", () => {
  const confirmed = confirm("You're being redirected to Amazon to complete your purchase. Continue?");
  if (confirmed) {
    window.open("https://amzn.to/4eEH6K2", "_blank");
  }
});
