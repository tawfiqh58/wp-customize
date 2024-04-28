const horizontalSection = document.getElementById('section3');
const cardList = horizontalSection.querySelector('.card-list');

gsap.registerPlugin(ScrollTrigger);

gsap.timeline({
    scrollTrigger: {
        trigger: horizontalSection,
        pin: true, 
        start: 'top top+=50', 
        end: () => `+=${cardList.scrollWidth - horizontalSection.offsetWidth}`, 
        scrub: true 
    }
}).fromTo(cardList, {
    x: 0
}, {
    x: () => -(cardList.scrollWidth - horizontalSection.offsetWidth), 
    ease: 'none' 
});
