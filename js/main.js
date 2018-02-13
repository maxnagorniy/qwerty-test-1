$(document).ready(function () {

    // MENU TOGGLE

    $('.menu-open').click(function () {

        $(".menu-list").toggleClass('active');

        if($('.menu-list').hasClass('active')) {
            $('.overlay').fadeIn(400);
        } else {
            $('.overlay').fadeOut(400);
        }



        var iconSelect = ($('.menu-open .fa'));

        if (iconSelect.hasClass('fa-bars')) {
            iconSelect.removeClass('fa-bars');
            iconSelect.addClass('fa-times');
        } else if (iconSelect.hasClass('fa-times')) {
            iconSelect.removeClass('fa-times');
            iconSelect.addClass('fa-bars');
        }
    });


    $("#fontF").change(function() {
        $('.content-text').css("font-family", $(this).val());

    });

    $("#fontS").change(function() {
        $('.content-text').css("font-size", $(this).val() + "px");
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


    $( ".header-color-picker" ).change(function() {

        var colorPicker = $(this).val();

        $('.content').css("background", colorPicker);

    });

    $('.header-remove-text').click(function () {

        console.log('123');

        $('.content .container p:last-child').fadeOut('slow',function(){
            $(this).remove();
        });

    });





});