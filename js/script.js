$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplayHoverPause: true,
    center: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    responsive: {
      0: {
        items: 1,
      },
      720: {
        items: 2,
      },
      1280: {
        items: 3,
      },
    },
  });
});
