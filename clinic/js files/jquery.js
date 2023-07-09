$(document).ready(function(){
    $('.tab-title-1').click(function(){
        $('.tab-para-1').slideToggle('slow');
        $('.tab-title-1').css('background-color','rgb(102, 204, 102)');
    });
    $('.tab-title-2').click(function(){
        $('.tab-para-2').slideToggle('slow');
    });
    $('.tab-title-3').click(function(){
        $('.tab-para-3').slideToggle('slow');
    });
});