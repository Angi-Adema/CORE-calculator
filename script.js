const rawMaterials = document.getElementById("rawMaterials");
const directLabor = document.getElementById("directLabor");
const shippingCost = document.getElementById("shippingCost");
const salesCommission = document.getElementById("salesCommission");
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
  const salesCommissionVal = parseFloat(salesCommission.value);
  const jobHoursVal = parseFloat();

  const arr = [
    rawMaterialVal,
    directLaborVal,
    shippingCostVal,
    salesCommissionVal,
  ];

  const totalAmount = arr.reduce((partialSum, a) => partialSum + a, 0);
  finalTotal.textContent = "$" + totalAmount;
}

calculateButton.addEventListener("submit", calculator);
