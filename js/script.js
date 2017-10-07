$(function()
{
  stickyHeader();   // Sticky navigation bar in Homepage
  parallexHeader(); // Parallex header effect in Homepage
  destinationAnimation(); // Featured Destination animation in Homepage
  packageLoadAnimation(); // Packages load animation in Package page
  packageAnimation(); // Package detail mechanism in Package page
});

function stickyHeader()
{
  $(window).scroll(function() {

  if ($(window).scrollTop() > 100) {
    $('.scroll-nav').addClass('sticky-header');
  } else {
    $('.scroll-nav').removeClass('sticky-header');
  }
  });
}

function parallexHeader()
{
  if($(window).width()>400)
  {
    $(window).on('scroll',function()
    {
      if ($(window).scrollTop() >= 100)
      {
        $('header').css({ 'background-position' : '50% 10%' });
      }
      else
      {
        $('header').css({ 'background-position' : '50% 70%' });
      }
    });
  }
}

function destinationAnimation()
{
  $(window).scroll(function() {
   var hT = $('.about-section').offset().top,
       hH = $('.about-section').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();

   if (wS > ( hT+hH-wH))
   {
    $('.featured-destination-container > div ').each(function(i)
    {
      setTimeout(function()
      {
        //$('.row div').eq(i).removeClass('about-section-hidden');
        $('.featured-destination-container > div').eq(i).addClass('animated fadeInUp');
      },120*(i+1));
    });
   }
   });
}

function packageLoadAnimation()
{
  $('.package-listing-container > div ').each(function(i)
  {
    setTimeout(function()
    {
      //$('.row div').eq(i).removeClass('about-section-hidden');
      $('.package-listing-container > div').eq(i).addClass('animated fadeInUp');
    },120*(i+1));
  });
}

function packageAnimation()
{
$('.package-item').click(function(){
  $('.package-listing-section').css({ 'width' : '45%' });
  $('.package-detail-section').css({ 'width' : '35%' });
  var $this = $(this),
      $siblings = $this.parent().children(),
      position = $siblings.index($this);
      $('.package-detail').removeClass('active-package-detail').eq(position).addClass('active-package-detail animated fadeIn');
});
$('.close-package-detail').click(function(){
  $('.package-listing-section').css({ 'width' : '80%' });
  $('.package-detail-section').css({ 'width' : '0%' });
});
}

function aboutAnimation()    // executes when About page is loaded
{
  $('.about-body').css({ 'width' : '100%' });

  setTimeout(function()
  {
    $('.about-title-box').css({ 'transform' : 'translateX(0%)' });
    if($(window ).width() > 360)
    {
      $('.about-content-box-2').css({ 'height' : '40%' });
    }
    else
      {
        $('.about-content-box-2').css({ 'height' : 'auto' });
      }
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
