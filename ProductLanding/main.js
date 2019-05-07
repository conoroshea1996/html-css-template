$(function () {
    $('.menu-toggle, .fa-times').on('click' , function () {
        $('nav').toggleClass('active');
        $('.overlay').toggleClass('menu-open');
        
    });
    
    $('.menu-toggle, .fa-times').on('click' , function () {
        $(this).removeClass('active');
        $(this).removeClass('menu-open');
        
    });

});