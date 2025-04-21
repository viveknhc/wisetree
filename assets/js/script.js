const body = document.querySelector('header');
const mouseStalker = document.querySelector(".mouse-stalker");
const hoverEffectElements = document.querySelectorAll(".hover-effect");

let msPos = {
    // mouse stalker position
    stalker: {
        x: document.documentElement.clientWidth / 2,
        y: document.documentElement.clientHeight / 2
    },
    // mouse position
    mouse: {
        x: document.documentElement.clientWidth / 2,
        y: document.documentElement.clientHeight / 2
    }
};

// check device type
if (window.matchMedia("(pointer: fine)")) {
    document.addEventListener("mouseover", msStalkerActivate);
}

// Show mouseStalker when mouse enter the window
body.addEventListener('mouseenter', showMouseStalker);

// Hide mouseStalker when mouse move out of the window
body.addEventListener('mouseleave', hideMouseStalker);

// mouse stalker activate
function msStalkerActivate() {
    mouseStalker.classList.add("isActive");
    document.removeEventListener("mouseover", msStalkerActivate);

    // set mouse position by mousemove
    document.addEventListener("mousemove", mousemove);
}

// Show mouseStalker
function showMouseStalker() {
    mouseStalker.classList.add("show");

    requestAnimationFrame(update);
}

// Hide mouseStalker
function hideMouseStalker() {
    mouseStalker.classList.remove("show");
}

function mousemove(e) {
    msPos.mouse.x = e.clientX;
    msPos.mouse.y = e.clientY;
}

// update function
function update() {
    // update mouse stalker position
    msPos.stalker.x += (msPos.mouse.x - msPos.stalker.x) * 0.1;
    msPos.stalker.y += (msPos.mouse.y - msPos.stalker.y) * 0.1;

    // round to 0.1
    const x = Math.round(msPos.stalker.x * 10) / 10;
    const y = Math.round(msPos.stalker.y * 10) / 10;

    // update mouse stalker style
    mouseStalker.style.transform = `translate3d(${x}px, ${y}px, 0)`;

    // start animation
    requestAnimationFrame(update);
}

// add event listener to hover effect elements
hoverEffectElements.forEach((element) => {
    element.addEventListener("mouseover", () => {
        addHoverEffectClass(element);
    });
    element.addEventListener("mouseout", () => {
        removeHoverEffectClass(element);
    });
});

// add hover effect classes
function addHoverEffectClass(hoveredElement) {
    if (hoveredElement.classList.contains("scale--small")) {
        mouseStalker.classList.add("scale--small");
    }
    if (hoveredElement.classList.contains("scale--large")) {
        mouseStalker.classList.add("scale--large");
    }
    if (hoveredElement.classList.contains("mix-blend")) {
        mouseStalker.classList.add("mix-blend");
    }
    if (hoveredElement.classList.contains("show-text")) {
        mouseStalker.classList.add("show-text");
    }
}

// remove hover effect classes
function removeHoverEffectClass(hoveredElement) {
    if (hoveredElement.classList.contains("scale--small")) {
        mouseStalker.classList.remove("scale--small");
    }
    if (hoveredElement.classList.contains("scale--large")) {
        mouseStalker.classList.remove("scale--large");
    }
    if (hoveredElement.classList.contains("mix-blend")) {
        mouseStalker.classList.remove("mix-blend");
    }
    if (hoveredElement.classList.contains("show-text")) {
        mouseStalker.classList.remove("show-text");
    }
}



// Who we are slider

var swiper = new Swiper(".whoSlider", {
    slidesPerView: "auto",
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-custom-next",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {

        200: {
            slidesPerView: 1,
            spaceBetween: 20
        },


        // When window width is >= 640px
        640: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // When window width is >= 768px
        767: {
            slidesPerView: 1,
            spaceBetween: 30
        },

        999: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // When window width is >= 1024px
        1024: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});




// Diiferent Scrolls
var swiper = new Swiper(".blogSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    effect: "fade",

    navigation: {
        nextEl: ".custom-next",
    },

    breakpoints: {
        200: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 25,
        },
        1024: {
            slidesPerView: 1,
            spaceBetween: 30,
        }
    }
});


