// Show modal on info item click
document.querySelectorAll(".info-item").forEach((item, index) => {
  item.addEventListener("click", () => {
    const modal = document.getElementById(`modal${index + 1}`);
    if (modal) {
      modal.style.display = "block";
    }
  });
});

// Close modal when 'x' is clicked
document.querySelectorAll(".close").forEach((close) => {
  close.addEventListener("click", () => {
    close.closest(".modal").style.display = "none";
  });
});

// Close modal on outside click
window.addEventListener("click", (event) => {
  document.querySelectorAll(".modal").forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
