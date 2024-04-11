const menuToggle = document.querySelector(".menu-toggle") as HTMLDivElement;
const menu = document.querySelector("#right-menu") as HTMLUListElement;
const menuLinks = document.querySelectorAll("#right-menu li a") as NodeListOf<HTMLAnchorElement>;
const screenWidth = window.innerWidth;

export const isClickInsideMenu = (event: MouseEvent | TouchEvent) => {
  return menu?.contains(event.target as Node) || menuToggle?.contains(event.target as Node);
}

menuToggle?.addEventListener('click', () => {
  if (screenWidth <= 850) menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});

window.addEventListener('click', (event) => {
  if (screenWidth <= 850 && !isClickInsideMenu(event)) {
    menu.style.display = 'none';
  }
})

menuLinks.forEach((link) => {
  screenWidth <= 850 && link.addEventListener('click', () => {
    menu.style.display = 'none';
  });
})
