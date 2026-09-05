document.addEventListener("DOMContentLoaded", function () {
  alert("PATUSI JavaScript is working");

  const modules = document.querySelectorAll(".module");

  modules.forEach(function (module) {
    module.addEventListener("click", function () {
      alert("Farm Overview clicked");
      const title = module.querySelector("h3");

      if (title && title.textContent.trim() === "Farm Overview") {
        document.getElementById("farm-overview-page").style.display = "block";
      }
    });
  });
});
