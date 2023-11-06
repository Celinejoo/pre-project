jQuery(document).ready(function ($) {
  //로그인 페이지 세로 Rollong slide
  $(".slideArea").slick({
    slide: "div",
    infinite: true, //무한 반복 옵션
    speed: 500, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    arrows: false, // 옆으로 이동하는 화살표 표시 여부
    dots: false, // 스크롤바 아래 점으로 페이지네이션 여부
    autoplay: true, // 자동 스크롤 사용 여부
    vertical: true, // 세로 방향 슬라이드 옵션
    draggable: true, //드래그 가능 여부
    slidesToShow: 1,
  });
});
