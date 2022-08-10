$(document).ready(function () {    
    $('.toLogin').click(function (e) { 
        e.preventDefault();
        // window.location.href = 'login.html#login';
        window.location.replace('login.html#login');
    });
});