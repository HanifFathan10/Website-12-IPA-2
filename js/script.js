// ketika LI navbar diklik maka activenya berubah
$('.nav-link').on('click', ()=> {
  $('.nav-link').removeClass('active');
  $(this).addClass('active');
})

// validasi close diluar navbar
const navToggler = document.querySelector(".navbar-toggler")
const navbarNav = document.querySelector("#navbarNav")

document.addEventListener("click", (e)=> {
  if(!navToggler.contains(e.target) && !navbarNav.contains(e.target)) {
    navToggler.classList.add("collapsed")
    navbarNav.classList.remove("show")
  }
})

// validasi ketika discroll maka navbar hilang
document.addEventListener("scroll", (e)=> {
  navToggler.classList.add("collapsed")
  navbarNav.classList.remove("show")
})

// carousel agar bisa digeser
$(document).ready( ()=> {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplayHoverPause: true,
    center: true,
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