const rawMaterials = document.getElementById("rawMaterials");
const directLabor = document.getElementById("directLabor");
const shippingCost = document.getElementById("shippingCost");
const jobHours = document.getElementById("jobHours");
const materialsMarkup = document.getElementById("materialsMarkup");
const laborMarkup = document.getElementById("laborMarkup");
const calculateButton = document.getElementById("calculate");
const finalTotal = document.getElementById("final-total");

function calculator(e) {
  e.preventDefault();
  const rawMaterialVal = parseFloat(rawMaterials.value);
  const directLaborVal = parseFloat(directLabor.value);
  const shippingCostVal = parseFloat(shippingCost.value);
  const jobHoursVal = parseFloat(jobHours.value);
  const materialsMarkupVal = parseFloat(materialsMarkup.value);
  const laborMarkupVal = parseFloat(laborMarkup.value);

  const arr = [
    rawMaterialVal,
    directLaborVal,
    shippingCostVal,
    jobHoursVal,
    materialsMarkupVal,
    laborMarkupVal,
  ];

  //   const totalAmount = arr.reduce((partialSum, a) => partialSum + a, 0);
  //   finalTotal.textContent = "$" + totalAmount;
  // }

  function calculateGrossHourly(
    rawMaterialVal,
    directLaborVal,
    shippingCostVal,
    jobHoursVal,
    materialsMarkupVal,
    laborMarkupVal
  ) {
    const materialsCost = rawMaterialVal / (1 - materialsMarkupVal);
    const laborAndMarkup = directLaborVal / (1 - laborMarkupVal);
    const shippingCost = shippingCostVal;
    const grossTotal = materialsCost + laborAndMarkup + shippingCost;
    const grossHourlyTotal = grossTotal / jobHoursVal;
    grossHourlyTotal.textContent = "$" + totalAmount;
  }

  // function calculateMinHourly(rawMaterialVal, directLaborVal, jobHoursVal, shippingCostVal) {
  //   const materialsCost = rawMaterialVal;
  //   const laborCost = directLaborVal * jobHoursVal;
  //   const shippingCost = shippingCostVal;
  //   const hourlyCost = materialsCost + laborCost + shippingCost;
  //   const minHourlyTotal = hourlyCost / jobHoursVal;
  //   minHourlyTotal.textContent = "$ + totalAmount";
  // }
}

console.log(calculateGrossHourly);

calculateButton.addEventListener("submit", calculator);

document.getElementById("calculate")
  .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      document.getElementById("calculate").click();
    }
  });
