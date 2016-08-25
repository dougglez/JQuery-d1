$(document).ready(function() {
    var menuButton = $('.js-open-menu'),
        logoBox = $('.header__logo_box');

        menuButton.on('click', function(){
            $('.menu--02--desktop').addClass('slide-menu');
        });

        logoBox.on('mouseenter', function(){
            console.log('hey from logo box');
        });

        $('.js-scroll-fullscreen').on('click', function(){
            $('.js-cover').slideToggle( 900, function() {
                console.log('complete')
            });
        });


    (function() {
        var $sliders = $('.js-slider');
        $sliders.on('init', function(slick){
            $('.cover__slider__dots')
                .wrap('<div class="cover__slider__dots_container"></div>');
        });

        $sliders.slick();
    })();




});
