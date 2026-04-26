const root = document.getElementById("corner-logo-root");

function isMobile() {
  return window.innerWidth <= 768;
}

if (root) {
  root.innerHTML = `
    <div class="corner-logo" id="cornerLogo">
      <img src="corner-logo.png" alt="Corner Logo">
    </div>
  `;

  const logo = document.getElementById("cornerLogo");

  function setupBehavior() {

    // 🔥 MINDIG TÖRLÜNK ELŐZŐ ESEMÉNYT
    logo.replaceWith(logo.cloneNode(true));
    const newLogo = document.getElementById("cornerLogo");

    if (isMobile()) {
      // 📱 MOBIL → CSAK KATTINTÁS
      newLogo.addEventListener("click", (e) => {
        e.stopPropagation();
        newLogo.classList.toggle("is-open");
        root.classList.toggle("is-open");
      });

setTimeout(() => {
  document.addEventListener("click", () => {
    newLogo.classList.remove("is-open");
    root.classList.remove("is-open");
  });
}, 50);

    } else {
      // 🖥️ DESKTOP → SEMMI CLICK
      newLogo.classList.remove("is-open");
      root.classList.remove("is-open");
    }
  }

  setupBehavior();

  window.addEventListener("resize", setupBehavior);
}
