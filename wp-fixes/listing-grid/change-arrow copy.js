<script>
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(function() {
    
    var prevArrow = document.querySelector('.elementor-swiper-button.elementor-swiper-button-prev');
    
    var nextArrow = document.querySelector('.elementor-swiper-button.elementor-swiper-button-next');

    var _arrow = '<svg xmlns="http://www.w3.org/2000/svg" width="74" height="18" viewBox="0 0 74 18" fill="none"><path d="M74 8.74805L2 8.74805" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" fill="none"></path><path d="M11 1.74805L2 8.74805L11 15.748" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square" fill="none"></path></svg>';
    if (prevArrow) {
        prevArrow.innerHTML = _arrow;
    }
    if (nextArrow) {
        nextArrow.innerHTML = _arrow;
    }
    
        }, 1000);
});
</script>


// Testimonial widget
<style>
    .elementor-swiper-button.elementor-swiper-button-prev, .elementor-swiper-button.elementor-swiper-button-next {
        font-family: "Bebas Neue", Sans-serif;
    font-size: 3.5rem !important;
    font-weight: 700;
    line-height: 1.3em;
    letter-spacing: 0em;
    color: #4A96AF;
    top: 1.5rem !important;
    }
    .elementor-swiper-button.elementor-swiper-button-prev {
    
    left: -2rem !important;
        
    }
    .elementor-swiper-button.elementor-swiper-button-next {
    
    right: -2rem !important;
        
    }
    @media screen and (max-width: 767px) {
  .elementor-swiper-button.elementor-swiper-button-prev {
    
    left: -1rem !important;
        
    }
    .elementor-swiper-button.elementor-swiper-button-next {
    
    right: -1rem !important;
        
    }
}
</style>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(function() {
    
    var prevArrow = document.querySelector('.elementor-swiper-button.elementor-swiper-button-prev');
    
    var nextArrow = document.querySelector('.elementor-swiper-button.elementor-swiper-button-next');

    var _arrow = '«';
    if (prevArrow) {
        prevArrow.innerHTML = '«';
    }
    if (nextArrow) {
        nextArrow.innerHTML = '»';
    }
    
        }, 1000);
});
</script>