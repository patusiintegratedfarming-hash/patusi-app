document.addEventListener("DOMContentLoaded", function () {

  //  saved bird total when the app loads
  function restoreBirdTotal() {
    const savedBirds = localStorage.getItem("patusiTotalBirds");
    const totalBirds = document.getElementById("total-birds");

    if (savedBirds !== null && totalBirds) {
      totalBirds.textContent = savedBirds;
    }
    const poultryStock = document.getElementById("poultry-stock");

if (savedBirds !== null && poultryStock) {
  poultryStock.textContent = savedBirds;
}
  }
const savedEggs = localStorage.getItem("patusiEggsToday");
  const savedFeed = localStorage.getItem("patusiFeedUsed");
const feedUsedDisplay = document.getElementById("feed-used");

if (savedFeed !== null && feedUsedDisplay) {
  feedUsedDisplay.textContent = savedFeed + " kg";
}
const eggsToday = document.getElementById("eggs-today");

if (savedEggs !== null && eggsToday) {
  eggsToday.textContent = savedEggs;
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
        const savedEggs = localStorage.getItem("patusiEggsToday");
const eggsToday = document.getElementById("eggs-today");

if (savedEggs !== null && eggsToday) {
  eggsToday.textContent = savedEggs;
}
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
        const poultryStock = document.getElementById("poultry-stock");

        if (poultryStock) {
          poultryStock.textContent = numberOfBirds;
        }
        alert("Bird record saved successfully.");

      } else {

        alert("Please enter the number of birds.");

      }

    });

  }

});
// Egg Production
const eggButton = document.getElementById("egg-production-button");
const eggForm = document.getElementById("egg-form");
const saveEggButton = document.getElementById("save-egg-button");
const eggNumber = document.getElementById("egg-number");

if (eggButton && eggForm) {
  eggButton.addEventListener("click", function () {
    eggForm.style.display = "block";
  });
}

if (saveEggButton && eggNumber) {
  saveEggButton.addEventListener("click", function () {
    const eggs = eggNumber.value;

    if (eggs !== "") {
      localStorage.setItem("patusiEggsToday", eggs);
      alert("Egg production saved successfully.");
    } else {
      alert("Please enter the number of eggs.");
    }
  });
     }
// Feed Records
const feedButton = document.getElementById("feed-record-button");
const feedForm = document.getElementById("feed-form");
const saveFeedButton = document.getElementById("save-feed-button");
const feedAmount = document.getElementById("feed-amount");

if (feedButton && feedForm) {
  feedButton.addEventListener("click", function () {
    feedForm.style.display = "block";
  });
}

if (saveFeedButton && feedAmount) {
  saveFeedButton.addEventListener("click", function () {
    const feedUsed = feedAmount.value;
const feedUsedDisplay = document.getElementById("feed-used");

if (feedUsedDisplay) {
  feedUsedDisplay.textContent = feedUsed + " kg";
}
    if (feedUsed !== "") {
      localStorage.setItem("patusiFeedUsed", feedUsed);
      alert("Feed record saved successfully.");
    } else {
      alert("Please enter the feed amount.");
    }
  });
}
