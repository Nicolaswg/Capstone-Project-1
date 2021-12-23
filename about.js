const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const menuBg = document.querySelector('.menu-bg');
const mobileMenu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.links');

menuOpen.addEventListener('click', () => {
  menuBg.classList.toggle('off-menu');
  mobileMenu.classList.toggle('off-menu');
  menuLinks.forEach((link) => {
    link.classList.toggle('off-menu');
  });
});

menuClose.addEventListener('click', () => {
  menuBg.classList.toggle('off-menu');
  mobileMenu.classList.toggle('off-menu');
  menuLinks.forEach((link) => {
    link.classList.toggle('off-menu');
  });
});

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menuBg.classList.toggle('off-menu');
    mobileMenu.classList.toggle('off-menu');
    menuLinks.forEach((links) => {
      links.classList.toggle('off-menu');
    });
  });
});