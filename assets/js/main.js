$(document).ready(function () {
  AOS.init({
    duration: 500,
    anchorPlacement: 'top'
  });
  $("#more_contact").click(() => {
    $(".support-method__title").toggle("hidden");
    $(".more-arrow-left").toggleClass("rotate-180");
  });

});

$(window).on('load', function() {
  AOS.refresh();
});
