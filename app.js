document.addEventListener("DOMContentLoaded", function () {

  const modules = document.querySelectorAll(".module");

  modules.forEach(function (module) {

    module.addEventListener("click", function () {

      const title = module.querySelector("h3");

      if (title && title.textContent.trim() === "Farm Overview") {

        document.querySelector("main").style.display = "none";

        document.getElementById("farm-overview-page").style.display = "block";

      }

    });

  });
    if (title && title.textContent.trim() === "Poultry / Layers") {

      document.getElementById("farm-overview-page").style.display = "none";

      document.getElementById("poultry-page").style.display = "block";

    }
});
