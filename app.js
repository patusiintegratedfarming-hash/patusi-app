// PATUSI Integrated Farming App
console.log("PATUSI App connected successfully");
// PATUSI Navigation
document.addEventListener("DOMContentLoaded", function () {
  const modules = document.querySelectorAll(".module");
  modules.forEach(function (module) {
    module.addEventListener("click", function () {
      const title = module.querySelector("h3");
      if (title) {
        alert(title.textContent + " section selected");
        });
      });
    });
