$(document).ready(function () {
  AOS.init({
    duration: 500,
    anchorPlacement: 'top'
  });
  $("#more_contact").click(() => {
    $(".support-method_title").toggle("hidden");
    $(".more-arrow-left").toggleClass("rotate-180");
  });

  $(".tabs-nav-news a").click(function () {
    // Check for active
    $(".tabs-nav-news li").removeClass("tab-news-seclected");
    $(this).parent().addClass("tab-news-seclected");

    // Display active tab
    let currentTab = $(this).attr("href");
    $(".tabs-content-news").hide();
    $(currentTab).show();
    return false;
  });


  $(".tabs-nav-video a").click(function () {
    // Check for active
    $(".tabs-nav-video li").removeClass("tab-video-seclected");
    $(this).parent().addClass("tab-video-seclected");

    // Display active tab
    let currentTab = $(this).attr("href");
    $(".tabs-content-video").hide();
    $(currentTab).show();
    return false;
  });

  $(".main-slick").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 700,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: false,
    nextArrow: false,
  });

  $(".video-slick").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    speed: 700,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: `<div class="video-pre-btn">
    <img src="./assets/images/btn_next.png" alt="">
   </div>`,
    nextArrow: `<div class="video-next-btn">
    <img src="./assets/images/btn_next.png" alt="">
   </div>`,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  });
});

$(window).on('load', function() {
  AOS.refresh();
});
