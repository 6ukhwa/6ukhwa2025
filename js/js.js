$(document).ready(function(){


    // $('#loader').removeClass('loaded');
    // $('#loader').addClass('loaded');
    
    // top 버튼
    $(".topBtn").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
    });


    $("nav li").click(function(e){
        e.preventDefault();
        
        let index = $(this).index();
        let targetTop = $("header, section").eq(index).offset().top;

        $("html, body").animate({ scrollTop: targetTop }, 800);
    });









}); //돈땃쥐