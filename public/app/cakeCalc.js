"use strict";
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
let cakeTypePrice = cakeTypePriceTable[0];
let cakeFillingPrice = cakeFillingPriceTable[0];
let cakeFilling2Price = cakeFilling2PriceTable[0];
let additionOfFruitsPrice = additionOfFruitsPriceTable[0];
let cakeFloorsPrice = 1;
let sliceNumberPrice = 15;
const formatMoney = (value) => {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(value);
};
const formatPhone = (value) => {
    return value.replace(/[^0-9]/g, "");
};
cakeType.addEventListener("input", () => {
    const cakeTypeSelected = cakeType.value.toLowerCase();
    cakeTypePrice = cakeTypePriceTable.find(cake => cake.description.toLowerCase() === cakeTypeSelected);
    updatePrice();
});
cakeFilling.addEventListener("input", () => {
    const cakeFillingSelected = cakeFilling.value.toLowerCase();
    cakeFillingPrice = cakeFilling2PriceTable.find(filling => filling.description.toLowerCase() === cakeFillingSelected);
    updatePrice();
});
cakeFilling2.addEventListener("input", () => {
    const cakeFilling2Selected = cakeFilling2.value.toLowerCase();
    cakeFilling2Price = cakeFilling2PriceTable.find(filling => filling.description.toLowerCase() === cakeFilling2Selected);
    updatePrice();
});
additionOfFruits.addEventListener("input", () => {
    const additionOfFruitsSelected = additionOfFruits.value.toLowerCase();
    additionOfFruitsPrice = additionOfFruitsPriceTable.find(frute => frute.description.toLowerCase() === additionOfFruitsSelected);
    updatePrice();
});
cakeFloors.addEventListener("input", () => {
    if (cakeFloors.value === "1") {
        cakeFloorsPrice = 1;
    }
    else if (cakeFloors.value === "2") {
        cakeFloorsPrice = 1.4;
    }
    else if (cakeFloors.value === "3") {
        cakeFloorsPrice = 1.8;
    }
    updatePrice();
});
sliceNumber.addEventListener('input', () => {
    sliceNumberPrice = parseInt(sliceNumber.value);
    updatePrice();
});
const sendInformation = document.querySelector('.sendInformation');
sendInformation.style.display = 'none';
const btnSendToClient = document.getElementById("sendBtnClient");
const btnSendToCompany = document.querySelector("#sendBtnCompany");
const sendToClientCheckbox = document.getElementById("sendToClient");
sendToClientCheckbox.addEventListener("input", () => {
    if (sendToClientCheckbox.checked) {
        btnSendToClient.style.display = "block";
    }
    else {
        btnSendToClient.style.display = "none";
    }
});
const clientNameInput = document.querySelector('#clientName');
let clientName = '';
clientNameInput.addEventListener('input', () => {
    clientName = clientNameInput.value;
});
const clientPhoneInput = document.querySelector('#clientPhone');
let clientPhone = '';
clientPhoneInput.addEventListener('input', () => {
    clientPhone = clientPhoneInput.value;
});
const updatePrice = () => {
    const cakeTotalPrice = ((cakeTypePrice.price +
        cakeFillingPrice.price +
        cakeFilling2Price.price +
        additionOfFruitsPrice.price) *
        sliceNumberPrice) * cakeFloorsPrice;
    console.log(companyMessage(cakeTotalPrice));
    sendInformation.style.display = 'flex';
    if (sendToClientCheckbox.checked) {
        console.log(clientMessage(cakeTotalPrice));
        btnSendToClient.href = `https://wa.me/${formatPhone(clientPhone)}?text=${companyMessage(cakeTotalPrice)}`;
    }
    resultCalcText.textContent = `${formatMoney(cakeTotalPrice)}`;
};
const companyMessage = (cakeTotalPrice) => {
    return `Orçamento do(a) ${clientName} com telefone https://wa.me/${formatPhone(clientPhone)}. 
  Tipo de bolo: ${cakeType.value} (R$ ${formatMoney(cakeTypePrice.price)}),
  Recheio: ${cakeFilling.value} (R$ ${formatMoney(cakeFillingPrice.price)}),
  Recheio adicional: ${cakeFilling2.value} (R$ ${formatMoney(cakeFilling2Price.price)}),
  Adicional de frutas: ${additionOfFruits.value} (R$ ${formatMoney(additionOfFruitsPrice.price)}),
  ${cakeFloors.value === "1" ? "Andar" : "Andares"}: ${cakeFloors.value} (R$ ${formatMoney(cakeFloorsPrice)}),
  Fatias: ${sliceNumber.value} (R$ ${formatMoney(sliceNumberPrice)}),
  Total: (R$ ${formatMoney(cakeTotalPrice)})`;
};
const clientMessage = (cakeTotalPrice) => {
    return `Olá ${clientName}, segue a descrição do orçamento: 
    Bolo do tipo ${cakeType.value} 
    com recheio de ${cakeFilling.value}
    ${cakeFilling2.value !== "" ? ` recheio adicional de ${cakeFilling2.value}` : ""}
    ${additionOfFruits.value !== "" ? ` com acréscimo de ${additionOfFruits.value}` : ""}.
    O bolo terá ${cakeFloors.value} ${cakeFloors.value === "1" ? "andar" : "andares"} 
    e poderá ser servido em ${sliceNumberPrice} fatias. 
    O valor total do bolo ficou em R$ ${formatMoney(cakeTotalPrice)}.
    `;
};
