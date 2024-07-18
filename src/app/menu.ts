import hapticFeedback from "./utils/hapticFeedback";

const menuToggle = document.querySelector(".menu-toggle") as HTMLDivElement;
const menu = document.querySelector("#right-menu") as HTMLUListElement;
const menuLinks = document.querySelectorAll("#right-menu li a") as NodeListOf<HTMLAnchorElement>;

const closeMenu = () => menu.style.display = 'none';

const openMenu = () => menu.style.display = 'flex';

const widthUnder1000 = () => window.innerWidth <= 1000;

export const isClickInsideMenu = (event: MouseEvent | TouchEvent) => {
  return menu?.contains(event.target as Node) || menuToggle?.contains(event.target as Node);
}

menuToggle.addEventListener('click', () => {
  hapticFeedback();
  if (widthUnder1000()) menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});

window.addEventListener('click', (event) => (widthUnder1000() && !isClickInsideMenu(event)) && closeMenu());

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    hapticFeedback();
    if (widthUnder1000()) closeMenu();
  })
});

window.addEventListener('resize', () => window.innerWidth > 1000 ? openMenu() : closeMenu());
