(() => {
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  if (!scrollTopBtn) return;

  let scrollTopTicking = false;

  function updateScrollTopButton() {
    scrollTopBtn.classList.toggle("is-visible", window.scrollY > 400);
    scrollTopTicking = false;
  }

  window.addEventListener("scroll", () => {
    if (!scrollTopTicking) {
      window.requestAnimationFrame(updateScrollTopButton);
      scrollTopTicking = true;
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  /* INITIAL PAINT */
  updateScrollTopButton();
})();
