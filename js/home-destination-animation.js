$(function()
{
  aboutAnimation();
});
function aboutAnimation()
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
