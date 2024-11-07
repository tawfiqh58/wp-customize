<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js"></script>


<script>

gsap.utils.toArray(".section-parallax .parallax-content").forEach((section, i) => {
  const heightDiff = section.offsetHeight - section.parentElement.offsetHeight;
  
  gsap.fromTo(section,{ 
    y: -heightDiff
  }, {
    scrollTrigger: {
      trigger: section,
      scrub: true
    },
    y: 0,
    ease: "none"
  });
});


</script>

	
