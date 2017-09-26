$(window).on('scroll',function(){
  if ($(window).scrollTop() >= 100) {
  $('header').css({
      'background-position' : '50% 10%'
  });
} else {
  $('header').css({
      'background-position' : '50% 70%'
  });
}
});
