const iconHamburger = document.querySelector('[data-js="icon-hamburger"]');
const mainLinks = document.querySelector('[data-js="main-links"]');
const mainHero = document.querySelector('[data-js="main-hero"]');
const iconClose = document.querySelector('[data-js="icon-close"]');
const iconAngleLeft = document.querySelector('[data-js="icon-angle-left"]');
const iconAngleRight = document.querySelector('[data-js="icon-angle-right"]');
// const width = document.documentElement.clientWidth;

let currentWidth = document.documentElement.clientWidth;

console.log(currentWidth);

const navDeskImagesUrls = ["url('../images/desktop-image-hero-1.jpg')", "url('../images/desktop-image-hero-2.jpg')", "../images/desktop-image-hero-3.jpg"];
const navMobImagesUrls = ["../images/mobile-image-hero-1.jpg", "url('../images/mobile-image-hero-2.jpg')", "../images/mobile-image-hero-3.jpg"];
// console.log(width);

iconHamburger.addEventListener('click', (e) => {
    mainLinks.style.display = 'flex';
});

iconClose.addEventListener('click', (e) => {
    mainLinks.style.display = 'none';
});

// if (window.innerWidth <= 768 ) {

//         console.log("less 768");
        
//         iconAngleRight.addEventListener('click', () => {

//             console.log("click iconAngleRight");
//             // mainHero.style.backgroundImage = navMobImagesUrls[1];
//             mainHero.style.backgroundImage = "url('../images/mobile-image-hero-2.jpg')";
//         });
//     }

// window.addEventListener("load", () => {
// if (window.innerWidth <= 768 ) {
window.addEventListener("resize", () => {
    console.log(window.innerWidth);

    // currentWidth = window.innerWidth;

    if (window.innerWidth <= 768 ) {

        console.log("less 768");
        // console.log(window.innerWidth);
        
        iconAngleRight.addEventListener('click', () => {

            console.log("click iconAngleRight");
            // mainHero.style.backgroundImage = navMobImagesUrls[1];
            mainHero.style.backgroundImage = "url('../images/mobile-image-hero-2.jpg')";
        });
    }
});
// });
// }
console.log(currentWidth);

if (currentWidth <= 768) {

        console.log("less 768");
        
        iconAngleRight.addEventListener('click', () => {

            console.log("click iconAngleRight");
            // mainHero.style.backgroundImage = navMobImagesUrls[1];
            mainHero.style.backgroundImage = "url('../images/mobile-image-hero-2.jpg')";
        });
    }