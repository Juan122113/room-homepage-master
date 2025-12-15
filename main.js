const iconHamburger = document.querySelector('[data-js="icon-hamburger"]');
const mainLinks = document.querySelector('[data-js="main-links"]');
const mainHero = document.querySelector('[data-js="main-hero"]');
const iconClose = document.querySelector('[data-js="icon-close"]');
const iconAngleLeft = document.querySelector('[data-js="icon-angle-left"]');
const iconAngleRight = document.querySelector('[data-js="icon-angle-right"]');
// const width = document.documentElement.clientWidth;

let currentWidth = document.documentElement.clientWidth;

let indexImages = 0;

console.log(currentWidth);
console.log(indexImages);

const navDeskImagesUrls = ["url('../images/desktop-image-hero-1.jpg')", "url('../images/desktop-image-hero-2.jpg')", "url('../images/desktop-image-hero-3.jpg')"];
const navMobImagesUrls = ["url('../images/mobile-image-hero-1.jpg')", "url('../images/mobile-image-hero-2.jpg')", "url('../images/mobile-image-hero-3.jpg')"];
// console.log(width);

iconHamburger.addEventListener('click', () => {
    mainLinks.style.display = 'flex';
});

iconClose.addEventListener('click', () => {
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

// function handleSlide(e) {
//     // if (window.innerWidth < 768 ) {

//         // console.log("less 768");
//         // console.log(e);
//         // console.log(e.type);
//         // console.log(window.innerWidth);
        
//         // iconAngleRight.addEventListener('click', () => {

//         //     console.log("click iconAngleRight");
//         //     // mainHero.style.backgroundImage = navMobImagesUrls[1];
//         //     // mainHero.style.backgroundImage = "url('../images/mobile-image-hero-2.jpg')";
//         //     // indexImages++;
//         //     // while (indexImages < 2) {
//         //     //     indexImages++;
//         //     // }
            
//         //     if (indexImages < 2) {
//         //         indexImages++;
//         //     } else if (indexImages == 2) {
//         //         indexImages = 0;
//         //     }
            
//         //     console.log(indexImages);

//         //     if (window.innerWidth < 768 ) {
//         //         mainHero.style.backgroundImage = navMobImagesUrls[indexImages];
//         //     } else {
//         //         mainHero.style.backgroundImage = navDeskImagesUrls[indexImages];
//         //     }
//         // });

//         iconAngleLeft.addEventListener('click', () => {

//             console.log("click iconAngleLeft");
//             // mainHero.style.backgroundImage = navMobImagesUrls[1];
//             // mainHero.style.backgroundImage = "url('../images/mobile-image-hero-2.jpg')";
//             // indexImages++;
//             // while (indexImages < 2) {
//             //     indexImages++;
//             // }

//             if (indexImages > 0 ) {
//                 indexImages--;
//             } else if (indexImages == 0) {
//                 indexImages = 2;
                
//             }
            
//             console.log(indexImages);
//         });
//     // } else {

//         // console.log("more 768")
//         // iconAngleRight.addEventListener('click', () => {

//         //     console.log("click iconAngleRight");
//         //     // mainHero.style.backgroundImage = navMobImagesUrls[1];
//         //     mainHero.style.backgroundImage = "url('../images/desktop-image-hero-2.jpg')";
//         // });
//     // }
// }
        
    // } else {

        // console.log("more 768")
        // iconAngleRight.addEventListener('click', () => {

        //     console.log("click iconAngleRight");
        //     // mainHero.style.backgroundImage = navMobImagesUrls[1];
        //     mainHero.style.backgroundImage = "url('../images/desktop-image-hero-2.jpg')";
        // });
    // }
// }

function handleResize() {
    if (window.innerWidth < 768 ) {
                mainHero.style.backgroundImage = navMobImagesUrls[indexImages];
            } else {
                mainHero.style.backgroundImage = navDeskImagesUrls[indexImages];
            }
}

// window.addEventListener("load", () => {
// if (window.innerWidth <= 768 ) {
// window.addEventListener("load", handleSlide, {once: true});
// window.addEventListener("resize", handleSlide, {once: true});
window.addEventListener("resize", handleResize);
// window.addEventListener("resize", () => {
//     console.log(window.innerWidth);
//     console.log(currentWidth);

//     // currentWidth = window.innerWidth;

//     if (window.innerWidth <= 768 ) {

//         console.log("less 768");
//         // console.log(window.innerWidth);
        
//         iconAngleRight.addEventListener('click', () => {

//             console.log("click iconAngleRight");
//             // mainHero.style.backgroundImage = navMobImagesUrls[1];
//             mainHero.style.backgroundImage = "url('../images/mobile-image-hero-2.jpg')";
//         });
//     }
// });
// });
// }
console.log(currentWidth);

// if (currentWidth <= 768) {

//         console.log("less 768");

//     // window.addEventListener("resize", () => {
        
//         iconAngleRight.addEventListener('click', () => {

//             console.log("click iconAngleRight");
//             // mainHero.style.backgroundImage = navMobImagesUrls[1];
//             mainHero.style.backgroundImage = "url('../images/mobile-image-hero-2.jpg')";
//         });
    // }

// }

// window.addEventListener("load", () => {
//     window.addEventListener("resize", () => {
//          iconAngleRight.addEventListener('click', () => {

//             console.log("click iconAngleRight");
//             // mainHero.style.backgroundImage = navMobImagesUrls[1];
//             // mainHero.style.backgroundImage = "url('../images/mobile-image-hero-2.jpg')";
//             // indexImages++;
//             // while (indexImages < 2) {
//             //     indexImages++;
//             // }
            
//             if (indexImages < 2) {
//                 indexImages++;
//             } else if (indexImages == 2) {
//                 indexImages = 0;
//             }
            
//             console.log(indexImages);

//             if (window.innerWidth < 768 ) {
//                 mainHero.style.backgroundImage = navMobImagesUrls[indexImages];
//             } else {
//                 mainHero.style.backgroundImage = navDeskImagesUrls[indexImages];
//             }
//         });
//     });
// });

iconAngleRight.addEventListener('click', () => {

            console.log("click iconAngleRight");
            // mainHero.style.backgroundImage = navMobImagesUrls[1];
            // mainHero.style.backgroundImage = "url('../images/mobile-image-hero-2.jpg')";
            // indexImages++;
            // while (indexImages < 2) {
            //     indexImages++;
            // }
            
            if (indexImages < 2) {
                indexImages++;
            } else if (indexImages == 2) {
                indexImages = 0;
            }
            
            console.log(indexImages);

            // 
            handleResize()
        });

  iconAngleLeft.addEventListener('click', () => {

            console.log("click iconAngleLeft");
            // mainHero.style.backgroundImage = navMobImagesUrls[1];
            // mainHero.style.backgroundImage = "url('../images/mobile-image-hero-2.jpg')";
            // indexImages++;
            // while (indexImages < 2) {
            //     indexImages++;
            // }

            if (indexImages > 0 ) {
                indexImages--;
            } else if (indexImages == 0) {
                indexImages = 2;
                
            }

            // if (window.innerWidth < 768 ) {
            //     mainHero.style.backgroundImage = navMobImagesUrls[indexImages];
            // } else {
            //     mainHero.style.backgroundImage = navDeskImagesUrls[indexImages];
            // }
            
            handleResize()
            
            console.log(indexImages);
        });