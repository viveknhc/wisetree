// Navbar Logic
document.getElementById("toggleOpen").addEventListener("change", function () {
    if (this.checked) {
        document.querySelector(".navbar-main").classList.add("active");
    }
});

document.getElementById("toggleClose").addEventListener("change", function () {
    if (this.checked) {
        document.querySelector(".navbar-main").classList.remove("active");
        document.getElementById("toggleOpen").checked = false;
        document.getElementById("toggleClose").checked = false;
    }
});

// end


// Mouse hover
const body = document.querySelector('header');
const mouseStalker = document.querySelector(".mouse-stalker");
const hoverEffectElements = document.querySelectorAll(".hover-effect");

let msPos = {
    stalker: {
        x: document.documentElement.clientWidth / 2,
        y: document.documentElement.clientHeight / 2
    },
    mouse: {
        x: document.documentElement.clientWidth / 2,
        y: document.documentElement.clientHeight / 2
    }
};

if (window.matchMedia("(pointer: fine)")) {
    document.addEventListener("mouseover", msStalkerActivate);
}

body.addEventListener('mouseenter', showMouseStalker);


body.addEventListener('mouseleave', hideMouseStalker);

function msStalkerActivate() {
    mouseStalker.classList.add("isActive");
    document.removeEventListener("mouseover", msStalkerActivate);

    document.addEventListener("mousemove", mousemove);
}

function showMouseStalker() {
    mouseStalker.classList.add("show");

    requestAnimationFrame(update);
}

function hideMouseStalker() {
    mouseStalker.classList.remove("show");
}

function mousemove(e) {
    msPos.mouse.x = e.clientX;
    msPos.mouse.y = e.clientY;
}

function update() {
    msPos.stalker.x += (msPos.mouse.x - msPos.stalker.x) * 0.1;
    msPos.stalker.y += (msPos.mouse.y - msPos.stalker.y) * 0.1;
    const x = Math.round(msPos.stalker.x * 10) / 10;
    const y = Math.round(msPos.stalker.y * 10) / 10;
    mouseStalker.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    requestAnimationFrame(update);
}

hoverEffectElements.forEach((element) => {
    element.addEventListener("mouseover", () => {
        addHoverEffectClass(element);
    });
    element.addEventListener("mouseout", () => {
        removeHoverEffectClass(element);
    });
});

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


var swiper = new Swiper(".whoSlider", {
    slidesPerView: "auto",
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: ".custom-next",
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
        640: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 30
        },

        999: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});


var swiper = new Swiper(".blogSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    effect: "fade",
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: ".custom-next",
    },

    breakpoints: {
        200: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 2,
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




