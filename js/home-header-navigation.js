$(window).scroll(function() {

if ($(window).scrollTop() > 100) {
  $('.scroll-nav').addClass('sticky-header');
} else {
  $('.scroll-nav').removeClass('sticky-header');
}
});
