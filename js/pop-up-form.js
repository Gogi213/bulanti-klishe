$(function()
{

    $('.order').click(function()
    {
        $('.usermail,.usermessage').css({"display": "block"});
        var width = $(window).width();
        var margin = (width / 2) - ($('.pop-up-form').width() / 2) - 31.5;
        var id = $(this).attr('id');

        if ((id == 'order-call') || (id == 'order-call2')) {
            $('.usermail,.usermessage').css({"display": "none"});
        }
        $('.pop-up-form-container-inner').css({"margin-left": margin});
        $('.pop-up-form-container').css({"display": "block"});
        $('.pop-up-form-container-inner').stop().animate({"top": "0px"}, 600);
        $('.pop-up-form-container').stop().animate({"opacity": "0.5"}, 1600);
        return false;
    }


    );
    $('.order2').click(function()
    {
        var width = $(window).width();
        var margin = (width / 2) - ($('.pop-up-form').width() / 2) - 31.5;

        $('.pop-up-form-container-inner2').css({"margin-left": margin});
        $('.pop-up-form-container').css({"display": "block"});
        $('.pop-up-form-container-inner2').stop().animate({"top": "0px"}, 600);
        $('.pop-up-form-container').stop().animate({"opacity": "0.5"}, 1600);
        return false;
    }


    );

    $('.pop-up-form-container,.cross').click(function()
    {

        $('.pop-up-form-container-inner').stop().animate({"top": "-1000px"}, 600);
        $('.pop-up-form-container-inner2').stop().animate({"top": "-1000px"}, 600);
        $('.pop-up-form-container').stop().animate({"opacity": "0"}, 1600);
        $('.pop-up-form-container').css({"display": "none"});
    }
    );
    //$('.wrapper-index .block3-item-inner').hover(function() {       
    //  $(this).children('.block3-item-inner-hover').stop().animate({"margin-top": "-300px"}, 300);
    //  },
    //   function() {
    //     $(this).children('.block3-item-inner-hover').stop().animate({"margin-top": "0px"}, 300);
    //  });
    $('.pop-up-contacts-container').click(function()
    {

        $('.pop-up-contacts').stop().animate({"opacity": "0"}, 600);
        $('.pop-up-contacts-container').stop().animate({"opacity": "0"}, 1600);
        setTimeout(function() {
            $('.pop-up-contacts-container').css({"display": "none"});
            $('.pop-up-contacts').css({"display": "none"});
        }, 1600);
    }
    );
    
     $('.pop-up-sertificate-container').click(function()
    {

        $('.pop-up-sertificate1,.pop-up-sertificate2,.pop-up-sertificate3').stop().animate({"opacity": "0"}, 600);
        $('.pop-up-sertificate-container').stop().animate({"opacity": "0"}, 1600);
        setTimeout(function() {
            $('.pop-up-sertificate-container').css({"display": "none"});
            $('.pop-up-sertificate1,.pop-up-sertificate2,.pop-up-sertificate3').css({"display": "none"});
        }, 1600);
    }
    );
    

    $('.sertificate1').click(function() {
     var width = $(window).width();
     var margin = (width / 2) - ($('.pop-up-sertificate').width() / 2) - 31.5;
     $('.pop-up-sertificate1').css({"margin-left": margin});
     $('.pop-up-sertificate1').css({"display": "block"});
     $('.pop-up-sertificate1').stop().animate({"opacity": "1"}, 600);
     $('.pop-up-sertificate-container').css({'display': 'block'});
     $('.pop-up-sertificate-container').stop().animate({"opacity": "0.5"}, 1600);
     
     });
     $('.sertificate2').click(function() {
     var width = $(window).width();
     var margin = (width / 2) - ($('.pop-up-sertificate').width() / 2) - 31.5;
     $('.pop-up-sertificate2').css({"margin-left": margin});
     $('.pop-up-sertificate2').css({"display": "block"});
     $('.pop-up-sertificate2').stop().animate({"opacity": "1"}, 600);
     $('.pop-up-sertificate-container').css({'display': 'block'});
     $('.pop-up-sertificate-container').stop().animate({"opacity": "0.5"}, 1600);
     
     });
     $('.sertificate3').click(function() {
     var width = $(window).width();
     var margin = (width / 2) - ($('.pop-up-sertificate').width() / 2) - 31.5;
     $('.pop-up-sertificate3').css({"margin-left": margin});
     $('.pop-up-sertificate3').css({"display": "block"});
     $('.pop-up-sertificate3').stop().animate({"opacity": "1"}, 600);
     $('.pop-up-sertificate-container').css({'display': 'block'});
     $('.pop-up-sertificate-container').stop().animate({"opacity": "0.5"}, 1600);
     
    });/*
     $('.sertificate5').click(function() {
     var width = $(window).width();
     var margin = (width / 2) - ($('.pop-up-sertificate').width() / 2) - 31.5;
     $('.pop-up-sertificate5').css({"margin-left": margin});
     $('.pop-up-sertificate5').css({"display": "block"});
     $('.pop-up-sertificate5').stop().animate({"opacity": "1"}, 600);
     $('.pop-up-sertificate-container').css({'display': 'block'});
     $('.pop-up-sertificate-container').stop().animate({"opacity": "0.5"}, 1600);
     
     });
     $('.sertificate6').click(function() {
     var width = $(window).width();
     var margin = (width / 2) - ($('.pop-up-sertificate').width() / 2) - 31.5;
     $('.pop-up-sertificate6').css({"margin-left": margin});
     $('.pop-up-sertificate6').css({"display": "block"});
     $('.pop-up-sertificate6').stop().animate({"opacity": "1"}, 600);
     $('.pop-up-sertificate-container').css({'display': 'block'});
     $('.pop-up-sertificate-container').stop().animate({"opacity": "0.5"}, 1600);
     
     });
     $('.sertificate7').click(function() {
     var width = $(window).width();
     var margin = (width / 2) - ($('.pop-up-sertificate').width() / 2) - 31.5;
     $('.pop-up-sertificate7').css({"margin-left": margin});
     $('.pop-up-sertificate7').css({"display": "block"});
     $('.pop-up-sertificate7').stop().animate({"opacity": "1"}, 600);
     $('.pop-up-sertificate-container').css({'display': 'block'});
     $('.pop-up-sertificate-container').stop().animate({"opacity": "0.5"}, 1600);
     
     });*/
    $('.slider-code .overview li').hover(function() {
        $(this).children('.corusel-inner').css({"display": "block"});
        $(this).children('.corusel-inner').stop().animate({'opacity': '1'}, 400);
    }, function() {
        $(this).children('.corusel-inner').stop().animate({'opacity': '0'}, 400);
        setTimeout(function($this) {
            $(this).children('.corusel-inner').css({"display": "none"});
        }, 400);
    });
    /*$('.overview2').hover(function() {
     $(this).stop().animate({'right': '0px'});
     $('.overview-inner').css({'background-image': 'none'});
     $('.overview-inner li').stop().animate({'opacity': '1'}, 300);
     $('.play-button-small').stop().animate({'opacity': '1'}, 300);
     }, function() {
     $(this).stop().animate({'right': '-120px'});
     $('.overview-inner li').stop().animate({'opacity': '0'}, 300);
     $('.play-button-small').stop().animate({'opacity': '0'}, 300);
     setTimeout(function() {
     $('.overview-inner').css({'background-image': 'url(images/bg/bg-25.png)',
     'background-position': '10px center',
     'background-repeat': 'no-repeat'});
     }, 500);
     });*/

    function slide_right() {

        $('.click-here').stop().animate({'left': '-5px'}, 600);
        $('.left-arrow').stop().animate({'opacity': '1'}, 300);
        $('.click-here-heading-inner').stop().animate({'opacity': '0'}, 300);
        setTimeout(function() {
            $('.click-here-heading-inner').css({'background-image': 'url(images/bg/bg-26.png)'});
            $('.click-here-heading-inner').stop().animate({'opacity': '1'}, 300);
        }, 600);
    }
    function slide_left() {

        $('.click-here').stop().animate({'left': '-482px'}, 600);
        $('.left-arrow').stop().animate({'opacity': '0.4'}, 300);
        $('.click-here-heading-inner').stop().animate({'opacity': '0'}, 300);
        setTimeout(function() {
            $('.click-here-heading-inner').css({'background-image': 'url(images/bg/bg-27.png)'});
            $('.click-here-heading-inner').stop().animate({'opacity': '1'}, 300);
        }, 600);
    }

    var flag = new Boolean(true);
    $('.click-here-heading').click(function() {
        if (flag) {//Если flag == true
            flag = false; //Меняем значение переменной flag
            slide_right.call(this); //Вызываем func1 с контекстом этой функции (т.е. в вызванной функции this = this этой функции)
        } else {//Если flag не равно true
            flag = true;
            slide_left.call(this);
        }
        return false;
    });
    function colum_up() {
        if (scroll_flag == 1) {
            $('.colums .colum-item:nth-child(1)').children('.colum-item-content').animate({'height': '250px'}, 600);
            $('.colums .colum-item:nth-child(2)').children('.colum-item-content').animate({'height': '208px'}, 600);
            $('.colums .colum-item:nth-child(3)').children('.colum-item-content').animate({'height': '304px'}, 600);
            $('.colums .colum-item:nth-child(4)').children('.colum-item-content').animate({'height': '160px'}, 600);
            $('.colums .colum-item:nth-child(5)').children('.colum-item-content').animate({'height': '250px'}, 600);
            $('.colums .colum-item:nth-child(6)').children('.colum-item-content').animate({'height': '356px'}, 600);
        }



    }
    var scroll_flag = 1;
    $(window).scroll(function() {
        var s = $(window).scrollTop();
//
        if (s > 100) {

            colum_up();
            scroll_flag++;

        }
//        ;
//        if ((s > 799) && (s < 3000)) {
//            $('.overview2 ul li').removeClass('active');
//            $('.2').addClass('active');
//        }
//        ;
//        if ((s > 2999) && (s < 4200)) {
//            $('.overview2 ul li').removeClass('active');
//            $('.3').addClass('active');
//        }
//        ;
//        if ((s > 4199)) {
//            $('.overview2 ul li').removeClass('active');
//            $('.4').addClass('active');
//        }
//        ;
        // if ((s > 1000)) {
        //      $('.block1 .odd  img').stop().animate({'right': '0'}, 600);
        //      $('.block1 .even img').stop().animate({'left': '0'}, 600);
        //   }
        //   if ((s < 1000)) {
        //       $('.block1 .even img').stop().animate({'left': '-800px'}, 600);
        //       $('.block1 .odd img').stop().animate({'right': '-800px'}, 600);
        //   }
//        if (s < 1500) {
//            $('body').css({'background-position': 'center top'});
//        }
//
//        if ((s > 1500) && (s < 5382)) {
//            $('body').css({'background-position': 'center -1060px'});
//        }
//        if (s > 5302) {
//            $('body').css({'background-position': 'center -2133px'});
//        }

    });
    var min_x = ($(window).width() / 2) - 512;
    var max_x = ($(window).width() / 2) + 512;
    $(window).mousemove(function(e) {
        if (e.pageX < min_x) {
            $('.click-here-heading-inner-lay2').stop().animate({'opacity': '1'}, 300);
        }
        ;
        if ((e.pageX > min_x) && (e.pageX < max_x)) {
            $('.click-here-heading-inner-lay2').stop().animate({'opacity': '0'}, 300);
        }
        ;
        if (e.pageX > max_x) {
            $('.click-here-heading-inner-lay2').stop().animate({'opacity': '1'}, 300);
        }
        ;
    });
    $('.scroll').click(function() {
        var s = $(window).scrollTop();
        var scroll_offset = $(this).parent('div').parent('div').height();
        $("html:not(:animated) ,body:not(:animated)").animate({scrollTop: s + scroll_offset}, 800);
    });
    $('.scroll-top').click(function() {

        $("html:not(:animated) ,body:not(:animated)").animate({scrollTop: 0}, 800);
        return false;
    });
    $('.block3-item-inner').hover(function() {
        $(this).children('.order-button2').stop().animate({'height': '42px'}, 300, function() {
            $(this).stop().animate({'opacity': '1'}, 600);
        });
    }, function() {
        $(this).children('.order-button2').stop().animate({'opacity': '0'}, 600, function() {
            $(this).stop().animate({'height': '0'}, 300);
        });
    });
    
    /***************************/
    $('.gallery-button').click(function(){
        $(this).parent('li').children('a:nth-child(2)').click(); 
    });
//    /*******появление как мы работаем*****************/
//    
//    setInterval(function(){
//        $('.block7-item').stop().animate({'opacity':'0'},600);
//         var item_index = 0;
//        setInterval(function(){
//            $('.block7-item').eq(item_index).stop().animate({'opacity':'1'},300);
//            item_index++;            
//        },1000);
//    },8000);
    
    
//    /**************допил карусельки*************/
//    
//    function tiny_dop() {
//         $('.slider-code .overview li').removeClass('activeslide');
//        $('.slider-code .overview li').eq(i).addClass('activeslide');
//        $('.slider-code .overview li').stop().animate({'width': '604px', 'height': '341px','margin-top':'53px'},600);
//        $('.slider-code .overview li img').stop().animate({'width': '604px', 'height': '341px'},600);
//        $('.activeslide').stop().animate({'width': '755px', 'height': '408px','margin-top':'0px'},600);
//        $('.activeslide img').stop().animate({'width': '755px', 'height': '398px'},600);
//    }
//    var i = 1;
//    $('.slider-code a.prev').click(function() {
//        i = i - 1;
//       tiny_dop.call();
//       
//
//
//    });
//    $('.slider-code a.next').click(function() {
//        i = i + 1;
//        tiny_dop.call();
//       
//
//    });
});



