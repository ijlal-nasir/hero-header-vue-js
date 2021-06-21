$(document).ready(function () {
  $(".banner-area").slick({
    autoplay: true,
    speed: 800,
    arrows: false,
    dots: true,
    fade: true,
    touchMove: true,
  });

  $(window).scroll(function () {
    const scrollTop = $(window).scrollTop();
    console.log(`scrollTop`, scrollTop);
    if (scrollTop > 200) {
      $("#nav").css("transition", "0.5s ease-out");
      $("#nav").css("background", "#fff");
      $("#nav").css("width", "100%");
      $(".logo, .menu ul li a").css("color", "#000");
    } else {
      $("#nav").css("transition", "1s ease-out");
      $("#nav").css("background", "transparent");
      $(".logo, .menu ul li a").css("color", "#fff");
    }
  });
});
