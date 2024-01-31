const cakeType = document.getElementById("cakeType");
const cakeFilling = document.getElementById("cakeFilling");
const cakeFilling2 = document.getElementById("cakeFilling2");
const additionOfFruits = document.getElementById("additionOfFruits");
const cakeFloors = document.getElementById("cakeFloors");
const sliceNumber = document.getElementById("sliceNumber");

const resultCalcText = document.getElementById("resultCalcText");

const cakeTypePriceTable = [
  {
    description: "nacked cake",
    price: 1.5,
  },
  {
    description: "bolo vulcão",
    price: 1.8,
  },
  {
    description: "bolo decorado com chantilly",
    price: 2.0,
  },
  {
    description: "bolo decorado com chantininho",
    price: 2.2,
  },
  {
    description: "bolo decorado com brigadeiro",
    price: 2.5,
  },
];

const cakeFillingPriceTable = [
  {
    description: "Côco",
    price: 1.8,
  },
  {
    description: "Brigadeiro comum",
    price: 1.5,
  },
  {
    description: "Brigadeiro branco",
    price: 1.8,
  },
  {
    description: "Ninho",
    price: 1.2,
  },
  {
    description: "Doce de leite",
    price: 1.8,
  },
  {
    description: "Banana",
    price: 1.7,
  },
  {
    description: "Creme Belga",
    price: 2.9,
  },
  {
    description: "Nozes",
    price: 2.8,
  },
  {
    description: "Ganache",
    price: 1.8,
  },
  {
    description: "Amendoim",
    price: 1.5,
  },
  {
    description: "Creme de Abacaxi",
    price: 1.9,
  },
];

const cakeFilling2PriceTable = [
  {
    description: "Côco",
    price: 1.8,
  },
  {
    description: "Brigadeiro comum",
    price: 1.5,
  },
  {
    description: "Brigadeiro branco",
    price: 1.8,
  },
  {
    description: "Ninho",
    price: 1.2,
  },
  {
    description: "Doce de leite",
    price: 1.8,
  },
  {
    description: "Banana",
    price: 1.7,
  },
  {
    description: "Creme Belga",
    price: 2.9,
  },
  {
    description: "Nozes",
    price: 2.8,
  },
  {
    description: "Ganache",
    price: 1.8,
  },
  {
    description: "Amendoim",
    price: 1.5,
  },
  {
    description: "Creme de Abacaxi",
    price: 1.9,
  },
  {
    description: "Ninho (mousse)",
    price: 2.9,
  },
  {
    description: "Morango (mousse)",
    price: 2.1,
  },
  {
    description: "Limão (mousse)",
    price: 1.9,
  },
  {
    description: "Maracujá",
    price: 1.8,
  },
];

const additionOfFruitsPriceTable = [
  {
    description: "morango",
    price: 2.2,
  },
  {
    description: "uva",
    price: 2.7,
  },
  {
    description: "pêssego",
    price: 2.9,
  },
  {
    description: "abacaxi",
    price: 1.5,
  },
];

let cakeTypePrice = parseFloat(cakeTypePriceTable[0].price);
let cakeFillingPrice = parseFloat(cakeFillingPriceTable[0].price);
let cakeFilling2Price = 0;
let additionOfFruitsPrice = 0;
let cakeFloorsPrice = 1.4;
let sliceNumberPrice = 15;

cakeType.addEventListener("input", () => {
  const cakeTypeSelected = cakeType.value.toLowerCase();

  cakeTypePriceTable.forEach((cake) => {
    if (cake.description.toLowerCase() === cakeTypeSelected) {
      cakeTypePrice = parseFloat(cake.price);
    }
  });

  updatePrice();
});

cakeFilling.addEventListener("input", () => {
  const cakeFillingSelected = cakeFilling.value.toLowerCase();

  cakeFillingPriceTable.forEach((filling) => {
    if (filling.description.toLowerCase() === cakeFillingSelected) {
      cakeFillingPrice = parseFloat(filling.price);
    }
  });

  updatePrice();
});

cakeFilling2.addEventListener("input", () => {
  const cakeFilling2Selected = cakeFilling2.value.toLowerCase();
  console.log(cakeFilling2Selected);
  cakeFilling2PriceTable.forEach((filling) => {
    if (filling.description.toLowerCase() === cakeFilling2Selected) {
      cakeFilling2Price = parseFloat(filling.price);
    }
  });

  updatePrice();
});

additionOfFruits.addEventListener("input", () => {
  const additionOfFruitsSelected = additionOfFruits.value.toLowerCase();

  additionOfFruitsPriceTable.forEach((frute) => {
    if (frute.description.toLowerCase() === additionOfFruitsSelected) {
      additionOfFruitsPrice = parseFloat(frute.price);
    }
  });

  updatePrice();
});

cakeFloors.addEventListener("input", () => {
  cakeFloorsPrice = cakeFloors.value;
  updatePrice();
});

sliceNumber.addEventListener('input', () => {
  sliceNumberPrice = sliceNumber.value;
  updatePrice();
})

const updatePrice = () => {
  const result =
    ((cakeTypePrice +
      additionOfFruitsPrice +
      cakeFillingPrice +
      cakeFilling2Price) *
    sliceNumberPrice) * cakeFloorsPrice;
  resultCalcText.textContent = `R$ ${result.toFixed(2).replace(".", ",")}`;
};


const sendToClientCheckbox = document.getElementById("sendToClient");

sendToClientCheckbox.addEventListener("input", () => {
  if (sendToClientCheckbox.checked) {
    document.getElementById("sendBtnClient").style.display = "block";
  } else {
    document.getElementById("sendBtnClient").style.display = "none";
  }
})