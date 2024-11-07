<!-- Load Lenis Smooth Scroll -->
<script src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@0.2.28/bundled/lenis.js"></script>

<!-- Load GSAP library -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.0/gsap.min.js"></script>
<!-- Load GSAP ScrollTrigger plugin -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.0/ScrollTrigger.min.js"></script>

<script>
// Your existing Lenis Smooth Scroll initialization
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

// Enable GSAP animation on ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Function to smoothly scroll to the next or previous section
let scrollTimeout;
function scrollSmoothly(direction) {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  const sections = document.querySelectorAll('.my-sections');

  let targetScroll = currentScroll;

  // Find the first section below the bottom edge of the viewport for scrolling down
  // or the last section above the top edge of the viewport for scrolling up
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();

    if (direction === 'down' && rect.top > window.innerHeight) {
      targetScroll = rect.top + currentScroll;
      return false; // Exit forEach loop
    } else if (direction === 'up' && rect.bottom < 0) {
      targetScroll = rect.bottom + currentScroll;
    }
  });

  // Smoothly scroll to the target section
  lenis.scrollTo(targetScroll);
}

// Observe scroll direction and trigger smooth scrolling with debouncing
lenis.on('scroll', ({ direction }) => {
  if (!scrollTimeout) {
    if (direction === 1 && window.innerHeight + window.scrollY < document.body.offsetHeight) {
      scrollSmoothly('down');
    } else if (direction === -1 && window.scrollY > 0) {
      scrollSmoothly('up');
    }

    // Set a timeout to prevent further calls for 0.5 seconds
    scrollTimeout = setTimeout(() => {
      scrollTimeout = null;
    }, 500); // Debounce time: 0.5 seconds
  }
});

// Update Lenis scroll on each animation frame
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
</script>

