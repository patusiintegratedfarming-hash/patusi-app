document.addEventListener("DOMContentLoaded", function () {
  const modules = document.querySelectorAll(".module");
    modules.forEach(function (module) {
         module.addEventListener("click", function () {
                const title = module.querySelector("h3");
                 if (title && title.textContent === "Farm Overview") {
                           document.getElementById("farm-overview-page").style.display = "block";
                           return;
                 }
               });
        });
  });
