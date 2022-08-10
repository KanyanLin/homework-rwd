$(document).ready(function () {
    $('.mobile_menu').click(function (e) {
        e.preventDefault();
        $('body').toggleClass('showMenu');
    });
});