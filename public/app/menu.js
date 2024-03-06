"use strict";
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("#right-menu");
const menuLinks = document.querySelectorAll("#right-menu li a");
console.log(menuToggle);
console.log(menu);
const isClickInsideMenu = (event) => {
    return menu?.contains(event.target) || menuToggle?.contains(event.target);
};
menuToggle?.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});
window.addEventListener('click', (event) => {
    if (!isClickInsideMenu(event)) {
        menu.style.display = 'none';
    }
});
menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        menu.style.display = 'none';
    });
});
