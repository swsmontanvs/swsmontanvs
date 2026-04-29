document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".content-logo-img");
  if (!logo) return;

  let cooldownTimer = null;

  logo.addEventListener("mouseenter", () => {
    clearTimeout(cooldownTimer);

    logo.classList.remove("cooldown");
    logo.classList.add("active");
  });

  logo.addEventListener("mouseleave", () => {
    logo.classList.remove("active");
    logo.classList.add("cooldown");

    cooldownTimer = setTimeout(() => {
      logo.classList.remove("cooldown");
    }, 2500); // 🔥 ez egyezzen az animációval
  });
});
