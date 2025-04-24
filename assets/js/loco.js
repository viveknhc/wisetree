
// Lenis scroll Initialisation with Gsap
const lenis = new Lenis({
  smooth: true
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
gsap.registerPlugin(ScrollTrigger);

lenis.on('scroll', ScrollTrigger.update);

ScrollTrigger.scrollerProxy(document.body, {
  scrollTop(value) {
    return arguments.length ? lenis.scrollTo(value) : lenis.scroll;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  pinType: document.body.style.transform ? "transform" : "fixed"
});


// feature section animation
ScrollTrigger.matchMedia({
  "(min-width: 1280px)": function () {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".feature-section .content-box",
        start: "top top",
        end: "+=2000",
        scrub: true,
        pin: true,
        ease: "power2.out"
      }
    });

    tl.to(".box:nth-child(1)", {
      y: -450,
      x: -450,
      scale: 1,
      opacity: 1,
      duration: 1.5,
      ease: "power2.out"
    })
      .to(".box:nth-child(2)", {
        y: -400,
        x: -400,
        opacity: 1,
        duration: 1.5,
        scale: 1
      })
      .to(".box:nth-child(3)", {
        y: -300,
        x: -300,
        opacity: 1,
        duration: 1.5,
        scale: 1
      })
      .to(".box:nth-child(4)", {
        y: -200,
        x: -200,
        opacity: 1,
        duration: 1.5,
        scale: 1
      });
  }
});

gsap.utils.toArray("header .home-banner .text-box-wrap .text-box:nth-child(1) h1").forEach((el) => {
  gsap.to(el, {
    xPercent: 20,
    ease: "none",
    scrollTrigger: {
      trigger: el,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    }
  });
});

gsap.utils.toArray("header .home-banner .text-box-wrap .text-box:nth-child(2) h1").forEach((el) => {
  gsap.to(el, {
    xPercent: -20,
    ease: "none",
    scrollTrigger: {
      trigger: el,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    }
  });
});



gsap.utils.toArray("header .home-banner .banner-pattern1").forEach((el) => {
  gsap.to(el, {
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
      trigger: el,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,

    }
  });
});

gsap.utils.toArray("header .home-banner .banner-pattern2").forEach((el) => {
  gsap.to(el, {
    yPercent: 50,
    ease: "none",
    scrollTrigger: {
      trigger: el,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,

    }
  });
});

// show up the div while scrolling
gsap.utils.toArray(".text-on-scroll").forEach((el) => {
  const speed = parseFloat(el.getAttribute("anim-speed")) || 1;

  gsap.from(el, {
    y: 50 * speed,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      end: "top 30%",
      scrub: true
    }
  });
});

// Left Scroll
gsap.utils.toArray(".left-scroll").forEach((el) => {
  let speed = parseFloat(el.dataset.speed) || 1;

  gsap.to(el, {
    xPercent: -10 * speed, 
      ease: "none",
      scrollTrigger: {
          trigger: el,
          start: 'top 30%',
          end: 'bottom 50%',
          scrub: true,
          // markers:true
      }
  });
});



ScrollTrigger.addEventListener('refresh', () => lenis.update());
ScrollTrigger.refresh();


