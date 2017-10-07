$(function()
{
  stickyHeader();   // Sticky navigation bar in Homepage
  parallexHeader(); // Parallex header effect in Homepage
  destinationAnimation(); // Featured Destination animation in Homepage
  destinationRedirectFunction();  // Featured Destination rediection script in Homepage
  packageAnimation(); // Package detail mechanism in Package page
});

function destinationRedirectFunction()
{
  $( ".featured-destination-unit" ).click(function() {
    var $this = $(this);
    var $siblings = $this.parent().children();
    var position = $siblings.index($this);
    if(position == 0)
    {
      window.location.href = "package.html?0";
    }
    else if(position == 1)
    {
      window.location.href = "package.html?1";
    }
    else if(position == 2)
    {
      window.location.href = "package.html?2";
    }
    else if(position == 3)
    {
      window.location.href = "package.html?3";
    }
    else {
      alert(bot);
    }
  });
}
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

  var pageUrl = window.location.href;
  var lastChar = pageUrl[pageUrl.length - 1];
  if(lastChar == '0')
  {
    $( ".package-item3" ).trigger( "click" );
  }
  if(lastChar == '1')
  {
    $( ".package-item2" ).trigger( "click" );
  }
  if(lastChar == '2')
  {
    $( ".package-item4" ).trigger( "click" );
  }
  if(lastChar == '3')
  {
    $( ".package-item1" ).trigger( "click" );
  }
}

function packageAnimation()
{
$('.package-item').click(function(){
  if($( window ).width()>360)
  {
    $('.package-listing-section').css({ 'width' : '45%' });
    $('.package-detail-section').css({ 'width' : '35%' });
  }
  else {
    $('.package-listing-section').css({ 'width' : '0%' });
    $('.package-detail-section').css({ 'width' : '100%' });
  }

  var $this = $(this),
      $siblings = $this.parent().children(),
      position = $siblings.index($this);
      $('.package-detail').removeClass('active-package-detail').eq(position).addClass('active-package-detail animated fadeIn');
});
$('.close-package-detail').click(function(){
  if($( window ).width()>360)
  {
    $('.package-listing-section').css({ 'width' : '80%' });
    $('.package-detail-section').css({ 'width' : '0%' });
  }
  else {
    $('.package-listing-section').css({ 'width' : '100%' });
    $('.package-detail-section').css({ 'width' : '0%' });
  }

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
