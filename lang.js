// aktuális nyelv lekérése
function getLanguage() {
  let lang = localStorage.getItem("lang");

  if (!lang) {
    // automatikus beállítás
    if (navigator.language.startsWith("hu")) {
      lang = "hu";
    } else {
      lang = "en";
    }

    localStorage.setItem("lang", lang);
  }

  return lang;
}

// nyelv beállítása
function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  console.log("Language switched to:", lang);
}

// indításkor
const currentLang = getLanguage();
console.log("Current language:", currentLang);
