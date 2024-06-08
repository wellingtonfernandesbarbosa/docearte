"use strict";
// const cakeType = document.getElementById("cakeType") as HTMLSelectElement;
// const cakeFilling = document.getElementById("cakeFilling") as HTMLSelectElement;
// const cakeFilling2 = document.getElementById("cakeFilling2") as HTMLSelectElement;
// const additionOfFruits = document.getElementById("additionOfFruits") as HTMLSelectElement;
// const cakeFloors = document.getElementById("cakeFloors") as HTMLSelectElement;
// const sliceNumber = document.getElementById("sliceNumber") as HTMLSelectElement;
// const resultCalcText = document.getElementById("resultCalcText") as HTMLParagraphElement;
// interface PriceTable {
//   description: string,
//   price: number
// }
// const cakeTypePriceTable: PriceTable[] = [
//   {
//     description: "nacked cake",
//     price: 1.5,
//   },
//   {
//     description: "bolo vulcão",
//     price: 1.8,
//   },
//   {
//     description: "bolo decorado com chantilly",
//     price: 2.0,
//   },
//   {
//     description: "bolo decorado com chantininho",
//     price: 2.2,
//   },
//   {
//     description: "bolo decorado com brigadeiro",
//     price: 2.5,
//   },
// ];
// const cakeFillingPriceTable: PriceTable[] = [
//   {
//     description: "Côco",
//     price: 1.8,
//   },
//   {
//     description: "Brigadeiro comum",
//     price: 1.5,
//   },
//   {
//     description: "Brigadeiro branco",
//     price: 1.8,
//   },
//   {
//     description: "Ninho",
//     price: 1.2,
//   },
//   {
//     description: "Doce de leite",
//     price: 1.8,
//   },
//   {
//     description: "Banana",
//     price: 1.7,
//   },
//   {
//     description: "Creme Belga",
//     price: 2.9,
//   },
//   {
//     description: "Nozes",
//     price: 2.8,
//   },
//   {
//     description: "Ganache",
//     price: 1.8,
//   },
//   {
//     description: "Amendoim",
//     price: 1.5,
//   },
//   {
//     description: "Creme de Abacaxi",
//     price: 1.9,
//   },
// ];
// const cakeFilling2PriceTable: PriceTable[] = [
//   {
//     description: "Côco",
//     price: 1.8,
//   },
//   {
//     description: "Brigadeiro comum",
//     price: 1.5,
//   },
//   {
//     description: "Brigadeiro branco",
//     price: 1.8,
//   },
//   {
//     description: "Ninho",
//     price: 1.2,
//   },
//   {
//     description: "Doce de leite",
//     price: 1.8,
//   },
//   {
//     description: "Banana",
//     price: 1.7,
//   },
//   {
//     description: "Creme Belga",
//     price: 2.9,
//   },
//   {
//     description: "Nozes",
//     price: 2.8,
//   },
//   {
//     description: "Ganache",
//     price: 1.8,
//   },
//   {
//     description: "Amendoim",
//     price: 1.5,
//   },
//   {
//     description: "Creme de Abacaxi",
//     price: 1.9,
//   },
//   {
//     description: "Ninho (mousse)",
//     price: 2.9,
//   },
//   {
//     description: "Morango (mousse)",
//     price: 2.1,
//   },
//   {
//     description: "Limão (mousse)",
//     price: 1.9,
//   },
//   {
//     description: "Maracujá",
//     price: 1.8,
//   },
// ];
// const additionOfFruitsPriceTable: PriceTable[] = [
//   {
//     description: "morango",
//     price: 2.2,
//   },
//   {
//     description: "uva",
//     price: 2.7,
//   },
//   {
//     description: "pêssego",
//     price: 2.9,
//   },
//   {
//     description: "abacaxi",
//     price: 1.5,
//   },
// ];
// let cakeTypePrice: PriceTable = cakeTypePriceTable[0];
// let cakeFillingPrice: PriceTable = cakeFillingPriceTable[0];
// let cakeFilling2Price: PriceTable = cakeFilling2PriceTable[0];
// let additionOfFruitsPrice: PriceTable = additionOfFruitsPriceTable[0];
// let cakeFloorsPrice: number = 1;
// let sliceNumberPrice = 15;
// const formatMoney = (value: number) => {
//   return new Intl.NumberFormat("pt-BR", {
//     style: "currency",
//     currency: "BRL",
//   }).format(value);
// }
// const formatPhone = (value: string) => {
//   return value.replace(/[^0-9]/g, "");
// }
// cakeType.addEventListener("input", () => {
//   const cakeTypeSelected = cakeType.value.toLowerCase();
//   cakeTypePrice = cakeTypePriceTable.find(cake => cake.description.toLowerCase() === cakeTypeSelected) as PriceTable;
//   updatePrice();
// });
// cakeFilling.addEventListener("input", () => {
//   const cakeFillingSelected = cakeFilling.value.toLowerCase();
//   cakeFillingPrice = cakeFilling2PriceTable.find(filling => filling.description.toLowerCase() === cakeFillingSelected) as PriceTable;
//   updatePrice();
// });
// cakeFilling2.addEventListener("input", () => {
//   const cakeFilling2Selected = cakeFilling2.value.toLowerCase();
//   cakeFilling2Price = cakeFilling2PriceTable.find(filling => filling.description.toLowerCase() === cakeFilling2Selected) as PriceTable;
//   updatePrice();
// });
// additionOfFruits.addEventListener("input", () => {
//   const additionOfFruitsSelected = additionOfFruits.value.toLowerCase();
//   additionOfFruitsPrice = additionOfFruitsPriceTable.find(frute => frute.description.toLowerCase() === additionOfFruitsSelected) as PriceTable;
//   updatePrice();
// });
// cakeFloors.addEventListener("input", () => {
//   if (cakeFloors.value === "1") {
//     cakeFloorsPrice = 1;
//   } else if (cakeFloors.value === "2") {
//     cakeFloorsPrice = 1.4;
//   } else if (cakeFloors.value === "3") {
//     cakeFloorsPrice = 1.8;
//   }
//   updatePrice();
// });
// sliceNumber.addEventListener('input', () => {
//   sliceNumberPrice = parseInt(sliceNumber.value);
//   updatePrice();
// })
// const sendInformation = document.querySelector('.sendInformation') as HTMLDivElement;
// sendInformation.style.display = 'none';
// const btnSendToClient = document.getElementById("sendBtnClient") as HTMLAnchorElement;
// const btnSendToCompany = document.querySelector("#sendBtnCompany") as HTMLAnchorElement;
// const sendToClientCheckbox = document.getElementById("sendToClient") as HTMLInputElement;
// sendToClientCheckbox.addEventListener("input", () => {
//   if (sendToClientCheckbox.checked) {
//     btnSendToClient.style.display = "block";
//   } else {
//     btnSendToClient.style.display = "none";
//   }
// })
// const clientNameInput = document.querySelector('#clientName') as HTMLInputElement;
// let clientName: string = '';
// clientNameInput.addEventListener('input', () => {
//   clientName = clientNameInput.value;
// })
// const clientPhoneInput = document.querySelector('#clientPhone') as HTMLInputElement;
// let clientPhone: string = '';
// clientPhoneInput.addEventListener('input', () => {
//   clientPhone = clientPhoneInput.value;
// })
// const updatePrice = () => {
//   const cakeTotalPrice =
//     ((cakeTypePrice.price +
//       cakeFillingPrice.price +
//       cakeFilling2Price.price +
//       additionOfFruitsPrice.price
//     ) *
//       sliceNumberPrice) * cakeFloorsPrice
//     ;
//   console.log(companyMessage(cakeTotalPrice));
//   sendInformation.style.display = 'flex';
//   if (sendToClientCheckbox.checked) {
//     console.log(clientMessage(cakeTotalPrice));
//     btnSendToClient.href = `https://wa.me/${formatPhone(clientPhone)}?text=${companyMessage(cakeTotalPrice)}`
//   }
//   resultCalcText.textContent = `${formatMoney(cakeTotalPrice)}`;
// };
// const companyMessage = (cakeTotalPrice: number): string => {
//   return `Orçamento do(a) ${clientName} com telefone https://wa.me/${formatPhone(clientPhone)}. 
//   Tipo de bolo: ${cakeType.value} (R$ ${formatMoney(cakeTypePrice.price)}),
//   Recheio: ${cakeFilling.value} (R$ ${formatMoney(cakeFillingPrice.price)}),
//   Recheio adicional: ${cakeFilling2.value} (R$ ${formatMoney(cakeFilling2Price.price)}),
//   Adicional de frutas: ${additionOfFruits.value} (R$ ${formatMoney(additionOfFruitsPrice.price)}),
//   ${cakeFloors.value === "1" ? "Andar" : "Andares"}: ${cakeFloors.value} (R$ ${formatMoney(cakeFloorsPrice)}),
//   Fatias: ${sliceNumber.value} (R$ ${formatMoney(sliceNumberPrice)}),
//   Total: (R$ ${formatMoney(cakeTotalPrice)})`;
// }
// const clientMessage = (cakeTotalPrice: number): string => {
//   return `Olá ${clientName}, segue a descrição do orçamento: 
//     Bolo do tipo ${cakeType.value} 
//     com recheio de ${cakeFilling.value}
//     ${cakeFilling2.value !== "" ? ` recheio adicional de ${cakeFilling2.value}` : ""}
//     ${additionOfFruits.value !== "" ? ` com acréscimo de ${additionOfFruits.value}` : ""}.
//     O bolo terá ${cakeFloors.value} ${cakeFloors.value === "1" ? "andar" : "andares"} 
//     e poderá ser servido em ${sliceNumberPrice} fatias. 
//     O valor total do bolo ficou em R$ ${formatMoney(cakeTotalPrice)}.
//     `;
// }
