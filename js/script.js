// ketika LI navbar diklik maka activenya berubah
$('.nav-link').on('click', function () {
  $('.nav-link').removeClass('active');
  $(this).addClass('active');

})

// carousel agar bisa digeser
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplayHoverPause: true,
    center: true,
    navText: ["<i class='fa-light fa-angle-left'></i>", "<i class='fa-light fa-angle-right'></i>"],
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

// untuk bagian moment
$(document).ready(function() {
  $('.row').masonry({
    itemSelector: '.gallery-item',
    columnWidth: '.gallery-item',
    percentPosition: true
  });
});