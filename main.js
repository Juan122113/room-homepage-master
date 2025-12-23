const iconHamburger = document.querySelector('[data-js="icon-hamburger"]');
const mainLinks = document.querySelector('[data-js="main-links"]');
const mainHero = document.querySelector('[data-js="main-hero"]');
const iconClose = document.querySelector('[data-js="icon-close"]');
const iconAngleLeft = document.querySelector('[data-js="icon-angle-left"]');
const iconAngleRight = document.querySelector('[data-js="icon-angle-right"]');
const mainTitle = document.querySelector('[data-js="main-title"]');
const mainParagraph = document.querySelector('[data-js="main-paragraph"]');
const mainContent = document.querySelector('[data-js="main-content"]');

let indexImages = 0;

const mainTitles = ["Discover innovative ways to decorate", "We are available all across the globe", "Manufactured with the best materials"]
const mainParagraphs = ["We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.", "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.", "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."]

// mainHero.style.transform = "translateX(-100%)";

// if (mainHero.style.transform = "translateX(0%)") {
//         // resetMainHeroTranslate();
//     mainHero.style.transform = "translateX(-100%)";
// }

iconHamburger.addEventListener('click', () => {
    mainLinks.style.display = 'flex';
});

iconClose.addEventListener('click', () => {
    mainLinks.style.display = 'none';
});

function updateHeroBackground() {

    mainHero.className = "main__hero";

    const isMobile = window.innerWidth < 768;
    console.log(isMobile);
    const device = isMobile ? "mob" : "desk";
    // const device = isMobile ? "desk" : "mob";

    console.log(window.innerWidth);
    console.log(device);

    mainHero.classList.add(`hero--${device}-${indexImages + 1}`);
    
    // console.log("updateHeroBackground running")

    transitionMainHero1();
    transitionMainContent1();
    waitFunc();
}

function changingTitles() {
    mainTitle.textContent = mainTitles[indexImages];
}

function changingParagraphs() {
    mainParagraph.textContent = mainParagraphs[indexImages];
}

function transitionMainHero1() {
    // mainHero.style.transform = "translateX(-100%)";
    // mainHero.style.transform = "translateX(0%)";
    // mainHero.style.transition = "transform 1s ease";

    // if (mainHero.classList != "hero--transition-2") {
    //     mainHero.classList.add("hero--transition-1");
    // }

    // mainHero.classList.remove("hero--transition-2");
    // console.log(mainHero.classList, "1");
    // mainHero.classList.replace("hero--transition-2", "hero--transition-1");
    mainHero.classList.add("hero--transition-1");
    // console.log(mainHero.classList, "2");
    // mainHero.classList.add("hero--transition-2");
    // mainHero.classList.replace("hero--transition-1", "hero--transition-2");
    // console.log(mainHero.classList, "3");
    // mainHero.classList.replace("hero--transition-1", "hero--transition-2");

    console.log("transition ok");
}

function transitionMainHero2() {
    // mainHero.style.transform = "translateX(-100%)";
    // mainHero.style.transform = "translateX(0%)";
    // mainHero.style.transition = "transform 1s ease";

    // if (mainHero.classList != "hero--transition-2") {
    //     mainHero.classList.add("hero--transition-1");
    // }

    // mainHero.classList.remove("hero--transition-2");
    // console.log(mainHero.classList, "1");
    // mainHero.classList.replace("hero--transition-2", "hero--transition-1");
    mainHero.classList.replace("hero--transition-1", "hero--transition-2");
    // console.log(mainHero.classList, "2");
    // mainHero.classList.add("hero--transition-2");
    // mainHero.classList.replace("hero--transition-1", "hero--transition-2");
    // console.log(mainHero.classList, "3");
    // mainHero.classList.replace("hero--transition-1", "hero--transition-2");

    console.log("transition ok");
}

function transitionMainContent1() {
    // mainHero.style.transform = "translateX(-100%)";
    // mainHero.style.transform = "translateX(0%)";
    // mainHero.style.transition = "transform 1s ease";

    // if (mainHero.classList != "hero--transition-2") {
    //     mainHero.classList.add("hero--transition-1");
    // }

    // mainHero.classList.remove("hero--transition-2");
    // console.log(mainHero.classList, "1");
    // mainHero.classList.replace("hero--transition-2", "hero--transition-1");
    mainContent.classList.remove("main__content--transition-2");
    mainContent.classList.add("main__content--transition-1");
    // console.log(mainHero.classList, "2");
    // mainHero.classList.add("hero--transition-2");
    // mainHero.classList.replace("hero--transition-1", "hero--transition-2");
    // console.log(mainHero.classList, "3");
    // mainHero.classList.replace("hero--transition-1", "hero--transition-2");

    console.log("transition ok");
}

function transitionMainContent2() {
    // mainHero.style.transform = "translateX(-100%)";
    // mainHero.style.transform = "translateX(0%)";
    // mainHero.style.transition = "transform 1s ease";

    // if (mainHero.classList != "hero--transition-2") {
    //     mainHero.classList.add("hero--transition-1");
    // }

    // mainHero.classList.remove("hero--transition-2");
    // console.log(mainHero.classList, "1");
    // mainHero.classList.replace("hero--transition-2", "hero--transition-1");
    mainContent.classList.replace("main__content--transition-1", "main__content--transition-2");
    // console.log(mainHero.classList, "2");
    // mainHero.classList.add("hero--transition-2");
    // mainHero.classList.replace("hero--transition-1", "hero--transition-2");
    // console.log(mainHero.classList, "3");
    // mainHero.classList.replace("hero--transition-1", "hero--transition-2");

    console.log("transition ok");
}

// function transformMainHero() {
//     mainHero.style.transform = "translateX(-100%)";
// }

// function resetMainHeroTranslate() {
//     mainHero.style.transform = "translateX(-100%)";
// }

// It generates a minimal delay so that the transition functions can work correctly.
const waitFunc = async() => {
    await new Promise(resolve => setTimeout(resolve, 10));

    transitionMainHero2();
    transitionMainContent2();
}

// const waitFunc2 = async() => {
//     await new Promise(resolve => setTimeout(resolve, 10));

//     // transitionMainHero2();
//     transitionMainContent2();
// }

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
    // transformMainHero();
    // mainHero.style.transform = "translateX(-100%)";
    // if (mainHero.style.transform = "matrix(1, 0, 0, 1, 0, 0)") {
    //     // resetMainHeroTranslate();
    //     mainHero.style.transform = "translateX(-100%)";
    //     console.log("reset ok")
    // }
    // resetMainHeroTranslate();
    transitionMainHero1();
    transitionMainContent1();
    // setTimeout(resolve => resolve, 1000);
    // setTimeout(transitionMainHero2(), 1000);
    // new Promise(resolve => setTimeout(resolve, 200));
    waitFunc();
    waitFunc2();
    // transitionMainHero2()
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
    transitionMainHero1();
    transitionMainContent1();
    waitFunc();
    waitFunc2();
});

changingTitles();
changingParagraphs();
updateHeroBackground();
// resetMainHeroTranslate();
transitionMainHero1();
transitionMainContent1();
// transitionMainHero2();
waitFunc();
waitFunc2();


// console.log(indexImages);