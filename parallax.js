const parallaxSection = document.querySelector(".parallax-section");
const parallaxBg = document.querySelector(".parallax-bg");

function updateParallax() {
  if (!parallaxSection || !parallaxBg) return;

  const rect = parallaxSection.getBoundingClientRect();
  const speed = 0.3;

  if (rect.top < window.innerHeight && rect.bottom > 0) {
    const offset = -(rect.top * speed);
    parallaxBg.style.transform = `translateY(${offset}px)`;
  }
}

function lightningFlash() {
  if (!parallaxBg) return;

  parallaxBg.classList.add("flash");

  setTimeout(() => {
    parallaxBg.classList.remove("flash");
  }, 120);
}

window.addEventListener("scroll", () => {
  requestAnimationFrame(updateParallax);
});

window.addEventListener("resize", updateParallax);

setInterval(() => {
  if (!parallaxSection) return;

  const rect = parallaxSection.getBoundingClientRect();

  if (rect.top < window.innerHeight && rect.bottom > 0) {
    if (Math.random() > 0.6) {
      lightningFlash();
    }
  }
}, 1200);

updateParallax();
