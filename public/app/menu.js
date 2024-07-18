import hapticFeedback from "./utils/hapticFeedback";
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("#right-menu");
const menuLinks = document.querySelectorAll("#right-menu li a");
const closeMenu = () => menu.style.display = 'none';
const openMenu = () => menu.style.display = 'flex';
const widthUnder1000 = () => window.innerWidth <= 1000;
export const isClickInsideMenu = (event) => {
    return menu?.contains(event.target) || menuToggle?.contains(event.target);
};
menuToggle.addEventListener('click', () => {
    hapticFeedback();
    if (widthUnder1000())
        menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});
window.addEventListener('click', (event) => (widthUnder1000() && !isClickInsideMenu(event)) && closeMenu());
menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        hapticFeedback();
        if (widthUnder1000())
            closeMenu();
    });
});
window.addEventListener('resize', () => window.innerWidth > 1000 ? openMenu() : closeMenu());
