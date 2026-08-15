const scrollTopBtn = document.getElementById("scrollTopBtn");

if (scrollTopBtn) {

  let ticking = false;

  function updateScrollTopButton() {
    scrollTopBtn.classList.toggle("is-visible", window.scrollY > 400);
    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(updateScrollTopButton);
      ticking = true;
    }
  });

  /* DESKTOP HOVER – CSAK VALÓDI EGÉRNÉL */

  scrollTopBtn.addEventListener("pointerenter", (event) => {
    if (event.pointerType === "mouse") {
      scrollTopBtn.classList.add("mouse-hover");
    }
  });

  scrollTopBtn.addEventListener("pointerleave", (event) => {
    if (event.pointerType === "mouse") {
      scrollTopBtn.classList.remove("mouse-hover");
    }
  });

  /* KATTINTÁS / KOPPINTÁS */

  scrollTopBtn.addEventListener("click", () => {
    scrollTopBtn.classList.remove("mouse-hover");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  /* INITIAL PAINT */

  updateScrollTopButton();
}
