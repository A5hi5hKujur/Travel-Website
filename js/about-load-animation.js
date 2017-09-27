function aboutAnimation()    // executes when page is loaded
{
  $('.about-body').css({ 'width' : '100%' });

  setTimeout(function()
  {
    $('.about-title-box').css({ 'transform' : 'translateX(0%)' });
    $('.about-content-box-2').css({ 'height' : '40%' });
    $('.about-content-box-1').css({ 'height' : '60%' });
  },500);

  $('.about-image-box').css({ 'background-size' : '100% 100%' });

  setTimeout(function()
  {
    $('.about-title').addClass('animated fadeInUp');
  },800);

  setTimeout(function()
  {
    $('.about-content-box-header.no-flex').css({ 'opacity' : '1' });
    $('.about-nav > li').addClass('animated fadeInUp');
  },1200);
}
