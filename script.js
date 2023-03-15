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
  const materialsCost = Number((rawMaterialVal / markupPercentage).toFixed(2));
  const laborAndMarkup = Number(
    ((directLaborVal / laborPercentage) * jobHoursVal).toFixed(2)
  );

  const grossTotal = materialsCost + laborAndMarkup + shippingCostVal;
  const grossHourlyTotal = Number((grossTotal / jobHoursVal).toFixed(2));

  // calculated MIN values

  const laborCost = directLaborVal * jobHoursVal;
  const hourlyCost = rawMaterialVal + laborCost + shippingCostVal;
  const minHourlyTotal = hourlyCost / jobHoursVal;

  // FINAL Profit
  const profitPerHour = Number((grossHourlyTotal - minHourlyTotal).toFixed(2));

  // Flat Rate Price
  const flatRate = Number((grossHourlyTotal * jobHoursVal).toFixed(2));

  // FINAL AMOUNTS FOR HTML

  finalGrossTotal.textContent = "$" + grossHourlyTotal;
  finalMinTotal.textContent = "$" + minHourlyTotal;
  finalProfitPerHour.textContent = "$" + profitPerHour;
  flatRatePrice.textContent = "$" + flatRate;
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
