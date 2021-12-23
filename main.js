const speakerContainer = document.querySelector('.speaker-outfit-card-container');
const speakerButton = document.getElementById('button');
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

const speakerArr = [{
  image: 'src/Gianni-Versace1.jpg',
  name: 'Gianni Versace',
  subtitle: 'Renowned designer of Italian haute couture founder of the Versace brand',
  description: '"Decide what you are, what you want to express with the way you dress and the way you live" <i>(Gianni Versace)</i>',
}, {
  image: 'src/Carolina-Herrera.jpg',
  name: 'Maria Pacanis',
  subtitle: 'Better known as Carolina Herrera, a world-renowned Venezuelan fashion designer, founded her fashion house in 1981',
  description: '"Elegance is not only beauty, it is also the way of thinking, the way of moving" <i>(Maria Pacanis)</i>',
}, {
  image: 'src/Rene-Lacosteb.jpg',
  name: 'René Lacoste',
  subtitle: 'Founded in 1923 by the French René Lacoste, a well-known tennis player, winner with the national team',
  description: '"Without elegance, playing and winning is not enough, elegance characterizes the future of modern man" <i>(René Lacoste)</i>',
}, {
  image: 'src/Coco-Chanel.jpg',
  name: 'Gabrielle Chanel',
  subtitle: 'French designer, founder of chanel, included in the list of influential people of the 20th century',
  description: '"How many worries disappear when you decide to be someone instead of something" <i>(Gabrielle Chanel)</i>',
}, {
  image: 'src/Cristobal-Balenciaga.jpg',
  name: 'Cristóbal Balenciaga',
  subtitle: 'Prestigious Spanish fashion designer, considered one of the most important creators of Parisian haute couture',
  description: '"Elegance is elimination, prestige is more important than fame, prestige remains, fame is fleeting" <i>(Cristóbal Balenciaga)</i>',
}, {
  image: 'src/Jeanne-Lanvin.jpg',
  name: 'Jeanne Lanvin',
  subtitle: 'French fashion designer and stylist, she founded the oldest Parisian fashion house still in operation, the Lanvin house',
  description: '"You have to create by deleting" <i>(Jeanne Lanvin)</i>',
}];

// Test card
const createdCard = () => {
  speakerArr.forEach((_speaker, index) => {
    const speakerCard = document.createElement('div');
    speakerCard.classList = 'speaker-outfit-container';
    const cardContent = `
  <div class="border">
  </div>
        <div class="img-container">
          <img src="${speakerArr[index].image}" alt="speaker">
        </div>
        <div class="speaker-description-container">
          <h4 class="speaker-name">${speakerArr[index].name}</h4>
          <p class="speaker-subtitle">${speakerArr[index].subtitle}</p>
          <p class="speaker-description">${speakerArr[index].description}</p>
        </div>
  `;
    speakerCard.innerHTML += cardContent;
    speakerContainer.appendChild(speakerCard);
    if (index >= 2) {
      speakerCard.classList.add('toogle-speaker-card');
      speakerButton.addEventListener('click', () => {
        speakerCard.classList.toggle('toogle-speaker-card');
      });
    }
  });
};
createdCard();
