  export function toggleMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const rightMenu = document.querySelector('.right-menu');

  function closeMenuOutsideClick(event) {
    if (!rightMenu.contains(event.target) && !menuToggle.contains(event.target)) {
      rightMenu.classList.remove('show');
      document.removeEventListener('click', closeMenuOutsideClick);
    }
  }

  function closeMenuOnClick() {
    rightMenu.classList.remove('show');
    document.removeEventListener('click', closeMenuOutsideClick);
  }

  menuToggle.addEventListener('click', function () {
    rightMenu.classList.toggle('show');
    if (rightMenu.classList.contains('show')) {
      document.addEventListener('click', closeMenuOutsideClick);
    }
  });

  // Adiciona o ouvinte de evento para cada link do menu
  const menuLinks = document.querySelectorAll('.right-menu a');
  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenuOnClick);
  });
}
