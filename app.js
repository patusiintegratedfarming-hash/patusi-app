document.addEventListener("DOMContentLoaded", function () {
  alert("PATUSI JavaScript is working");

  const modules = document.querySelectorAll(".module");

  modules.forEach(function (module) {
    module.addEventListener("click", function () {
      alert("Farm Overview clicked");
      const title = module.querySelector("h3");
alert("Title is: [" + title.textContent.trim() + "]");
      if (title && title.textContent.trim() === "Farm Overview") {
        alert("Page found: " + !!document.getElementById("farm-overview-page"));
        document.getElementById("farm-overview-page").style.display = "block";
      }
    });
  });
});
