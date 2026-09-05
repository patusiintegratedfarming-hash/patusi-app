document.addEventListener("DOMContentLoaded", function () {

  // Restore saved bird total when the app loads
  function restoreBirdTotal() {
    const savedBirds = localStorage.getItem("patusiTotalBirds");
    const totalBirds = document.getElementById("total-birds");

    if (savedBirds !== null && totalBirds) {
      totalBirds.textContent = savedBirds;
    }
  }

  // Restore immediately
  restoreBirdTotal();

  const modules = document.querySelectorAll(".module");

  modules.forEach(function (module) {

    module.addEventListener("click", function () {

      const title = module.querySelector("h3");

      // Farm Overview
      if (title && title.textContent.trim() === "Farm Overview") {

        const main = document.querySelector("main");
        const farmPage = document.getElementById("farm-overview-page");

        if (main) main.style.display = "none";
        if (farmPage) farmPage.style.display = "block";
      }

      // Poultry / Layers
      if (title && title.textContent.trim() === "Poultry / Layers") {

        const farmPage = document.getElementById("farm-overview-page");
        const poultryPage = document.getElementById("poultry-page");

        if (farmPage) farmPage.style.display = "none";
        if (poultryPage) poultryPage.style.display = "block";

        // Restore saved total whenever Poultry opens
        restoreBirdTotal();
      }

      // Birds
      if (title && title.textContent.trim() === "Birds") {

        const form = document.getElementById("bird-form");

        if (form) {
          form.style.display = "block";
        }
      }

    });

  });

  // Save Bird Record
  const saveBirdButton = document.querySelector("#bird-form button");

  if (saveBirdButton) {

    saveBirdButton.addEventListener("click", function () {

      const inputs = document.querySelectorAll("#bird-form input");

      const breedInput = inputs[0];
      const numberInput = inputs[1];
      const ageInput = inputs[2];

      const breed = breedInput ? breedInput.value : "";
      const numberOfBirds = numberInput ? numberInput.value : "";
      const age = ageInput ? ageInput.value : "";

      if (numberOfBirds !== "") {

        // Save the bird information
        localStorage.setItem("patusiBirdBreed", breed);
        localStorage.setItem("patusiTotalBirds", numberOfBirds);
        localStorage.setItem("patusiBirdAge", age);

        // Update Total Birds on screen
        const totalBirds = document.getElementById("total-birds");

        if (totalBirds) {
          totalBirds.textContent = numberOfBirds;
        }

        alert("Bird record saved successfully.");

      } else {

        alert("Please enter the number of birds.");

      }

    });

  }

});
