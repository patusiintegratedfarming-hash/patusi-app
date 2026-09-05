document.addEventListener("DOMContentLoaded", function () {
    const savedBirds = localStorage.getItem("patusiTotalBirds");
  const totalBirds = document.getElementById("total-birds");

  if (savedBirds && totalBirds) {
    totalBirds.textContent = savedBirds;
  }

  const modules = document.querySelectorAll(".module");

  modules.forEach(function (module) {

    module.addEventListener("click", function () {

      const title = module.querySelector("h3");

      if (title && title.textContent.trim() === "Farm Overview") {

        document.querySelector("main").style.display = "none";

        document.getElementById("farm-overview-page").style.display = "block";

      }
      if (title && title.textContent.trim() === "Poultry / Layers") {

        document.getElementById("farm-overview-page").style.display = "none";

        document.getElementById("poultry-page").style.display = "block";

      }
            const addBirdButton = module.querySelector("button");

      if (title && title.textContent.trim() === "Birds" && addBirdButton) {

        addBirdButton.addEventListener("click", function () {

          const form = document.getElementById("bird-form");

          if (form) {
            form.style.display = "block";
          }

        });

      }
    });

  });
  const saveBirdButton = document.querySelector("#bird-form button");

  if (saveBirdButton) {

    saveBirdButton.addEventListener("click", function () {
      const numberInput = document.querySelector("#bird-form input[type='number']");

      if (numberInput) {
        const totalBirds = document.getElementById("total-birds");

        if (totalBirds) {
          totalBirds.textContent = numberInput.value;
                    localStorage.setItem("patusiTotalBirds", numberInput.value);
        }
      }
      alert("Bird record saved successfully.");

    });

  }
});
