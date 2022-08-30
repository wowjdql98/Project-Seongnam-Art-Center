// 스크롤좌표값 구하기 (모바일)
$(function () {
    $(window).scroll(function () {
        // scrollposition이 현재 스크롤 좌표임
        var scrollposition = $(window).scrollTop();
        console.log(scrollposition);


        // 300 이 넘으면 커튼이 열려요
        if (scrollposition >= 300) {
            $('.left-curtain').css('transition-duration', '3s').css('transform',
                'translateX(-100%)');
            $('.right-curtain').css('transition-duration', '3s').css('transform',
                'translateX(100%)');
        } else {
            $('.left-curtain').css('transition-duration', '3s').css('transform',
                'translateX(0)');
            $('.right-curtain').css('transition-duration', '3s').css('transform',
                'translateX(0)');
        }


        if (scrollposition >= 1500) {
           $('#tool-zone').addClass('on');
        } else {
            $('#tool-zone').removeClass('on');
        }

        
    });
});

// 헤더 메뉴 (모바일만 적용되어야함)
$(function () {
    $('#header nav .gnb > li').hover(function () {
        $(this).find('.sub').stop().slideDown();
    }, function () {
        $(this).find('.sub').stop().slideUp();
    });
});


// 모바일 버전의 토글메뉴의 메뉴 슬라이드 애니메이션
$(function () {
    $('#toggle-gnb > li ').hover(function(){
        $(this).find('.sub').toggle(function(){
            $(this).find('.sub').stop().slideDown();
            $(this).find('.sub').stop().slideUp();
        });
    });
});