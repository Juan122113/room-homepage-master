const iconHamburger = document.querySelector('[data-js="icon-hamburger"]');
const mainLinks = document.querySelector('[data-js="main-links"]');
const iconClose = document.querySelector('[data-js="icon-close"]');

iconHamburger.addEventListener('click', (e) => {
    mainLinks.style.display = 'flex';
})

iconClose.addEventListener('click', (e) => {
    mainLinks.style.display = 'none';
})