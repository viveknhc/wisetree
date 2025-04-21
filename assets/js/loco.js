document.addEventListener('DOMContentLoaded', function () {
    const scrollContainer = document.querySelector('[data-scroll-container]');

    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
        el: scrollContainer,
        smooth: true,
        smartphone: { smooth: false },
        tablet: { smooth: true }
    });

    // Update scroll when window resizes
    new ResizeObserver(() => scroll.update()).observe(scrollContainer);

    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Sync ScrollTrigger with Locomotive
    scroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollContainer, {
        scrollTop(value) {
            return arguments.length
                ? scroll.scrollTo(value, 0, 0)
                : scroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        pinType: scrollContainer.style.transform ? "transform" : "fixed"
    });

    // Refresh both on load
    ScrollTrigger.addEventListener("refresh", () => scroll.update());
    ScrollTrigger.refresh();

    // Animate .feature-item on scroll
    gsap.to(".feature-item", {
        scrollTrigger: {
            trigger: ".feature-item",
            scroller: "[data-scroll-container]",
            start: "top 50%",
            end: "top 10%",
            scrub: true,
            pin: true,
            // markers: true, // Uncomment to debug positions
        },
        scale: 1,
        
        left:"10%",
        ease: "power2.out"
    });
});

