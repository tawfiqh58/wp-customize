<script>
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(function() {
    
    var prevArrow = document.querySelector('.jet-listing-grid__slider-icon.prev-arrow');
    
    var nextArrow = document.querySelector('.jet-listing-grid__slider-icon.next-arrow');

    var _arrow = '<svg viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg" role="img"><path opacity="0.6" d="M4.33594 9.94531L0.117188 5.72656C0.0292969 5.63867 0 5.52148 0 5.375C0 5.25781 0.0292969 5.14062 0.117188 5.05273L4.33594 0.833984C4.51172 0.658203 4.83398 0.658203 5.00977 0.833984C5.18555 1.00977 5.18555 1.33203 5.00977 1.50781L1.58203 4.90625H14.5312C14.7656 4.90625 15 5.14062 15 5.375C15 5.63867 14.7656 5.84375 14.5312 5.84375H1.58203L5.00977 9.27148C5.18555 9.44727 5.18555 9.76953 5.00977 9.94531C4.83398 10.1211 4.51172 10.1211 4.33594 9.94531Z" fill="#153A5B"></path></svg>';
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