(function () {
  // locomotive scroll storage
  var loco_scroll = {};

  // wait until sfe_loco_scroll available
  var chck_if_sfe_loco_scroll_loaded = setInterval(function () {
    if (
      window.sfe_loco_scroll &&
      Object.keys(window.sfe_loco_scroll).length !== 0 &&
      window.gsap &&
      window.ScrollTrigger
    ) {
      // store locomitive scroll object for the local usage
      loco_scroll = window.sfe_loco_scroll;

      // register scrollTrigger
      gsap.registerPlugin(ScrollTrigger);

      // ... do your thing
      my_thing();

      // clear interval
      clearInterval(chck_if_sfe_loco_scroll_loaded);
    }
  }, 500);

  function my_thing() {
    /* DON'T CHANGE THIS */

    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    loco_scroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the '.sfe-locomotive-scroll-wrapper' element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".sfe-locomotive-scroll-wrapper", {
      scrollTop(value) {
        return arguments.length
          ? loco_scroll.scrollTo(value, 0, 0)
          : loco_scroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },

      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".sfe-locomotive-scroll-wrapper").style
        .transform
        ? "transform"
        : "fixed",
    });

    /* DON'T CHANGE THIS END */

    // ------------------------------------------------------ START YOUR OWN CODE FROM HERE

    gsap.to("#id", {
      scale: 1.5,
      scrollTrigger: {
        scroller:
          ".sfe-locomotive-scroll-wrapper" /* don't ever forget about this one, it's a MUST !!! */,
        trigger: "#id",
        start: "top top",
      },
    });

    //  ------------------------------------------------------ END YOUR OWN CODE HERE

    /* DON'T CHANGE THIS */

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => loco_scroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

    /* DON'T CHANGE THIS END */

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
})();
