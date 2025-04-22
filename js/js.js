$(document).ready(function(){


    // 화면 열리는 애니메이션 
    $('#loader').addClass('loaded');  

    // 애니메이션 끝난 후 숨김 처리
    setTimeout(function() {
        $('#loader').addClass('hidden');
    }, 1500);
    
    // top 버튼 설정
    $(".topBtn").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
    });

    // nav li 클릭시 해당 위치로 이동
    $("nav li").click(function(e){
        e.preventDefault();
        
        let index = $(this).index();
        let targetTop = $("header, section").eq(index).offset().top;

        $("html, body").animate({ scrollTop: targetTop }, 800);
    });

    // 스크롤 0.7위치에서 애니메이션 작동
    $(window).scroll(function(){
        var sc = $(this).scrollTop();
        var winHeight = $(window).height();
        var triggerPoint = sc + winHeight * 0.7; 
    
        $('.proImg, .img_box div, .contact_inner h2, .contact_inner span, .inform, .txt_box, .contact_inner h3, .qrcode, .phone, .wave span').each(function(){
            if($(this).offset().top < triggerPoint) {
                $(this).addClass('show');
            }
        });
    });

    // 콘페티 효과
    $('.confetti').on('click', function(event) {
        const btn = $(this);
        const btnRect = btn[0].getBoundingClientRect(); // 버튼 위치 정보 가져오기
    
        // 버튼 중앙 좌표를 화면 비율로 변환
        const btnCenterX = (btnRect.left + btnRect.width / 2) / window.innerWidth;
        const btnCenterY = (btnRect.top + btnRect.height / 2) / window.innerHeight;
    
        var end = Date.now() + 100; //지속시간
    
        var colors = ['#bb0000', '#fff000']; // 색상 지정
    
        (function frame() {
            confetti({
                particleCount: 2,
                angle: 60,
                spread: 30,
                startVelocity: 20,
                scalar: 0.8, // 크기 조정 (작게)
                origin: { x: btnCenterX, y: btnCenterY }, // 버튼 중심에서 생성
                colors: colors
            });
    
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 30,
                startVelocity: 20,
                scalar: 0.8,
                origin: { x: btnCenterX, y: btnCenterY }, // 동일한 중심에서 생성
                colors: colors
            });
    
            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    });


    // 팝업창 설정

    $('.view').click(function(){
        let index = $(this).index('.view');   // 클릭한 .view의 순서를 가져옴
    
        $('.black_bg').addClass('on');
        $('.no1').hide().eq(index).show().scrollTop(0);  // 해당 순서만 보이기
    });
    
    // 닫기 버튼
    $('.black_bg').click(function(){
        $('.black_bg').removeClass('on');
        $('.no1').hide();  // 닫을 때 모두 숨기기
    });

    



    
}); //돈땃쥐