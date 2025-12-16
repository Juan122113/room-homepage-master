const iconHamburger = document.querySelector('[data-js="icon-hamburger"]');
const mainLinks = document.querySelector('[data-js="main-links"]');
const mainHero = document.querySelector('[data-js="main-hero"]');
const iconClose = document.querySelector('[data-js="icon-close"]');
const iconAngleLeft = document.querySelector('[data-js="icon-angle-left"]');
const iconAngleRight = document.querySelector('[data-js="icon-angle-right"]');

const isGithubPages = location.hostname.includes("github.io");

// basePath para que funcione tanto en local como en GitHub Pages
const urlBeginning = isGithubPages ? "/room-homepage-master" : "";

let indexImages = 0;

const navDeskImagesUrls = [`url('${urlBeginning}/images/desktop-image-hero-1.jpg')`, `url('${urlBeginning}/images/desktop-image-hero-2.jpg')`, `url('${urlBeginning}/images/desktop-image-hero-3.jpg')`];
const navMobImagesUrls = [`url('${urlBeginning}/images/mobile-image-hero-1.jpg')`, `url('${urlBeginning}/images/mobile-image-hero-2.jpg')`, `url('${urlBeginning}/images/mobile-image-hero-3.jpg')`];

iconHamburger.addEventListener('click', () => {
    mainLinks.style.display = 'flex';
});

iconClose.addEventListener('click', () => {
    mainLinks.style.display = 'none';
});

function handleResize() {
    if (window.innerWidth < 768 ) {
        mainHero.style.backgroundImage = navMobImagesUrls[indexImages];
    } else {
        mainHero.style.backgroundImage = navDeskImagesUrls[indexImages];
    }

    console.log(indexImages);
}

window.addEventListener("resize", handleResize);

iconAngleRight.addEventListener('click', () => {
            
    if (indexImages < 2) {
        indexImages++;
    } else if (indexImages == 2) {
        indexImages = 0;
    }

    handleResize()

});

iconAngleLeft.addEventListener('click', () => {

    if (indexImages > 0 ) {
        indexImages--;
    } else if (indexImages == 0) {
        indexImages = 2;
    }

    handleResize()
    
});

handleResize()

console.log(indexImages);