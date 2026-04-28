document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".content-logo-img");

  let isActive = false;
  let cooldownTimer = null;

  logo.addEventListener("mouseenter", () => {
    if (isActive) return; // már aktív → ne indítsuk újra

    isActive = true;
    clearTimeout(cooldownTimer);

    logo.classList.remove("cooldown");
    logo.classList.add("active");
  });

  logo.addEventListener("mouseleave", () => {
    if (!isActive) return;

    isActive = false;

    logo.classList.remove("active");
    logo.classList.add("cooldown");

    cooldownTimer = setTimeout(() => {
      logo.classList.remove("cooldown");
    }, 800);
  });
});
