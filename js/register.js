$(document).ready(function () {    
    $('.toLogin').click(function (e) { 
        e.preventDefault();
        $(".main").load("login.html");
    });
});