$(function()
{
  packageLoadAnimation();
  packageAnimation();

});
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
