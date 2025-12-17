const iconHamburger = document.querySelector('[data-js="icon-hamburger"]');
const mainLinks = document.querySelector('[data-js="main-links"]');
const mainHero = document.querySelector('[data-js="main-hero"]');
const iconClose = document.querySelector('[data-js="icon-close"]');
const iconAngleLeft = document.querySelector('[data-js="icon-angle-left"]');
const iconAngleRight = document.querySelector('[data-js="icon-angle-right"]');
const mainTitle = document.querySelector('[data-js="main-title"]');
const mainParagraph = document.querySelector('[data-js="main-paragraph"]');

let indexImages = 0;

const mainTitles = ["Discover innovative ways to decorate", "We are available all across the globe", "Manufactured with the best materials"]
const mainParagraphs = ["We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.", "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.", "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."]

iconHamburger.addEventListener('click', () => {
    mainLinks.style.display = 'flex';
});

iconClose.addEventListener('click', () => {
    mainLinks.style.display = 'none';
});

function updateHeroBackground() {
    mainHero.className = "main__hero";

    const isMobile = window.innerWidth > 768;
    const device = isMobile ? "mob" : "desk";

    mainHero.classList.add(`hero--${device}-${indexImages + 1}`);
    
    console.log("updateHeroBackground running")
}

function changingTitles() {
    mainTitle.textContent = mainTitles[indexImages];
}

function changingParagraphs() {
    mainParagraph.textContent = mainParagraphs[indexImages];
}

window.addEventListener("resize", updateHeroBackground);

iconAngleRight.addEventListener('click', () => {
            
    if (indexImages < 2) {
        indexImages++;
    } else if (indexImages === 2) {
        indexImages = 0;
    }

    changingTitles(indexImages);
    changingParagraphs(indexImages);
    updateHeroBackground();

});

iconAngleLeft.addEventListener('click', () => {

    if (indexImages > 0 ) {
        indexImages--;
    } else if (indexImages === 0) {
        indexImages = 2;
    }

    changingTitles();
    changingParagraphs();
    updateHeroBackground();
    
});

changingTitles();
changingParagraphs();
updateHeroBackground();

console.log(indexImages);