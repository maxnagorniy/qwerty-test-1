$(document).ready(function () {

    // MENU TOGGLE

    $('.menu-open').click(function () {
        $('.menu-list').slideToggle(300);

        var iconSelect = ($('.menu-open .fa'));

        if (iconSelect.hasClass('fa-bars')) {
            iconSelect.removeClass('fa-bars');
            iconSelect.addClass('fa-times');
        } else if (iconSelect.hasClass('fa-times')) {
            iconSelect.removeClass('fa-times');
            iconSelect.addClass('fa-bars');
        }
    });

    // EVENT RESIZE WINDOW

    function checkWidth() {
        var $window = $(window);
        var windowsize = $window.width();
        if (windowsize > 991) {
            $('.menu-list').removeAttr("style");
        }
    }

    checkWidth();
    $(window).resize(checkWidth);


    $('.sing-in').on('click', function () {
        $('.form-sing-in').toggle();
        $('.sing-up').click(function () {
            $('.form-sing-in').hide();
        })
    });

    $('.sing-up').on('click', function () {
        $('.form-sing-up').toggle();
        $('.sing-in').click(function () {
            $('.form-sing-up').hide();
        })
    });


});