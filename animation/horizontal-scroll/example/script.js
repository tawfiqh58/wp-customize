const horizontalSection = document.getElementById('section3');
const cardList = horizontalSection.querySelector('.card-list');

gsap.registerPlugin(ScrollTrigger);

const scrollTween = gsap.timeline({ 
    scrollTrigger: {
        trigger: horizontalSection,
        pin: true, 
        start: 'top top', 
        end: () => `+=${cardList.scrollWidth - horizontalSection.offsetWidth}`, 
        scrub: true 
    }
}).fromTo(cardList, {
    x: 0
}, {
    x: () => -(cardList.scrollWidth - horizontalSection.offsetWidth), 
    ease: 'none' 
});

function resizeHandler() {
    const isMobile = window.innerWidth < 768; // Adjust breakpoint as needed
    if (isMobile) {
      setTimeout(() => {
        scrollTween.scrollTrigger.disable();
      }, 100); // Adjust delay in milliseconds if needed
    } else {
      scrollTween.scrollTrigger.enable();
    }
  }
  

window.addEventListener('resize', resizeHandler);
resizeHandler(); // Call on initial page load 
