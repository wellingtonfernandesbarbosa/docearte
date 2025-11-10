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

const prevBtn = document.createElement("button");
prevBtn.className = "modal-nav-button modal-prev";
prevBtn.innerHTML = "&#10094;";
modalContent.appendChild(prevBtn);

const nextBtn = document.createElement("button");
nextBtn.className = "modal-nav-button modal-next";
nextBtn.innerHTML = "&#10095;";
modalContent.appendChild(nextBtn);

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
let currentImageIndex = 0;
let currentImages: NodeListOf<Element>;

function updateModalContent(image: HTMLImageElement) {
  modalImage.src = image.src;
  modalTitle.textContent = image.dataset.title || "Bolo";
}

function openModal(image: HTMLImageElement) {
  modal.style.display = "block";

  // Get current visible section (cakes or sweets)
  const activeSection = document.querySelector('.ourCatalog-card-photo[style*="display: flex"]');
  currentImages = activeSection?.querySelectorAll("img") || document.querySelectorAll(".ourCatalog-card-photo-img img");

  // Find index of clicked image
  currentImageIndex = Array.from(currentImages).findIndex(img => img === image);

  updateModalContent(image);
  updateNavigationButtons();
}

function closeModal() {
  modal.style.display = "none";
}

function showPrevImage() {
  if (currentImageIndex > 0) {
    currentImageIndex--;
    navigator.vibrate(50);
    updateModalContent(currentImages[currentImageIndex] as HTMLImageElement);
    updateNavigationButtons();
  }
}

function showNextImage() {
  if (currentImageIndex < currentImages.length - 1) {
    currentImageIndex++;
    navigator.vibrate(50);
    updateModalContent(currentImages[currentImageIndex] as HTMLImageElement);
    updateNavigationButtons();
  }
}

function updateNavigationButtons() {
  prevBtn.style.display = currentImageIndex === 0 ? "none" : "flex";
  nextBtn.style.display = currentImageIndex === currentImages.length - 1 ? "none" : "flex";
}

// Add click event to all cake images
const cakeImages = document.querySelectorAll(".ourCatalog-card-photo-img img");
cakeImages.forEach(image => {
  image.addEventListener("click", () => {
    navigator.vibrate(50);
    openModal(image as HTMLImageElement);
  });
});

// Add navigation events
prevBtn.addEventListener("click", showPrevImage);
nextBtn.addEventListener("click", showNextImage);

// Add keyboard navigation
document.addEventListener("keydown", (e) => {
  if (modal.style.display === "block") {
    if (e.key === "ArrowLeft") showPrevImage();
    if (e.key === "ArrowRight") showNextImage();
    if (e.key === "Escape") closeModal();
  }
});

// Touch navigation
let touchStartX = 0;
let touchEndX = 0;
const SWIPE_THRESHOLD = 50; // Minimum distance for a swipe

modalContent.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

modalContent.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
}, { passive: true });

function handleSwipe() {
  const swipeDistance = touchEndX - touchStartX;

  if (Math.abs(swipeDistance) > SWIPE_THRESHOLD) {
    if (swipeDistance > 0) {
      showPrevImage(); // Swipe right -> previous image
    } else {
      showNextImage(); // Swipe left -> next image
    }
  }
}

// Close modal when clicking on close button or outside the modal
closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});
