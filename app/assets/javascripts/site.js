$(document).ready(function() {

    // Hamburger Menu
    $('body').on('click', function() {
        $('body').css('overflow', 'auto');
        $('.hamburger-menu').removeClass('active');
    });

    $('.hamburger-menu-trigger').on('click', function(e) {
        e.stopPropagation();
        if($('.hamburger-menu').hasClass('active')) {
            $('body').css('overflow', 'auto');
            $('.hamburger-menu').removeClass('active');
        } else {
            $('body').css('overflow', 'hidden');
            $('.hamburger-menu').addClass('active');
        }
    });

    $('.hamburger-menu').on('click', function(e) {
        e.stopPropagation();
    });

    $('.hamburger-menu a').on('click', function(e) {
        $('.hamburger-menu').removeClass('active');
    });

});
