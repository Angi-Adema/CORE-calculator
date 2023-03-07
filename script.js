const rawMaterials = document.getElementById("rawMaterials");
const directLabor = document.getElementById("directLabor");
const shippingCost = document.getElementById("shippingCost");
const salesCommission = document.getElementById("salesCommission");
const calculateButton = document.getElementById("calculate");
const finalTotal = document.getElementById("final-total");

function sumCalculator(e) {
  e.preventDefault();
  const rawMaterialVal = parseFloat(rawMaterials.value);
  const directLaborVal = parseFloat(directLabor.value);
  const shippingCostVal = parseFloat(shippingCost.value);
  const salesCommissionVal = parseFloat(salesCommission.value);

  const arr = [
    rawMaterialVal,
    directLaborVal,
    shippingCostVal,
    salesCommissionVal,
  ];

  const totalAmount = arr.reduce((partialSum, a) => partialSum + a, 0);
  finalTotal.textContent = "$" + totalAmount;
}

calculateButton.addEventListener("submit", sumCalculator);
