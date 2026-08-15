const scrollTopBtn = document.getElementById("scrollTopBtn");

if (scrollTopBtn) {

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


  /* =====================================================
     DESKTOP – EGÉR HOVER
     ===================================================== */

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


  /* =====================================================
     MOBIL / TABLET – UJJ LENYOMVA
     ===================================================== */

  scrollTopBtn.addEventListener("pointerdown", (event) => {
    if (event.pointerType !== "mouse") {
      scrollTopBtn.classList.add("touch-active");
    }
  });

  scrollTopBtn.addEventListener("pointerup", (event) => {
    if (event.pointerType !== "mouse") {
      scrollTopBtn.classList.remove("touch-active");
    }
  });

  scrollTopBtn.addEventListener("pointercancel", () => {
    scrollTopBtn.classList.remove("touch-active");
  });


  /* =====================================================
     KATTINTÁS / KOPPINTÁS
     ===================================================== */

  scrollTopBtn.addEventListener("click", () => {
    scrollTopBtn.classList.remove("mouse-hover");
    scrollTopBtn.classList.remove("touch-active");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });


  /* INITIAL PAINT */

  updateScrollTopButton();
}
