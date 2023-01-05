"use strict";

function doCalculation() {
  let basicCarPrice = parseFloat(document.getElementById("carBrand").value);
  let carPrice = basicCarPrice;
  if (document.getElementById("laquer").checked) {
    carPrice *= 1.05;
  } else if (document.getElementById("metalic").checked) {
    carPrice *= 1.07;
  }
  if (document.getElementById("cameras").checked) {
    carPrice += 10000;
  }
  if (document.getElementById("wheels").checked) {
    carPrice += 20000;
  }
  if (document.getElementById("seats").checked) {
    carPrice += 50000;
  }
  if (document.getElementById("tuning").checked) {
    carPrice += basicCarPrice * 0.2;
  }
  document.getElementById("finalPrice").value = carPrice;
}

function isAffordable() {
  let msg = "";
  if (
    document.getElementById("finalPrice").value <=
    document.getElementById("budget").value
  ) {
    msg = "Nabídková cena vozu se vejde do Vaší představy o ceně";
  } else {
    msg = "Nabídková cena vozu je vyšší než Vaše představa o ceně";
  }
  document.getElementById("affordable").value = msg;
}

function doValidation() {
  if (document.getElementById("email").value.indexOf("@") < 1) {
    alert("Zadejte prosím Váš email ve správném formátu");
  }
}
