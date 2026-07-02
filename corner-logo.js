const root = document.getElementById("corner-logo-root");

if (root) {
  root.innerHTML = `
    <div class="corner-logo" id="cornerLogo">
      <img src="corner-logo.png" alt="Corner Logo">
    </div>
  `;

  const logo = document.getElementById("cornerLogo");
  const compactQuery = window.matchMedia("(max-width: 1024px)");

  function isCompactLayout() {
    return compactQuery.matches;
  }

  function syncCornerLogoMode() {
    root.classList.toggle("touch-layout", isCompactLayout());

    /* Asztali nézetre váltva ne maradjon nyitva. */
    if (!isCompactLayout()) {
      root.classList.remove("is-open");
    }
  }

  /*
    Mobil + tablet:
    kizárólag magára a logóra koppintva vált CL1 és CL2 között.
    A háttérre koppintás nem csinál semmit.
  */
  logo.addEventListener("click", (event) => {
    if (!isCompactLayout()) return;

    event.preventDefault();
    event.stopPropagation();

    root.classList.toggle("is-open");
  });

  syncCornerLogoMode();

  if (typeof compactQuery.addEventListener === "function") {
    compactQuery.addEventListener("change", syncCornerLogoMode);
  } else {
    compactQuery.addListener(syncCornerLogoMode);
  }

  window.addEventListener("resize", syncCornerLogoMode);
}
