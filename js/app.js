// 헤더 메뉴
$(function () {
    $('#header nav .gnb > li').hover(function () {
        $(this).find('.sub').stop().slideDown();
    }, function () {
        $(this).find('.sub').stop().slideUp();
    });
});



// 토글메뉴버튼 애니메이션
$(function () {
    $(".hamburger").click(function () {
        $(this).toggleClass("active");
    });

    $('#toggle-menu-btn').click(function () {
        $('#toggle-menu').toggleClass('on');
    })
});

// 로그인
$(function () {
    const loginForm = document.querySelector("#login-form");
    const loginInput = document.querySelector('#id');
    const greeting = document.querySelector("#greeting");

    const HIDDEN_CLASSNAME = "hidden";
    const USERNAME_KEY = "username";

    // 로그아웃 버튼 지정
    const button = document.querySelector('#logout');


    // 로컬 저장공간에 아이디 저장
    function onLoginSubmit(event) {
        event.preventDefault();
        loginForm.classList.add(HIDDEN_CLASSNAME);
        const username = loginInput.value;
        localStorage.setItem(USERNAME_KEY, username);
        paintGreeting(username);
    }


    /* 로그아웃 버튼 클릭시 로그아웃 */
    button.addEventListener('click', () => {
        /* 로컬 데이터 삭제 */
        localStorage.removeItem('username');
    });




    // profile 사진 + 인사말 추가
    function paintGreeting(username) {
        // name p 인식
        const name = document.querySelector("#name");

        name.innerText = `${username}님 환영합니다!`;
        greeting.classList.remove(HIDDEN_CLASSNAME);
    }

    // 로그인 버튼 클릭시 데이터 전송
    loginForm.addEventListener("submit", onLoginSubmit)

    const saveUserName = localStorage.getItem(USERNAME_KEY);

    // 로컬 저장 공간에 데이터 없으면 로그인 창, 데이터 있으면 프로필 뜸
    if (saveUserName === null) {
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        loginForm.addEventListener("submit", onLoginSubmit);
    } else {
        paintGreeting(saveUserName);
    }
})

// 토글메뉴의 메뉴 슬라이드 애니메이션
$(function () {
    $('#toggle-gnb > li').hover(function () {
        $(this).find('.sub').stop().slideDown();
    }, function () {
        $(this).find('.sub').stop().slideUp();
    });
});

// 모바일 버전의 토글메뉴의 메뉴 슬라이드 애니메이션
$(function () {
    $('#toggle-gnb > li > .gnb-plus').click(function () {
        $(this).find('.sub').stop().slideDown();
    });
});


// 검색바 뿅 
$(function () {
    $('#tool-zone .container .tool-wrap .search').click(function () {
        $('#tool-zone .container .tool-wrap .search-bar').toggleClass('on')
    })
});

// 탑버튼 
$(function () {
    $('.top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
})

// 스크롤좌표값 구하기
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


        if (scrollposition >= 2000) {
            $('#tool-zone').addClass('on');
        } else {
            $('#tool-zone').removeClass('on');
        }


    });
});

// // 카카오 채널 열기
// function open_kakao_channel() {
//     Kakao.Channel.addChannel({
//       channelPublicId: 'gNY5kCue'
//     });
//   }

//   (function (d, s, id) {
//     var js, fjs = d.getElementsByTagName(s)[0];
//     if (d.getElementById(id)) return;
//     js = d.createElement(s); js.id = id;
//     js.src = '//developers.kakao.com/sdk/js/kakao.plusfriend.min.js';
//     fjs.parentNode.insertBefore(js, fjs);
//   })(document, 'script', 'kakao-js-sdk');



// #show swiper
$(function () {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

// exhibition 전시 섹션 AOS 
$(function () {

    AOS.init();

})



// footer 
$(function () {
    //instagram hover
    $("#insta").hover(
        function () {
            $(this).attr("src", "images/instagram_2.png");
        },
        function () {
            $(this).attr("src", "images/instagram.png");
        });
    //youtube hover
    $("#youtube").hover(
        function () {
            $(this).attr("src", "images/youtube_2.png");
        },
        function () {
            $(this).attr("src", "images/youtube.png");
        });
    //kakao hover
    $("#kakaotalk").hover(
        function () {
            $(this).attr("src", "images/kakao_2.png");
        },
        function () {
            $(this).attr("src", "images/kakao.png");
        });
    //naver hover
    $("#naver").hover(
        function () {
            $(this).attr("src", "images/navrer_1.png");
        },
        function () {
            $(this).attr("src", "images/navrer.png");
        });
});