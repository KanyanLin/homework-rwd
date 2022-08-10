$(document).ready(function () {
    // 預設載入頁面
    $(".main").load("intro.html");

    // 行動版選單
    $('.mobile_menu').click(function (e) {
        e.preventDefault();
        $('body').toggleClass('showMenu');
    });

    // 選單Load
    // 特色
    $('.toFeature').click(function (e) {
        e.preventDefault();
        // 關閉行動版選單
        $('body').removeClass('showMenu');
        // 載入頁面
        let loadhtml = () => {
            $(".main").load("intro.html");
        }
        $.when(loadhtml()).done(function () {
            $('html, body').animate({
                scrollTop: $("#features").offset().top
            }, 0);
        });
    });
    // 主廚
    $('.toChef').click(function (e) {
        e.preventDefault();
        // 關閉行動版選單
        $('body').removeClass('showMenu');
        // 載入頁面
        let loadhtml = () => {
            $(".main").load("intro.html");
        }
        $.when(loadhtml()).done(function () {
            $('html, body').animate({
                scrollTop: $("#chef").offset().top
            }, 0);
        });
    });
    // 地圖
    $('.toMap').click(function (e) {
        e.preventDefault();
        // 關閉行動版選單
        $('body').removeClass('showMenu');
        // 載入頁面
        let loadhtml = () => {
            $(".main").load("intro.html");
        }
        $.when(loadhtml()).done(function () {
            $('html, body').animate({
                scrollTop: $("#booking").offset().top
            }, 0);
        });
    });
    // 菜單
    $('.toMenu').click(function (e) {
        e.preventDefault();
        // 關閉行動版選單
        $('body').removeClass('showMenu');
        // 載入頁面
        let loadhtml = () => {
            $(".main").load("cart.html");
        }
        $.when(loadhtml()).done(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 0);
        });
    });
    // 登入
    $('.toLogin').click(function (e) {
        e.preventDefault();
        // 關閉行動版選單
        $('body').removeClass('showMenu');
        // 載入頁面
        let loadhtml = () => {
            $(".main").load("login.html");
        }
        $.when(loadhtml()).done(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 0);
        });
    });
});