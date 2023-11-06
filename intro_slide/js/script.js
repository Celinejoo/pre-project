$(function () {
  $(".ad-wrap .close").on("click", function () {
    $(".ad-wrap").addClass("close");
    if ($(".ad-wrap").hasClass("close")) {
      $(".header").addClass("on");
    }
  });

  for (let i = 0; i < $(".section2 .tab-menu").length; i++) {
    $(".section2 .tab-menu")
      .eq(i)
      .on("click", function () {
        $(".section2 .tab-menu").removeClass("active");
        $(".section2 .tab-cont").removeClass("show");
        $(".section2 .tab-menu").eq(i).addClass("active");
        $(".section2 .tab-cont").eq(i).addClass("show");
      });
  }

  for (let i = 0; i < $(".section3 .tab-menu").length; i++) {
    $(".section3 .tab-menu")
      .eq(i)
      .on("click", function () {
        $(".section3 .tab-menu").removeClass("active");
        $(".section3 .tab-slide").removeClass("show");
        $(".section3 .tab-menu").eq(i).addClass("active");
        $(".section3 .tab-slide").eq(i).addClass("show");
        $(".section3 .tab-slide").eq(i).slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: false,
          arrows: true,
        });
      });
  }

  $(".card").on("click", function () {
    $(".card").removeClass("on");
    $(this).addClass("on");
  });
});
