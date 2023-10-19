const images = [
  {
    image: 'img/01.webp',
    title: "Marvel's Spiderman Miles Morale",
    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  },
  {
    image: 'img/02.webp',
    title: 'Ratchet & Clank: Rift Apart',
    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  },
  {
    image: 'img/03.webp',
    title: 'Fortnite',
    text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
  },
  {
    image: 'img/04.webp',
    title: 'Stray',
    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  },
  {
    image: 'img/05.webp',
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

// DICHIARAZIONE SELETTORI DOM
const carouselDOMElement = document.querySelector('.images');

const thumbnailsDOMElement = document.querySelector('.thumbnails');

// CICLO FOR PER POPOLARE GLI ELEMENTI CON L' ARRAY'
images.forEach((image) => {
  carouselDOMElement.innerHTML += `
  <div class="image--container">
    <div class="text--container">
        <h1 class="image--title">${image.title}</h1>
        <p class="image-text">${image.text}</p>
    </div>
  <img class="image" src="${image.image}" />
</div>
  `;

  thumbnailsDOMElement.innerHTML += `
  <div class="thumb--container">
    
    <img class="thumb" src="${image.image}" />
</div>`;
});

// DICHIARAZIONE ELEMENTI DOM
const forwardBtnDOMElement = document.querySelector('.forward');
const backwardBtnDOMElement = document.querySelector('.backward');
const slides = document.querySelectorAll('.image--container');
const thumbs = document.querySelectorAll('.thumb');
let currentIndex;

function btnForward() {
  let exist = false;
  slides.forEach((element) => {
    if (element.classList.contains('display')) {
      exist = true;
    }
  });
  if (!exist) {
    currentIndex = 0;

    slides[currentIndex].classList.add('display');
    thumbs[currentIndex].classList.add('display');
  } else {
    slides[currentIndex].classList.remove('display');
    thumbs[currentIndex].classList.remove('display');
    if (currentIndex === slides.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    slides[currentIndex].classList.add('display');
    thumbs[currentIndex].classList.add('display');
  }
}

function btnBackward() {
  let exist = false;
  slides.forEach((element) => {
    if (element.classList.contains('display')) {
      exist = true;
    }
  });
  if (!exist) {
    currentIndex = slides.length - 1;
    slides[currentIndex].classList.add('display');
    slides[currentIndex].classList.add('display');
  } else {
    slides[currentIndex].classList.remove('display');
    thumbs[currentIndex].classList.remove('display');
    if (currentIndex === 0) {
      currentIndex = slides.length - 1;
    } else {
      currentIndex--;
    }
    slides[currentIndex].classList.add('display');
    thumbs[currentIndex].classList.add('display');
  }
}

forwardBtnDOMElement.addEventListener('click', btnForward);

backwardBtnDOMElement.addEventListener('click', btnBackward);

// BONUS 2 - 3

const startBtnDOMElement = document.querySelector('.start--btn');
const stopBtnDOMElement = document.querySelector('.stop--btn');

let autoplay;
function startAutoplay() {
  autoplay = setInterval(btnForward, 3000);
}
function stopAutoplay() {
  clearInterval(autoplay);
}

startBtnDOMElement.addEventListener('click', startAutoplay);
stopBtnDOMElement.addEventListener('click', stopAutoplay);
