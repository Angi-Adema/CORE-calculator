const rawMaterials = document.getElementById("rawMaterials");
const directLabor = document.getElementById("directLabor");
const shippingCost = document.getElementById("shippingCost");
const jobHours = document.getElementById("jobHours");
const materialsMarkup = document.getElementById("materialsMarkup");
const laborMarkup = document.getElementById("laborMarkup");
const calculateButton = document.getElementById("calculate");
const finalGrossTotal = document.getElementById("final-gross-total");
const finalMinTotal = document.getElementById("final-hourly-total");
const finalProfitPerHour = document.getElementById("profit-per-hour");
const flatRatePrice = document.getElementById("flat-rate-price");

function calculator(e) {
  e.preventDefault();
  // initial values from HTML
  const rawMaterialVal = parseFloat(rawMaterials.value);
  const directLaborVal = parseFloat(directLabor.value);
  const shippingCostVal = parseFloat(shippingCost.value);
  const jobHoursVal = parseFloat(jobHours.value);
  const materialsMarkupVal = parseFloat(materialsMarkup.value);
  const markupPercentage = 1 - materialsMarkupVal / 100;
  const laborMarkupVal = parseFloat(laborMarkup.value);
  const laborPercentage = 1 - laborMarkupVal / 100;

  // calculated GROSS values
  const materialsCost = Number(parseFloat(rawMaterialVal / markupPercentage));

  const laborAndMarkup = Number(
    parseFloat(directLaborVal / laborPercentage) * jobHoursVal
  );

  const grossTotal = parseFloat(
    materialsCost + laborAndMarkup + shippingCostVal
  );
  const grossHourlyTotal = Number(parseFloat(grossTotal / jobHoursVal));

  // calculated MIN values
  const laborCost = parseFloat(directLaborVal * jobHoursVal);
  const hourlyCost =
    rawMaterialVal + parseFloat(directLaborVal * jobHoursVal) + shippingCostVal;
  const minHourlyTotal = parseFloat(hourlyCost / jobHoursVal);

  // FINAL Profit
  const profitPerHour = Number(grossHourlyTotal - minHourlyTotal);

  // Flat Rate Price
  const flatRate = Number(parseFloat(grossHourlyTotal * jobHoursVal));

  // Return zero instead of "NaN" when only zeros are entered
  if (
    rawMaterialVal === 0 &&
    directLaborVal === 0 &&
    materialsMarkupVal === 0 &&
    laborMarkupVal === 0
  ) {
    finalGrossTotal.textContent = "$0.00";
    finalMinTotal.textContent = "$0.00";
    finalProfitPerHour.textContent = "$0.00";
    flatRatePrice.textContent = "$0.00";
    return;
  }

  // FINAL AMOUNTS FOR HTML

  finalGrossTotal.textContent =
    "$" +
    Number(parseFloat(grossHourlyTotal))
      .toFixed(2)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  finalMinTotal.textContent =
    "$" +
    Number(parseFloat(minHourlyTotal))
      .toFixed(2)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  finalProfitPerHour.textContent =
    "$" +
    Number(parseFloat(profitPerHour))
      .toFixed(2)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  flatRatePrice.textContent =
    "$" + flatRate.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// let string = '%'
calculateButton.addEventListener("submit", calculator);
// materialsMarkup.addEventListener('input', function(){
//   this.value = string.replace('%', '') + '%'

// })

document
  .getElementById("calculate")
  .addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      document.getElementById("calculate").click();
    }
  });
