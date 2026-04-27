const parallaxImg = document.querySelector(".parallax-bg img");
const parallaxSection = document.querySelector(".parallax-section");

function updateParallax() {
  if (!parallaxImg || !parallaxSection) return;

  const rect = parallaxSection.getBoundingClientRect();
  const speed = 0.3;

  if (rect.top < window.innerHeight && rect.bottom > 0) {
    const offset = -rect.top * speed;

    parallaxImg.style.setProperty("--parallaxY", `${offset}px`);
  }
}

window.addEventListener("scroll", () => {
  requestAnimationFrame(updateParallax);
});

updateParallax();
