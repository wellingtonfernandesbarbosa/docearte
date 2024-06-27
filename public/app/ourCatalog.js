"use strict";
const cakes = document.getElementById("cakes");
const sweets = document.getElementById("sweets");
const cakesBtn = document.getElementById("cakesBtn");
const sweetsBtn = document.getElementById("sweetsBtn");
const cakesInfo = document.getElementById("cakesInfo");
const sweetsInfo = document.getElementById("sweetsInfo");
const cakeLinkButton = document.getElementById("cakeLinkButton");
const cupcakesLinkButton = document.getElementById("cupcakeLinkButton");
const sweetsLinkButton = document.getElementById("sweetLinkButton");
const cakeLink = `https://wa.me/5531997706644?text=${encodeURIComponent("Olá, gostarida de saber mais sobre os bolos disponíveis.")}`;
cakeLinkButton?.setAttribute("href", cakeLink);
const sweetLink = `https://wa.me/5531997706644?text=${encodeURIComponent("Olá, gostarida de saber mais sobre os doces e bombons disponíveis.")}`;
sweetsLinkButton?.setAttribute("href", sweetLink);
cakesBtn?.addEventListener("click", () => {
    navigator.vibrate(50);
    cakesInfo?.setAttribute("style", "display: flex");
    sweetsInfo?.setAttribute("style", "display: none");
    cakes?.setAttribute("style", "display: flex");
    sweets?.setAttribute("style", "display: none");
    cakesBtn?.classList.add("ourCatalog-list-active");
    sweetsBtn?.classList.remove("ourCatalog-list-active");
});
sweetsBtn?.addEventListener("click", () => {
    navigator.vibrate(50);
    cakesInfo?.setAttribute("style", "display: none");
    sweetsInfo?.setAttribute("style", "display: flex");
    cakes?.setAttribute("style", "display: none");
    sweets?.setAttribute("style", "display: flex");
    cakesBtn?.classList.remove("ourCatalog-list-active");
    sweetsBtn?.classList.add("ourCatalog-list-active");
});
const orderButton = document.querySelector(".order-button");
orderButton.addEventListener("click", () => {
    window.location.href = "#ourCatalog";
    cakesBtn.click();
});
