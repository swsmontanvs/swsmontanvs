const root = document.getElementById("corner-logo-root");

if (root) {
  root.innerHTML = `
    <div class="corner-logo" id="cornerLogo">
      <img src="corner-logo.png" alt="Corner Logo">
    </div>
  `;

  const logo = document.getElementById("cornerLogo");

  logo.addEventListener("click", (e) => {
    e.stopPropagation();
    logo.classList.toggle("is-open");
  });

  document.addEventListener("click", () => {
    logo.classList.remove("is-open");
  });
}
