$(document).ready(function() {

    $('#owl-carousel-1').owlCarousel({
        lazyLoad: false,
        autoplay: false,
        loop: true,
        nav: true,
        navSpeed: 500,
        items: 3,
        dots: false,
        margin: 40,
        slideSpeed: 300,
        paginationSpeed: 400
    });
    $('#owl-carousel-2').owlCarousel({
        lazyLoad: false,
        autoplay: false,
        loop: true,
        nav: false,
        navSpeed: 500,
        items: 1,
        dots: false,
        margin: 40,
        slideSpeed: 300,
        paginationSpeed: 400,
    });

    $('#scroll_to_top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 700);
        return false;
    });


    newsSliderController();
    textSliderController();
    addAnimationWhenScroll();
    preLoading();
});

function preLoading() {
    $(".img-header").on('load', function() {
        $(".pre-loading").hide();
        setAnimationForSloganWhenFirstScroll();
        initAnimationForAllSection();
    });
}

function initAnimationForAllSection() {
    AOS.init({
        once: false,
        mirror: true,
        delay: 400,
        easing: 'ease-out-back',
        duration: 2000
    });
}

function setAnimationForSloganWhenFirstScroll() {
    $(window).one("scroll", function() {
        $(".test").css("transform", "scaleY(1)");
    });
}

function addAnimationWhenScroll() {
    var image = document.getElementsByClassName('img-header');
    new simpleParallax(image, {
        delay: 2,
        scale: 1.2
    });
}

function newsSliderController() {
    var owl1 = $('#owl-carousel-1');
    // Go to the next item of slider news
    $('.am-next').click(function() {
        owl1.trigger('next.owl.carousel', [300]);
    });

    // Go to the previous news
    $('.am-prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl1.trigger('prev.owl.carousel', [300]);
    });
}

function textSliderController() {
    var owl2 = $('#owl-carousel-2');
    // Go to the next item of slider text
    $('.btn-pre-next-slider').click(function() {
        owl2.trigger('next.owl.carousel', [300]);
    });

    // Go to the previous item of sliderText
    $('.btn-pre-slider').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl2.trigger('prev.owl.carousel', [300]);
    });
}