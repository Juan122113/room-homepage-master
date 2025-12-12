const iconHamburger = document.querySelector('[data-js="icon-hamburger"]');
const mainLinks = document.querySelector('[data-js="main-links"]');
const iconClose = document.querySelector('[data-js="icon-close"]');
const iconAngleLeft = document.querySelector('[data-js="icon-angle-left"]');
const iconAngleRight = document.querySelector('[data-js="icon-angle-right"]');
const width = document.documentElement.clientWidth;

const navImagesUrls = ["../images/desktop-image-hero-1.jpg", "../images/desktop-image-hero-1.jpg"];
console.log(width);

iconHamburger.addEventListener('click', (e) => {
    mainLinks.style.display = 'flex';
});

iconClose.addEventListener('click', (e) => {
    mainLinks.style.display = 'none';
});

window.addEventListener("resize", () => {
    console.log(width);
});