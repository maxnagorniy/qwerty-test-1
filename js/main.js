$(document).ready(function () {

    // MODAL WINDOW

    $('.modal-open').click(function (event) {
        event.preventDefault();

        var modalName = $(this).attr("data-modal-name");

        $('.overlay').fadeIn(400,
            function () {
                $('#' + modalName)
                    .css('display', 'block')

                    .animate({opacity: 1, top: '50%'}, 200);
                console.log("qwe");
            });
    });

    $('.close-modal, .overlay').click(function () {
        $('.modal-window')
            .animate({opacity: 0, top: '45%'}, 200,
                function () {
                    $(this).css('display', 'none');
                    $('.overlay').fadeOut(400);
                }
            );
    });

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

    // SELECT

    var selectBlock = $('.current_option');
    var selectOpenItem = $('.custom_options');

    selectBlock.on('click', function () {
        $(this).toggleClass('select_active');
        $('#select-icon').toggleClass('fa-caret-down fa-caret-up');
        selectOpenItem.toggle();
    });

    selectOpenItem.on('click', 'li', function () {

        selectBlock.toggleClass('select_active');
        $('#select-icon').toggleClass('fa-caret-down fa-caret-up');


        var choosenValue = $(this).data('value');
        var choosenText = $(this).text();

        $('select').val(choosenValue).prop('selected', true);

        selectBlock
            .data('value', choosenValue)
            .find('span')
            .text(choosenText);

        selectOpenItem.hide();
    });

    // INPUT MASK PHONE

    window.addEventListener("DOMContentLoaded", function () {
        function setCursorPosition(pos, elem) {
            elem.focus();
            if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
            else if (elem.createTextRange) {
                var range = elem.createTextRange();
                range.collapse(true);
                range.moveEnd("character", pos);
                range.moveStart("character", pos);
                range.select()
            }
        }

        function mask(event) {
            var matrix = "+38(___) ___-__-__",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, "");
            if (def.length >= val.length) val = def;
            this.value = matrix.replace(/./g, function (a) {
                return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
            });
            if (event.type == "blur") {
                if (this.value.length == 2) this.value = ""
            } else setCursorPosition(this.value.length, this)
        };

        var input = document.querySelector("#tel");
        var input2 = document.querySelector("#tel2");
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input2.addEventListener("input", mask, false);
        input2.addEventListener("focus", mask, false);
        input2.addEventListener("blur", mask, false);
    });
});