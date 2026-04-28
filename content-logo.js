document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".content-logo-img");

  logo.addEventListener("mouseenter", () => {
    logo.classList.add("active");
  });

  logo.addEventListener("mouseleave", () => {
    logo.classList.remove("active");
  });
});
