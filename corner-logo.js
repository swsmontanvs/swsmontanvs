const root = document.getElementById("corner-logo-root");

if (root) {
  root.innerHTML = `
    <div class="corner-logo" id="cornerLogo">
      <img src="corner-logo.png" alt="Corner Logo">
    </div>
  `;

  const logo = document.getElementById("cornerLogo");

  /*
    Telefon + tablet:
    elsődleges érintéses eszközök.
    Desktopon false marad, ott a hover működik.
  */
  const touchQuery = window.matchMedia(
    "(hover: none) and (pointer: coarse)"
  );

  function isTouchDevice() {
    return touchQuery.matches;
  }

  function updateInteractionMode() {
    const touchMode = isTouchDevice();

    root.classList.toggle("touch-mode", touchMode);

    /*
      Ha például átméretezéskor desktop módba kerül,
      ne maradjon nyitott állapotban.
    */
    if (!touchMode) {
      root.classList.remove("is-open");
    }
  }

  /*
    Mobilon és tableten:
    csak magára a corner logóra koppintva nyílik/csukódik.
    A háttérre koppintás semmit nem csinál.
  */
  logo.addEventListener("click", (event) => {
    if (!isTouchDevice()) return;

    event.stopPropagation();
    root.classList.toggle("is-open");
  });

  updateInteractionMode();

  if (typeof touchQuery.addEventListener === "function") {
    touchQuery.addEventListener("change", updateInteractionMode);
  } else {
    touchQuery.addListener(updateInteractionMode);
  }

  window.addEventListener("resize", updateInteractionMode);
}
