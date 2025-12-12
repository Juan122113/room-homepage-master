const iconHamburger = document.querySelector('[data-js="icon-hamburger"]');
const mainLinks = document.querySelector('[data-js="main-links"]');
const mainHero = document.querySelector('[data-js="main-hero"]');
const iconClose = document.querySelector('[data-js="icon-close"]');
const iconAngleLeft = document.querySelector('[data-js="icon-angle-left"]');
const iconAngleRight = document.querySelector('[data-js="icon-angle-right"]');
const width = document.documentElement.clientWidth;

const navDeskImagesUrls = ["../images/desktop-image-hero-1.jpg", "../images/desktop-image-hero-2.jpg", "../images/desktop-image-hero-3.jpg"];
const navMobImagesUrls = ["../images/mobile-image-hero-1.jpg", "../images/mobile-image-hero-2.jpg", "../images/mobile-image-hero-3.jpg"];
// console.log(width);

iconHamburger.addEventListener('click', (e) => {
    mainLinks.style.display = 'flex';
});

iconClose.addEventListener('click', (e) => {
    mainLinks.style.display = 'none';
});

window.addEventListener("resize", () => {
    console.log(window.innerWidth);

    if (window.innerWidth >= 768 ) {
        iconAngleRight.addEventListener("click", () => {

        });
    }
});