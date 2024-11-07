<script>
;( function() {

  // wait until gsap & ScrollTrigger available
  let chck_if_gsap_loaded = setInterval( function() {
    
    if( window.gsap && window.ScrollTrigger ) {
      
      // register scrolTrigger
      gsap.registerPlugin( ScrollTrigger );

      // ... do your thing
      my_stuff();

      // clear interval
      clearInterval( chck_if_gsap_loaded ); 
      
    }
    
  }, 500 );
  
  function my_stuff() {
  
    // My CODE
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);

    let sections = gsap.utils.toArray(".panel");

    function goToSection(i) {
      gsap.to(window, {
        scrollTo: {
          y: i * innerHeight,
          autoKill: false,
          ease: "Power3.easeInOut",
        },
        duration: 0.85,
      });
    }

    ScrollTrigger.defaults({
      // markers: true
    });

    sections.forEach((eachPanel, i) => {
      // const mainAnim = gsap.timeline({ paused: true });

      ScrollTrigger.create({
        trigger: eachPanel,
        onEnter: () => goToSection(i),
      });

      ScrollTrigger.create({
        trigger: eachPanel,
        start: "bottom bottom",
        onEnterBack: () => goToSection(i),
      });
    });
  	
  }
  
} )();
</script>

