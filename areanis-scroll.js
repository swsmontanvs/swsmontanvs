const scrollSword = document.getElementById("scrollSword");

if (scrollSword) {

  function toggleVisibility() {
    if (window.scrollY > 400) {
      scrollSword.classList.add("is-visible");
    } else {
      scrollSword.classList.remove("is-visible");
    }
  }

  window.addEventListener("scroll", toggleVisibility);

  scrollSword.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

}
