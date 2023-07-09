$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()){
            $("header").addClass("sticky-menu");
            $('.arrow-btn').fadeIn();
        }
        else{
            $("header").removeClass("sticky-menu");
            $('.arrow-btn').fadeOut();
        }
    });
    // ---------------------------PROJECT SECTION STYLE START HERE--------------------
    $(".flowers").click(function(){
        $("#container-1").hide();
        $("#container-3").hide();
        $("#container-4").hide();
        $("#container-2").fadeIn(2000);
        $(this).css({
            "background-color":"rgba(0, 0, 0, 0.9)",
            "color":"white"
        });
        $("#container-2").css("display","flex");
        $("#container-2").css("flexWrap","wrap");
        $("#container-2").css("justifyContent","center");
        $(".fruits , .trees, .birds").css({
            "background-color":"rgb(255, 255, 255, 0.7)",
            "color":"rgba(0, 0, 0, 0.9)"
        });
    });
    $(".trees").click(function(){
        $("#container-1").hide();
        $("#container-2").hide();
        $("#container-4").hide();
        $("#container-3").fadeIn(2000);
        $(this).css({
            "background-color":"rgba(0, 0, 0, 0.9)",
            "color":"white"
        });
        $("#container-3").css("display","flex");
        $("#container-3").css("flexWrap","wrap");
        $("#container-3").css("justifyContent","center");
        $(".flowers, .fruits, .birds").css({
            "background-color":"rgb(255, 255, 255, 0.7)",
            "color":"rgba(0, 0, 0, 0.9)"
        });
    });
    $(".birds").click(function(){
        $("#container-1").hide();
        $("#container-2").hide();
        $("#container-3").hide();
        $("#container-4").fadeIn(2000);
        $(this).css({
            "background-color":"rgba(0, 0, 0, 0.9)",
            "color":"white"
        });
        $("#container-4").css("display","flex");
        $("#container-4").css("flexWrap","wrap");
        $("#container-4").css("justifyContent","center");
        $(".flowers, .trees, .fruits").css({
            "background-color":"rgb(255, 255, 255, 0.7)",
            "color":"rgba(0, 0, 0, 0.9)"
        });
    });
    $(".fruits").click(function(){
        $("#container-2").hide();
        $("#container-3").hide();
        $("#container-4").hide();
        $("#container-1").fadeIn(2000);
        $(this).css({
            "background-color":"rgba(0, 0, 0, 0.9)",
            "color":"white"
        });
        $(".flowers, .trees, .birds").css({
            "background-color":"rgb(255, 255, 255, 0.7)",
            "color":"rgba(0, 0, 0, 0.9)"
        });
    });
    // ---------------------------PROJECT SECTION STYLE START HERE---------------------

    // ---------------------------DARK MODE STYLE START HERE--------------------------- 
    $('.dark-image').click(function(){
        $('body').css('background','black');
        $('.bg').css({
            'background':'#1c1c1c',
            'color': '#fffaf1'
        });
        $('.mode').css('color','#fffaf1');
        $('h1.main-title').css('background-image', 'url(./img/dark13.jpg)');
    });
    $('.light-image').click(function(){
        $('body').css('background','#fffaf1');
        $('.bg').css({
            'background':'#fffaf1',
            'color': '#1c1c1c'
        });
        $('.mode').css('color','#1c1c1c');
        $('.bg').css('color','#1c1c1c');
        $('h1.main-title').css('background-image', 'url(./img/13.jpg)');
    });
    // ---------------------------DARK MODE STYLE END HERE-----------------------------
    $('.one-dot').click(function(){
        $('.team-contactus-btn').css('background','#FD586B');
        $('.team-all-btn').css('background','#FD586B');
        $('.team-about-title span').css('color','#FD586B');
        $('.team-all-img').css('border','#FD586B solid 3px','box-shadow','#FD586B');
        $('.team-all-img').css('box-shadow','-1px 1px 5px #FD586B');
    });
    $('.two-dot').click(function(){
        $('.team-contactus-btn').css('background','#FEAA48');
        $('.team-all-btn').css('background','#FEAA48');
        $('.team-about-title span').css('color','#FEAA48');
        $('.team-all-img').css('border','#FEAA48 solid 3px','box-shadow','#FEAA48');
        $('.team-all-img').css('box-shadow','-1px 1px 5px #FEAA48');
    });
    $('.three-dot').click(function(){
        $('.team-contactus-btn').css('background','#36DEED');
        $('.team-all-btn').css('background','#36DEED');
        $('.team-about-title span').css('color','#36DEED');
        $('.team-all-img').css('border','#36DEED solid 3px','box-shadow','#36DEED');
        $('.team-all-img').css('box-shadow','-1px 1px 5px #36DEED');
    });
    $('.menu-bar').click(function(){
        $('.mobile-menu-section').slideToggle('slow');
    });
});