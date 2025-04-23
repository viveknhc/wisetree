document.addEventListener('DOMContentLoaded', function () {
    // Register GSAP plugin
    gsap.registerPlugin(ScrollTrigger);

    const scrollContainer = document.querySelector('[data-scroll-container]');

    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
        el: scrollContainer,
        smooth: true,
        smartphone: { smooth: false },
        tablet: { smooth: true }
    });

    // Link Locomotive Scroll to ScrollTrigger
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

    // Update ScrollTrigger on Locomotive scroll
    scroll.on('scroll', ScrollTrigger.update);

    // Refresh ScrollTrigger on Locomotive update
    ScrollTrigger.addEventListener('refresh', () => scroll.update());
    ScrollTrigger.refresh();

    // ResizeObserver keeps Locomotive Scroll aware of content changes
    new ResizeObserver(() => scroll.update()).observe(scrollContainer);

    // Example animation: fade + move in .animate-me on scroll

    // gsap.from(".text-on-scroll", {
    //     scrollTrigger: {
    //         trigger: ".text-on-scroll",
    //         scroller: "[data-scroll-container]",
    //         start: "top 80%",
    //         end: "top 30%",
    //         scrub: true,
    //         // markers: true
    //     },
    //     y: 50,
    //     opacity: 0,
    //     duration: 1
    // });



});