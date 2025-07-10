// You can add additional interactivity here if needed
document.addEventListener("DOMContentLoaded", () => {
  // Optional: Scroll to next image in hero carousel (auto-scroll)
  const heroTrack = document.querySelector(".carousel-track");
  let scrollAmount = 0;
  setInterval(() => {
    if (heroTrack) {
      scrollAmount += window.innerWidth;
      if (scrollAmount >= heroTrack.scrollWidth) scrollAmount = 0;
      heroTrack.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  }, 4000);
});
