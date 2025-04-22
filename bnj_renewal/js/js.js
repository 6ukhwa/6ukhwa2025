
$(document).ready(function(){


   
    // top버튼을 클릭하면 맨 위로
    $('.top_btn').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 500);
        return false;
    })

    // 스크롤하면 연혁 나오게
    $(window).scroll(function(){

        var sc = $(this).scrollTop();
      
        $('h2').each(function(){

            if($(this).offset().top < $(window).scrollTop() + $(window).height() * 0.75) {
                $(this).addClass('is-Visible');
            }
        })
        $('.history_title, .history_end, .left1, .left2, .left3, .right1, .right2, .marqueeD, .marqueeT').each(function(){

            if($(this).offset().top < $(window).scrollTop() + $(window).height() * 0.75) {
                $(this).addClass('is-Visible');
            }
        })
        $('.marqueeB, .marqueeT').each(function(){

            if($(this).offset().top < $(window).scrollTop() + $(window).height() * 0.75) {
                $(this).addClass('is-Visible');
            }
        })
       

    })
    
//  iceCream li에 마우스를 올리면 circle의 li가 아래에서 위로 올라온다.
    $('.iceCream li').mouseenter(function(){
        var ii = $(this).index()
        $('.circle li').eq(ii).css({'opacity':1})
        $('.circle li').eq(ii).find('img').css({'bottom':'-25px'})
        
    })

// iceCream li에서 마우스가 나오면 circle의 li가 아래로 내려간다.
    $('.iceCream li').mouseleave(function(){
        var up = $(this).index()
        $('.circle li').eq(up).css({'opacity':0})
        $('.circle li').eq(up).find('img').css({'bottom':'-220px'})

    })


//.pro_icon i를 클릭하면 빨간색으로 바뀐다.
    // $('.pro_icon i').click(function(){

    //     var ht = $(this).index();
    //     $(this).eq(ht).toggleClass('on')
    //     // $(this).eq(ht).removeClass('on')

    // })


    // btn_area를 클릭하면 warning p이 보인다.
    $('.btn_area').click(function(e){
        e.preventDefault()
        $('.warning').css({'opacity':1})
    })



    var prices = {
        "파인트473ml": 14900,
        "미니컵120ml": 9900
    };
    
    // 사이즈 버튼 클릭 이벤트
    $('.sub_box1Btn .size').click(function() {
        $(this).addClass('on').siblings().removeClass('on');
        updateSelectedOptions();
    });
    
    // 옵션 선택 변경 이벤트
    $('#taste').change(function() {
        updateSelectedOptions();
    });
    
    function updateSelectedOptions() {
        var selectedTs = $('#taste option:selected').text();
        var selectedSz = $('.size.on').text().trim().replace(/\s+/g, ""); // 줄바꿈과 공백 제거
    
        // 선택된 옵션과 사이즈가 있는지 확인
        if (selectedTs && selectedTs !== '옵션' && selectedSz) {
            // sub_box2_list 보이도록 설정
            $('.sub_box2_list').css('display', 'block');
    
            // 기존 내용 제거
            $('.sub_box2_list').empty();
    
            // 새로운 항목 추가
            var listItem = '<div>' +
                '<p>' + selectedTs + '</p>' +
                '<div>사이즈: <em>' + selectedSz + '</em></div>' +
                '<span><i class="fa-solid fa-xmark"></i></span>' +
                '</div>';
            $('.sub_box2_list').append(listItem);
    
            // 선택 후 사이즈와 옵션 초기화
            resetSelections();
    
            // 선택한 사이즈에 맞는 가격 설정
            var price = prices[selectedSz] || 0; // 가격 가져오기
            $('#priceDisplay').text(price.toLocaleString());
        } else {
            // 선택이 완료되지 않으면 숨기기
            $('.sub_box2_list').css('display', 'none');
            // 가격 초기화
            $('#priceDisplay').text('0');
        }
    }
    
    function resetSelections() {
        // 사이즈 선택 초기화
        $('.sub_box1Btn .size').removeClass('on');
    
        // 옵션 선택 초기화
        $('#taste').val(''); // 기본값으로 설정 (''는 기본 선택 옵션)
    }
    
    // sub_box2_list 안의 span 클릭 시 항목 제거
    $(document).on('click', '.sub_box2_list span', function() {
        $(this).parent().remove();
        // 만약 모든 항목이 제거되면 다시 숨기기
        if ($('.sub_box2_list').children().length === 0) {
            $('.sub_box2_list').css('display', 'none');
            // 가격 초기화
            $('#priceDisplay').text('0');
        }
    });
   
    // util cart를 클릭했을때, popUp이 보이고 .popUp_inner는 오른쪽에서 천천히 나와라

    $('.util .cart').click(function(e){
        e.preventDefault()
       
      
        $('.popUp').stop().fadeIn(200)
        $('.popUp_inner').addClass('on')

    })



    // popUp과 popUp span을 클릭했을때 popUP이 닫혀라
    $('.popUp span, .popUp').click(function(){

        $('.popUp').hide();
        $('.popUp_inner').removeClass('on')

    })


        // empty를 click 했을때 장바구니의 숫자가 0이되어라.
        // shop의 list를 비워라
        $('.empty').click(function(){

            ct=0;
            $('.util').find('em').text(ct)
            $('.popUp_pd').find('.popUp_list').empty()

            // popUp_pd의 p가 나타나라
            $('.popUp_pd').find('p').css({'display':'block'});

            // popUp_list가 없어져라
            $('.popUp_list').css({'display':'none'})
        })



    // 각각의 container small_img li를 클릭했을때 container big_img가 바뀌어라
    $('.small_img li').click(function(){

        var ig = $(this).index();

        $('.big_img li').fadeOut()
        $('.big_img li').eq(ig).fadeIn()
    })




  // 기존의 pro_icon i와 img에 대한 이벤트 핸들러를 제거하고, on 메서드를 사용하여 이벤트 위임 추가
$(document).on('click', '.pro_icon i', function() {
    $(this).toggleClass('on');

});

let ct = 0;
let price = 0;
$(document).on('click', '.pro_icon img', function() {
    ct++
    console.log(ct);
    $('.cart em').text(ct)

    // popUp_pd의 p가 사라져아
    $('.popUp_pd').find('p').css({'display':'none'});
    // popUp_list가 없어져라
    $('.popUp_list').css({'display':'block'})


    // 나의 부모 안에서 price를 찾아서 금액을 출력해라
    // 나의 부모안에서 p 안에 있는 img태그를 출력해라
    let txt = $(this).parents('.pro_top').find('.price').find('span').text()
    let tt = $(this).parents('.pro_top').find('p').html()
    let tn = $(this).parents('.pro_top').find('strong').text()
    

    let nt = Number(txt)

    console.log(nt);
    // popUp_pd에 popUp_list를 계속 누적되게 출력해라
    // $('.popUp_pd').find('.popUp_list').append('<div>'+(tt+tn+txt)+'</div>')
    $('.popUp_pd').find('.popUp_list').append('<div>'+('<div>'+tt+'</div>')+('<div>'+tn+'</div>')+('<div>'+txt+'<span>원</span></div>')+'</div>')

    price +=nt

    $('.total').find('em').text(price.toLocaleString())
  
    // alert('장바구니에 추가되었습니다!');

});




// 자동 슬라이드 및 버튼 클릭 기능 등 기존 코드 유지
var pro = 0;
var slide;

$('.product button').click(function(){
    pro++;
    console.log(pro);

    $('.product ul').width(1198 + (440 * pro));
    $('.product ul li').eq(pro - 1).clone().appendTo('.product ul');
    $('.product ul').stop().animate({'left': -440 * pro});
});

slide = setInterval(function(){
    $('.product button').trigger('click');
}, 2500);

$('.product ul').mouseenter(function(){
    clearInterval(slide);
});

$('.product ul').mouseleave(function(){
    slide = setInterval(function(){
        $('.product button').trigger('click');
    }, 2500);


});


$('.sc_btn').click(function(){

    $('.search_notice').removeClass('on')
    $('.search_notice').addClass('on')
})
$('.search_btn').click(function(){

    $('.search_notice').removeClass('on')
    
})


})