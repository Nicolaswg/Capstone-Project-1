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

const speakersArr = [{
  image: 'src/Gianni-Versace1.jpg',
  name: 'Gianni Versace',
  subtitle: 'renowned designer of Italian haute couture founder of the Versace brand',
  description: '"Decide what you are, what you want to express with the way you dress and the way you live" <i>(Gianni Versace)</i>',
}, {
  image: 'src/Rene-Lacoste.jpg',
  name: 'René Lacoste',
  subtitle: 'founded in 1923 by the French René Lacoste, a well-known tennis player, winner with the national team, popularly called The Musketeers',
  description: '',
}];
