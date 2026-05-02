document.addEventListener("DOMContentLoaded", () => {

  const items = document.querySelectorAll(".areanis-item");

  items.forEach((item, index) => {

    item.addEventListener("click", () => {

      // ide jön majd a valódi tartalom
      console.log("Megnyitva:", index);

      // ide később:
      // modal
      // jelenet betöltés
      // szöveg megjelenítés
      // videó indítás

    });

  });

});
