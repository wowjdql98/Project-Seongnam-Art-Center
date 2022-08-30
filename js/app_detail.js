
// 토글메뉴버튼 애니메이션
$(function () {
    $(".hamburger").click(function () {
        $(this).toggleClass("active");
    });

    $('#toggle-menu-btn').click(function () {
        $('#toggle-menu').toggleClass('on');
        $('#header #header-gnb').toggle(function(){
            $(this).css({'opacity': '0', 'transition': '.5s' });
            $(this).css({'opacity': '1', 'transition': '.5s' });
        })
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

// 대관안내 모달 
$(function () {
    $('#rental #slider label .click-modal .rental-detail-opera').click(function () {
        $('.rental-modal-opera').addClass('on')
    });
    $('#rental .rental-modal-opera #close-btn').click(function () {
        $('#rental .rental-modal-opera').removeClass('on')
    });

    $('#rental #slider label .click-modal .rental-detail-concert').click(function () {
        $('.rental-modal-concert').addClass('on')
    });
    $('#rental .rental-modal-concert #close-btn').click(function () {
        $('#rental .rental-modal-concert').removeClass('on')
    });

    $('#rental #slider label .click-modal .rental-detail-ensemble').click(function () {
        $('.rental-modal-ensemble').addClass('on')
    });
    $('#rental .rental-modal-ensemble #close-btn').click(function () {
        $('#rental .rental-modal-ensemble').removeClass('on')
    });
});

// 대관안내페이지 탭버튼
$(function () {
    $('.rental-page-opera-btn').click(function () {
        // 탭 초기화
        $('#rental-page-ensemble').removeClass('on');
        $('#rental-page-concert').removeClass('on');
        // 표시
        $('#rental-page-opera').removeClass('on');
    });

    $('.rental-page-concert-btn').click(function () {
        // 탭 초기화
        $('#rental-page-opera').addClass('on');
        $('#rental-page-ensemble').removeClass('on');
        // 표시
        $('#rental-page-concert').addClass('on');
    });

    $('.rental-page-ensemble-btn').click(function () {
        // 탭 초기화
        $('#rental-page-concert').removeClass('on');
        $('#rental-page-opera').addClass('on');
        // 표시
        $('#rental-page-ensemble').addClass('on');
    });
});

// 디테일 찜하기 하트 변경
$(function () {
    $(".ht1").click(
        function () {
            $(this).attr("src", "../images/heart1.png");
        },
        function () {
            $(this).attr("src", "../images/heart2.png");
        });
});


// 달력 파트
$(function () {
    function c() {
        p();
        var e = h();
        var r = 0;
        var u = false;
        l.empty();
        while (!u) {
            if (s[r] == e[0].weekday) {
                u = true
            } else {
                l.append('<div class="blank"></div>');
                r++
            }
        }
        for (var c = 0; c < 42 - r; c++) {
            if (c >= e.length) {
                l.append('<div class="blank"></div>')
            } else {
                var v = e[c].day;
                var m = g(new Date(t, n - 1, v)) ? '<div class="today">' : "<div>";
                l.append(m + "" + v + "</div>")
            }
        }
        var y = o[n - 1];
        a.css("background-color", y).find("h1").text(i[n - 1] + " " + t);
        f.find("div").css("color", y);
        l.find(".today").css("background-color", y);
        d()
    }

    function h() {
        var e = [];
        for (var r = 1; r < v(t, n) + 1; r++) {
            e.push({
                day: r,
                weekday: s[m(t, n, r)]
            })
        }
        return e
    }

    function p() {
        f.empty();
        for (var e = 0; e < 7; e++) {
            f.append("<div>" + s[e].substring(0, 3) + "</div>")
        }
    }

    function d() {
        var t;
        var n = $("#calendar").css("width", e + "px");
        n.find(t = "#calendar_weekdays, #calendar_content").css("width", e + "px").find("div").css({
            width: e / 7 + "px",
            height: e / 7 + "px",
            "line-height": e / 7 + "px"
        });
        n.find("#calendar_header").css({
            height: e * (1 / 7) + "px"
        }).find('i[class^="icon-chevron"]').css("line-height", e * (1 / 7) + "px")
    }

    function v(e, t) {
        return (new Date(e, t, 0)).getDate()
    }

    function m(e, t, n) {
        return (new Date(e, t - 1, n)).getDay()
    }

    function g(e) {
        return y(new Date) == y(e)
    }

    function y(e) {
        return e.getFullYear() + "/" + (e.getMonth() + 1) + "/" + e.getDate()
    }

    function b() {
        var e = new Date;
        t = e.getFullYear();
        n = e.getMonth() + 1
    }
    var e = 370;
    var t = 2013;
    var n = 9;
    var r = [];
    var i = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
    var s = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var o = ["#16a085", "#1abc9c", "#c0392b", "#27ae60", "#FF6860", "#f39c12", "#f1c40f", "#e67e22", "#2ecc71", "#e74c3c", "#d35400", "#2c3e50"];
    var u = $("#calendar");
    var a = u.find("#calendar_header");
    var f = u.find("#calendar_weekdays");
    var l = u.find("#calendar_content");
    b();
    c();
    a.find('i[class^="icon-chevron"]').on("click", function () {
        var e = $(this);
        var r = function (e) {
            n = e == "next" ? n + 1 : n - 1;
            if (n < 1) {
                n = 12;
                t--
            } else if (n > 12) {
                n = 1;
                t++
            }
            c()
        };
        if (e.attr("class").indexOf("left") != -1) {
            r("previous")
        } else {
            r("next")
        }
    })
})



$(function () {
    $('.a2').click(function () {
        $('#calendar').addClass('on');
    });
    $('.exit').click(function () {
        $('#calendar').removeClass('on');
    });
});


// footer 
$(function () {
    //instagram hover
    $("#insta").hover(
        function () {
            $(this).attr("src", "../images/instagram_2.png");
        },
        function () {
            $(this).attr("src", "../images/instagram.png");
        });
    //youtube hover
    $("#youtube").hover(
        function () {
            $(this).attr("src", "../images/youtube_2.png");
        },
        function () {
            $(this).attr("src", "../images/youtube.png");
        });
    //kakao hover
    $("#kakaotalk").hover(
        function () {
            $(this).attr("src", "../images/kakao_2.png");
        },
        function () {
            $(this).attr("src", "../images/kakao.png");
        });
    //naver hover
    $("#naver").hover(
        function () {
            $(this).attr("src", "../images/navrer_1.png");
        },
        function () {
            $(this).attr("src", "../images/navrer.png");
        });
});