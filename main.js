const iconHamburger = document.querySelector('[data-js="icon-hamburger"]');
const mainLinks = document.querySelector('[data-js="main-links"]');
const mainHero = document.querySelector('[data-js="main-hero"]');
const iconClose = document.querySelector('[data-js="icon-close"]');
const iconAngleLeft = document.querySelector('[data-js="icon-angle-left"]');
const iconAngleRight = document.querySelector('[data-js="icon-angle-right"]');
const mainTitle = document.querySelector('[data-js="main-title"]');
const mainParagraph = document.querySelector('[data-js="main-paragraph"]');

const isGithubPages = location.hostname.includes("github.io");

// basePath para que funcione tanto en local como en GitHub Pages
const urlBeginning = isGithubPages ? "/room-homepage-master" : "";

let indexImages = 0;

// const navDeskImagesUrls = [`url('${urlBeginning}/images/desktop-image-hero-1.jpg')`, `url('${urlBeginning}/images/desktop-image-hero-2.jpg')`, `url('${urlBeginning}/images/desktop-image-hero-3.jpg')`];
// const navMobImagesUrls = [`url('${urlBeginning}/images/mobile-image-hero-1.jpg')`, `url('${urlBeginning}/images/mobile-image-hero-2.jpg')`, `url('${urlBeginning}/images/mobile-image-hero-3.jpg')`];

const mainTitles = ["Discover innovative ways to decorate", "We are available all across the globe", "Manufactured with the best materials"]
const mainParagraphs = ["We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.", "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.", "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."]

iconHamburger.addEventListener('click', () => {
    mainLinks.style.display = 'flex';
});

iconClose.addEventListener('click', () => {
    mainLinks.style.display = 'none';
});

// function handleResize() {
//     if (window.innerWidth < 768 ) {
//         mainHero.style.backgroundImage = navMobImagesUrls[indexImages];
//     } else {
//         mainHero.style.backgroundImage = navDeskImagesUrls[indexImages];
//     }

//     console.log(indexImages);
// }

function updateHeroBackground(indexImages) {
    mainHero.className = "main__hero";

    const isMobile = window.innerWidth > 768;
    const device = isMobile ? "mob" : "desk";

    mainHero.classList.add(`hero--${device}-${indexImages + 1}`);
    
    console.log("updateHeroBackground")
}

function changingTitles(indexImages) {
    mainTitle.textContent = mainTitles[indexImages];
}

function changingParagraphs(indexImages) {
    mainParagraph.textContent = mainParagraphs[indexImages];
}

// window.addEventListener("resize", handleResize);
window.addEventListener("resize", updateHeroBackground());

iconAngleRight.addEventListener('click', () => {
            
    if (indexImages < 2) {
        indexImages++;
    } else if (indexImages == 2) {
        indexImages = 0;
    }

    // handleResize();
    changingTitles(indexImages);
    changingParagraphs(indexImages);
    updateHeroBackground(indexImages);

});

iconAngleLeft.addEventListener('click', () => {

    if (indexImages > 0 ) {
        indexImages--;
    } else if (indexImages == 0) {
        indexImages = 2;
    }

    // handleResize();
    changingTitles(indexImages);
    changingParagraphs(indexImages);
    updateHeroBackground(indexImages);
    
});

// handleResize();
changingTitles(indexImages);
changingParagraphs(indexImages);
updateHeroBackground(indexImages);

console.log(indexImages);