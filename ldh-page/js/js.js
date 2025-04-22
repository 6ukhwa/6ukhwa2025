
$(document).ready(function(){
    
    // var acNum = $('.sl_inner>div').size()
    // $('.sideArtwork').width((200*acNum)+600)
    // $('body').height((200*acNum)+600);

    // $('html,body').scrollTop((200*acNum)+600);


// $('#loader').removeClass('loaded');
// $('#loader').addClass('loaded');


// 브라우저의 높이값
let winht = $(window).height()


// 화면이 리사이징 될때마다 브라우저 화면높이를 찾아라
$(window).resize(function(){

    let winht2 = $(window).height()
})


$('article').height(winht)
console.log(winht)


$('.st_box').click(function(){

    $('nav, .main').fadeIn()
    $('.intro').fadeOut()


})


// 화면에서 스크롤했을때 스크롤top값을 찾아라
$(window).scroll(function(){

    let sc = $(this).scrollTop()
    let sht = $(window).height()
    $('h1').text(sc)
    $('.sl_inner').stop().animate({'left':-sc},600)
    

    for(var a=0; a<=3; a++){
        if(sc>=sht*a && sc<sht*(a+1)) {
            $('.gnb li').removeClass('on');
            $('.gnb li').eq(a).addClass('on')
        }
    }

    $(window).on("scroll", function() {
        var sc = $(this).scrollTop();
    
        


        if (sc >= 500 && sc<1600) {
            $(".turn").each(function(index) {
                // 각 figure에 대응하는 rotateY 각도 설정
                var rotateY = 45 * index;
                $(this).css('transform', `rotateY(${rotateY}deg) translateZ(-764px)`);
            });
        } else {
            $(".turn").css('transform', function(index) {
                // 초기 상태로 돌아가도록 설정
                var rotateY = 45 * index;
                return `rotateY(${rotateY}deg) translateZ(0)`;
            });
        }


        if (sc>= 2800) {
            $('.sign').removeClass('on')
            $('.sign').addClass('on')
        }else {
        $('.sign').removeClass('on')
              }
        
    })

    });





// gnb li를 클릭할때 순번을 찾고 article의 높이값에 곱해서 스크롤top을 움직여라
$('.gnb li').click(function(){

    let ht = $('article').height();

    let i = $(this).index()
    console.log(i);
    $('html,body').animate({'scrollTop':ht*i},1000)

    $('.gnb li').removeClass('on');
    $(this).addClass('on')
})



//아티클에서 마우스휠했을때 화면이 움직인다.
$('article').mousewheel(function(event,delta){
    event.preventDefault()
    if(delta>0){
    // 마우스를 올리면 이전 화면으로 움직이고 
    let prev = $(this).prev().offset().top
    $('html,body').stop().animate({'scrollTop':prev},1000)
    }

    if(delta<0){
    // 마우스를 내리면 다음 화면으로 움직인다.
    let next = $(this).next().offset().top;
    
    $('html,body').stop().animate({'scrollTop':next},1000)
    }
})




// figure을 클릭하면 3번째 섹션의 light의 on이 생기고 btn1이 숨겨진다.



$('.switch').click(function(){

    // $('.btn1').removeClass('')
    $('.btn1').toggleClass('on')

    // $('.light').removeClass('')
    $('.light').toggleClass('on')

    // $('.darkness').removeClass('')
    $('.darkness').toggleClass('on')
    
    // $('.sign').removeClass('')
    $('.sign').toggleClass('on')
})



// 마우스가 움직이때마다 각 박스의 이미지가 커서값을 받아서 움직인다.
$('article').mousemove(function(e){

    var posX = e.pageX;
    var posY = e.pageY;

    $('.tk1').css({'top':150-(posY/20),'left':200-(posX/20)})
    $('.tk2').css({'top':300-(posY/20),'right':170-(posX/20)})
    $('.tk3').css({'bottom':150-(posY/20),'left':100-(posX/20)})
})


$('section>article:nth-child(4) li').click(function() {
    var mt = $(this).index();
    console.log(mt);
    // 모든 동영상을 숨김
    $('.movie').hide();

    // 클릭한 순번의 동영상을 보여주고 재생
    $('.movie').eq(mt).show().find('video').get(0);
    //재생시간 지점
    vid.currentTime=0
    vid.play()

  
})








})