const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const closeMenu = document.querySelector('.close-menu');

function toggleMenu() {
    nav.classList.toggle('active');

  // Agregar/eliminar clase al container
  const container = document.querySelector('.container');
  container.classList.toggle('container-active', nav.classList.contains('active'));
}

menuToggle.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);

