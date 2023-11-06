$(function () {
  //7번째 섹션 탭메뉴
  for (let i = 0; i < $(".tabMenu").length; i++) {
    $(".tabMenu")
      .eq(i)
      .on("click", function () {
        $(".tabMenu").removeClass("select");
        $(".tabContent").removeClass("active");
        $(".tabMenu").eq(i).addClass("select");
        $(".tabContent").eq(i).addClass("active");
      });
  }

  //qna 질문과 답변 show, hide
  $(".question").on("click", function () {
    $(this).siblings().toggleClass("show");
  });

  //유투브 영상 slide
  $(".slideArea").slick({
    slide: "div",
    centerMode: true,
    centerPadding: "10px",
    infinite: true, //무한 반복 옵션
    speed: 300, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    arrows: false, // 옆으로 이동하는 화살표 표시 여부
    dots: false, // 스크롤바 아래 점으로 페이지네이션 여부
    autoplay: true, // 자동 스크롤 사용 여부
    vertical: false, // 세로 방향 슬라이드 옵션
    draggable: true, //드래그 가능 여부
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          draggable: true,
        },
      },
    ],
  });

  var windowWidth = $(window).width();
  $(".openApp").on("click", function () {
    if (windowWidth < 961) {
      $(".openApp").prop("href", "https://www.ilgaja.com/manager/index");
    } else {
      $(".popupWrap, .popup").addClass("active");
    }
  });

  $(".close").on("click", function () {
    $(".popupWrap, .popup").removeClass("active");
  });

  //반응형헤더
  if (windowWidth < 961) {
    $(".hambuger").on("click", function () {
      $(".headerList").toggleClass("active");
      $(".blackBg").toggleClass("active");
    });
  }

  $(window).scroll(function () {
    var top = $(this).scrollTop();
    var top_1 = $(".section2").offset().top - 500;
    var top_2 = $(".section3").offset().top - 500;
    var top_3 = $(".section4").offset().top - 500;
    var top_4 = $(".section5").offset().top - 500;
    var top_5 = $(".section6").offset().top - 500;
    var top_6 = $(".section7").offset().top - 500;
    // console.log(top);
    // console.log(top_1);
    if (top >= top_1) {
      $(".section2 .title").addClass("fadeUp");
    }

    if (top >= top_2) {
      $(".section3 .title").addClass("fadeUp");
    }
    if (top >= top_3) {
      $(".section4 .title").addClass("fadeUp");
    }
    if (top >= top_4) {
      $(".section5 .title").addClass("fadeUp");
    }
    if (top >= top_5) {
      $(".section6 .title").addClass("fadeUp");
    }
    if (top >= top_6) {
      $(".section7 .title").addClass("fadeUp");
    }
  });
});
