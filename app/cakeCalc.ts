const cakeType = document.getElementById("cakeType") as HTMLSelectElement;
const cakeFilling = document.getElementById("cakeFilling") as HTMLSelectElement;
const cakeFilling2 = document.getElementById("cakeFilling2") as HTMLSelectElement;
const additionOfFruits = document.getElementById("additionOfFruits") as HTMLSelectElement;
const cakeFloors = document.getElementById("cakeFloors") as HTMLSelectElement;
const sliceNumber = document.getElementById("sliceNumber") as HTMLSelectElement;

const resultCalcText = document.getElementById("resultCalcText") as HTMLParagraphElement;

interface PriceTable {
  description: string,
  price: number
}

const cakeTypePriceTable: PriceTable[] = [
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

const cakeFillingPriceTable: PriceTable[] = [
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

const cakeFilling2PriceTable: PriceTable[] = [
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

const additionOfFruitsPriceTable: PriceTable[] = [
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

let cakeTypePrice: PriceTable = cakeTypePriceTable[0];
let cakeFillingPrice: PriceTable = cakeFillingPriceTable[0];
let cakeFilling2Price: PriceTable = cakeFilling2PriceTable[0];
let additionOfFruitsPrice: PriceTable = additionOfFruitsPriceTable[0];
let cakeFloorsPrice = 1.4;
let sliceNumberPrice = 15;

cakeType.addEventListener("input", () => {
  const cakeTypeSelected = cakeType.value.toLowerCase();

  cakeTypePriceTable.forEach((cake) => {
    if (cake.description.toLowerCase() === cakeTypeSelected) {
      cakeTypePrice = cake;
    }
  });

  updatePrice();
});

cakeFilling.addEventListener("input", () => {
  const cakeFillingSelected = cakeFilling.value.toLowerCase();

  cakeFillingPriceTable.forEach((filling) => {
    if (filling.description.toLowerCase() === cakeFillingSelected) {
      console.log(cakeFillingSelected)
      cakeFillingPrice = filling;
    }
  });

  updatePrice();
});

cakeFilling2.addEventListener("input", () => {
  const cakeFilling2Selected = cakeFilling2.value.toLowerCase();

  cakeFilling2PriceTable.forEach((filling) => {
    if (filling.description.toLowerCase() === cakeFilling2Selected) {
      cakeFilling2Price = filling;
    }
  });

  updatePrice();
});

additionOfFruits.addEventListener("input", () => {
  const additionOfFruitsSelected = additionOfFruits.value.toLowerCase();

  additionOfFruitsPriceTable.forEach((frute) => {
    if (frute.description.toLowerCase() === additionOfFruitsSelected) {
      additionOfFruitsPrice = frute;
    }
  });

  updatePrice();
});

cakeFloors.addEventListener("input", () => {
  cakeFloorsPrice = parseInt(cakeFloors.value);
  updatePrice();
});

sliceNumber.addEventListener('input', () => {
  sliceNumberPrice = parseInt(sliceNumber.value);
  updatePrice();
})

const sendInformation = document.querySelector('.sendInformation') as HTMLDivElement;
sendInformation.style.display = 'none';

const updatePrice = () => {
  const result =
    ((cakeTypePrice.price +
      cakeFillingPrice.price +
      cakeFilling2Price.price +
      additionOfFruitsPrice.price
    ) *
      sliceNumberPrice) * cakeFloorsPrice
    ;

  sendInformation.style.display = 'flex';
  resultCalcText.textContent = `R$ ${result.toFixed(2).replace(".", ",")}`;
};


const sendToClientCheckbox = document.getElementById("sendToClient") as HTMLInputElement;
const btnSendToClient = document.getElementById("sendBtnClient") as HTMLInputElement;

sendToClientCheckbox.addEventListener("input", () => {
  if (sendToClientCheckbox.checked) {
    btnSendToClient.style.display = "block";
  } else {
    btnSendToClient.style.display = "none";
  }
})
