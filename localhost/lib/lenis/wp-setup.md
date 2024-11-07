https://vinjegaard.com/lenis-smooth-scroll/
https://github.com/studio-freight/lenis
https://irradiated-watch-2d6.notion.site/CODE-Grow-shrink-section-with-GSAP-Lenis-smooth-scroll-1-9f43cfe3a8da494b9afed5e80d1bd4db


// Lenis smooth scroll

<script src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@0.2.28/bundled/lenis.js"></script>

<script>
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: 'vertical', // vertical, horizontal
  gestureDirection: 'vertical', // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
})



lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
  console.log({ scroll, limit, velocity, direction, progress })
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
</script>

----

// GSAP
// Add this code in an HTML widget or Elementor custom code

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js"></script>

<script>
gsap.registerPlugin(ScrollTrigger);
const shrinkGrowSection = gsap.timeline({
  scrollTrigger: {
    trigger: ".shrink-grow-section",
    start: '100 center',
    scrub: true, // For smoother animation
    end: "max", // Adjust this value as needed
    ease: 'stepped.out',
    // markers: true,
    // duration:1,
  },
});

shrinkGrowSection
  .fromTo(".shrink-grow-section", { scale: 1.3 }, { scale: 1 }) // Shrink animation
  
</script>

// gradient on page scroll
<script>
    window.addEventListener('scroll', function() {
      var divs = document.getElementsByClassName('shrink-grow-section');
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      for (var i = 0; i < divs.length; i++) {
        var opacity = 1.5 - scrollTop / (divs[i].offsetTop + divs[i].offsetHeight);
        divs[i].style.opacity = opacity;
      }
    });
  </script>


// Lenis smooth scroll

<script src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@0.2.28/bundled/lenis.js"></script>

<script>
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: 'vertical', // vertical, horizontal
  gestureDirection: 'vertical', // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
})



lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
  console.log({ scroll, limit, velocity, direction, progress })
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
</script>

