const rawMaterials = document.getElementById("rawMaterials");
const directLabor = document.getElementById("directLabor");
const shippingCost = document.getElementById("shippingCost");
const salesCommission = document.getElementById("salesCommission");
const calculateButton = document.getElementById("calculate");

function sumCalculator() {
  const arr = [
    "rawMaterials",
    "directLabor",
    "shippingCost",
    "salesCommission",
  ];

  const initialValue = 0;
  const sumWithInitial = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  console.log(sumWithInitial);
}
