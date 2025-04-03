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

    $(window).scroll(function(){
        var sc = $(this).scrollTop();
        var winHeight = $(window).height();
        var triggerPoint = sc + winHeight * 0.85; 
    
        $('.proImg, .img_box div, .contact_inner h2, .inform, .txt_box, .contact_inner h3, .qrcode, .phone').each(function(){
            if($(this).offset().top < triggerPoint) {
                $(this).addClass('show');
            }
        });
    });








}); //돈땃쥐