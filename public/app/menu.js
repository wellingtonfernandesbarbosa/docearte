const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("#right-menu");
const menuLinks = document.querySelectorAll("#right-menu li a");
const screenWidth = window.innerWidth;
export const isClickInsideMenu = (event) => {
    return menu?.contains(event.target) || menuToggle?.contains(event.target);
};
menuToggle?.addEventListener('click', () => {
    if (screenWidth <= 900)
        menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});
window.addEventListener('click', (event) => {
    if (screenWidth <= 850 && !isClickInsideMenu(event)) {
        menu.style.display = 'none';
    }
});
menuLinks.forEach((link) => {
    screenWidth <= 850 && link.addEventListener('click', () => {
        menu.style.display = 'none';
    });
});
menuToggle.addEventListener("click", () => {
    navigator.vibrate && navigator.vibrate(50);
});
