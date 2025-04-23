document.addEventListener('DOMContentLoaded', function () {
    gsap.registerPlugin(ScrollTrigger);
  
    const scrollContainer = document.querySelector('[data-scroll-container]');
  
    const scroll = new LocomotiveScroll({
      el: scrollContainer,
      smooth: true,
      smartphone: { smooth: false },
      tablet: { smooth: true }
    });
  
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
  
    scroll.on('scroll', ScrollTrigger.update);
    ScrollTrigger.addEventListener('refresh', () => scroll.update());
    ScrollTrigger.refresh();
  
    new ResizeObserver(() => scroll.update()).observe(scrollContainer);
  
    // Animate .text-on-scroll
    gsap.from(".text-on-scroll", {
      scrollTrigger: {
        trigger: ".text-on-scroll",
        scroller: "[data-scroll-container]",
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      },
      y: 50,
      opacity: 0,
      duration: 1
    });
  
    // Animate .box items inside .feature-section
    // const boxes = document.querySelectorAll(".feature-section .box");
  
    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".feature-section",
    //     scroller: "[data-scroll-container]", // Important for Locomotive!
    //     start: "50% 50%",
    //     end: "130% 50%",
    //     scrub: ,
    //     pin:true
    //   }
    // });
  
    // boxes.forEach((box, index) => {
    //   tl.to(box, {
    //     y: -200,
    //     x:100,
    //     scale: 1.2,
    //     opacity: 1,
    //     // filter: "blur(0px)",
    //     duration: 0.8,
    //     ease: "power2.out"
    //   }, index * 0.5);
    // });
  });
  