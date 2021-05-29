$(document).ready(function(){
    // burger
    $('.header__burger').click(function(){
        $('.header__burger,.menu__body').toggleClass('active');
        $('body').toggleClass('lock');
        $('.menu__link').removeClass('scrolled');
        if($('.header__burger').hasClass('scrolled')){
            $('.header__burger').removeClass('scrolled');
        }else{
            if($(window).scrollTop() > 50){
            $('.header__burger').addClass('scrolled');
           }
        }

    });
    $('.menu__link').click(function(){
        $('body').removeClass('lock');
        $('.header__burger,.menu__body').removeClass('active');
                if($('.header__burger').hasClass('scrolled')){
            $('.header__burger').removeClass('scrolled');
        }else{
            if($(window).scrollTop() > 50){
            $('.header__burger').addClass('scrolled');
           }
        }

    });
    // scroll
    $(window).scroll(function(){
        if($(window).scrollTop() > 50){
            $('.header,.header__autor-name').addClass('scrolled');
            $('.header__burger').addClass('scrolled');
            $('.menu__link').addClass('scrolled');

        }
        else{
            $('.header,.header__autor-name').removeClass('scrolled');
            $('.header__burger').removeClass('scrolled');
            $('.menu__link').removeClass('scrolled');
        }

    });
});
