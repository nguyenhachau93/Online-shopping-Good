$(document).ready(function() {

    var count = 0;
    var bg4 = 'image/slider_bg_4.jpeg';
    var bg2 = 'image/slider_bg_2.jpeg';
    var bg3 = 'image/slider_bg_3.jpeg';
    var bg1 = 'image/slider_bg_1.jpeg';

    var dot1 = '.homepage-slider .container .slider-circle .circle:nth-child(1)';
    var dot2 = '.homepage-slider .container .slider-circle .circle:nth-child(2)';
    var dot3 = '.homepage-slider .container .slider-circle .circle:nth-child(3)';
    var dot4 = '.homepage-slider .container .slider-circle .circle:nth-child(4)';
    $('.next').on('click', function() {
        count += 1;
        changeBackground(count); 
    });

    $('.prev').on('click', function() {
        count -= 1;
        if (count == -1) {
            count = 3;
        }
        changeBackground(count);
    });

    $('.hamburger-icon').on('click', function() {
        $('.mobile-menu').toggleClass('off-screen');
    })

    function changeBackground(count, direction) {
        var imagePosition = (Math.abs(count) % 4)+1;
        if (imagePosition == 1) {
            $(".homepage-slider").css('background-image', "url(" + bg1 +")");
            $(".homepage-slider").css('background-position', 'right');
            $(dot1).addClass('active');
            $(dot2).removeClass('active');
            $(dot4).removeClass('active');
        } else if (imagePosition == 2) {
            $(".homepage-slider").css('background-image', "url(" + bg2 +")");
            $(".homepage-slider").css('background-position', 'top 0% right 34%');
            $(dot2).addClass('active');
            $(dot1).removeClass('active');
            $(dot3).removeClass('active');
        } else if (imagePosition == 3) {
            $(".homepage-slider").css('background-image', "url(" + bg3 +")");
            $(".homepage-slider").css('background-position', 'left');
            $(dot3).addClass('active');
            $(dot2).removeClass('active');
            $(dot4).removeClass('active');
        } else if (imagePosition == 4) {
            $(".homepage-slider").css('background-image', "url(" + bg4 +")");
            $(dot4).addClass('active');
            $(dot3).removeClass('active');
            $(dot1).removeClass('active');
        }
    };
});