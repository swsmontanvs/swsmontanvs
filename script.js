const bg = document.querySelector(".hero-bg");
const homeLink = document.querySelector(".home-link");
const hero = document.querySelector(".hero");
const scrollTopBtn = document.getElementById("scrollTopBtn");

let ticking = false;

let mobile = isMobile();

function isMobile() {
  return window.innerWidth <= 768;
}

function updateScene() {
  const scrollY = window.scrollY;
  const heroHeight = hero ? hero.offsetHeight : window.innerHeight;

  /* BACKGROUND PARALLAX */
  const bgTranslate = -scrollY * 0.2;
  /* const bgScale = isMobile() ? 1 : 1 + scrollY * 0.00005; */
  const bgScale = mobile ? 1 : 1 + scrollY * 0.00005;
  const bgBlur = Math.min(scrollY * 0.002, 3);

  if (bg) {
    bg.style.transform = `translate3d(0, ${bgTranslate}px, 0) scale(${bgScale})`;
    bg.style.filter = `blur(${bgBlur}px)`;
  }


  /* HOME LINK MOTION */
  if (homeLink) {
    if (isMobile()) {
      let progress = Math.min(scrollY / heroHeight, 1);
      progress = Math.max((progress - 0.7) / 0.3, 0);

      const topStart = 78;
      const topEnd = 24;
      const topPos = topStart - (topStart - topEnd) * progress;

      const leftStart = 50;
      const leftEnd = 20;
      const leftPos = leftStart - (leftStart - leftEnd) * progress;

      const scale = 1 - progress * 0.34;

      homeLink.style.top = `${topPos}px`;
      homeLink.style.left = `${leftPos}%`;
      homeLink.style.transform = `translateX(-50%) scale(${scale})`;
    } else {
      let progress = Math.min(scrollY / (heroHeight + 1000), 1);
      progress = Math.max((progress - 0.2) / 0.8, 0);

      const topStart = 30;
      const topEnd = 15;
      const leftStart = 80;
      const leftEnd = 15;
      const scale = 1 - progress * 0.4;

      const topPos = topStart - (topStart - topEnd) * progress;
      const leftPos = leftStart - (leftStart - leftEnd) * progress;

      homeLink.style.top = `${topPos}px`;
      homeLink.style.left = `${leftPos}px`;
      homeLink.style.transform = `scale(${scale})`;
    }
  }

  /* SCROLL TOP BUTTON */
  if (scrollTopBtn) {
    scrollTopBtn.classList.toggle("is-visible", scrollY > 400);
  }

  ticking = false;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(updateScene);
    ticking = true;
  }
});

/* window.addEventListener("resize", () => {
  updateScene();
}); */

window.addEventListener("resize", () => {
  mobile = isMobile();   /* 🔥 EZ AZ ÚJ */
  updateScene();
});

if (scrollTopBtn) {
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}


/* INITIAL PAINT */
updateScene();
