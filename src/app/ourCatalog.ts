const cakes = document.getElementById("cakes");
const sweets = document.getElementById("sweets");

const cakesBtn = document.getElementById("cakesBtn") as HTMLLIElement;
const sweetsBtn = document.getElementById("sweetsBtn");

// Modal elements
const modal = document.createElement("div");
modal.className = "modal";
document.body.appendChild(modal);

const modalContent = document.createElement("div");
modalContent.className = "modal-content";
modal.appendChild(modalContent);

const closeBtn = document.createElement("span");
closeBtn.className = "close-modal";
closeBtn.innerHTML = "&times;";
modalContent.appendChild(closeBtn);

const modalImage = document.createElement("img");
modalImage.className = "modal-image";
modalContent.appendChild(modalImage);

const modalTitle = document.createElement("h3");
modalTitle.className = "modal-title";
modalContent.appendChild(modalTitle);

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
})

const orderButton = document.querySelector(".order-button") as HTMLButtonElement;

orderButton.addEventListener("click", () => {
  window.location.href = "#ourCatalog";
  cakesBtn.click();
});

// Modal functionality
function openModal(image: HTMLImageElement) {
  modal.style.display = "block";
  modalImage.src = image.src;
  modalTitle.textContent = image.dataset.title || "Bolo";
}

function closeModal() {
  modal.style.display = "none";
}

// Add click event to all cake images
const cakeImages = document.querySelectorAll(".ourCatalog-card-photo-img img");
cakeImages.forEach(image => {
  image.addEventListener("click", () => {
    navigator.vibrate(50);
    openModal(image as HTMLImageElement);
  });
});

// Close modal when clicking on close button or outside the modal
closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});
