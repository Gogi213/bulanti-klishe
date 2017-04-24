$(document).ready(function() {

    $('.top-menu ul li:nth-child(1)').click(function() {
        console.log('111');
        var offset_top = $('.header').offset().top - 100;
        $("html:not(:animated) ,body:not(:animated)").animate({scrollTop: offset_top}, 800);
        return false;
    });
    $('.top-menu ul li:nth-child(2)').click(function() {
         var offset_top = $('.block2').offset().top - 100;
        $("html:not(:animated) ,body:not(:animated)").animate({scrollTop: offset_top}, 800);
        return false;
    });
    $('.top-menu ul li:nth-child(3)').click(function() {
        var offset_top = $('.block4').offset().top - 100;
        $("html:not(:animated) ,body:not(:animated)").animate({scrollTop: offset_top}, 800);
        return false;
    });
    $('.top-menu ul li:nth-child(4)').click(function() {
         var offset_top = $('.block7').offset().top - 100;
        $("html:not(:animated) ,body:not(:animated)").animate({scrollTop: offset_top}, 800);
        return false;
    });
    $('.top-menu ul li:nth-child(5)').click(function() {
        var offset_top = $('.block3').offset().top - 100;
        $("html:not(:animated) ,body:not(:animated)").animate({scrollTop: offset_top}, 800);
        return false;
    });
    $('.top-menu ul li:nth-child(6)').click(function() {
         var offset_top = $('.block10').offset().top - 100;
        $("html:not(:animated) ,body:not(:animated)").animate({scrollTop: offset_top}, 800);
        return false;
    });
   


});