
 $(window).on('load resize', function() {
        var x = $(window).width();
        
        if (x >= 768) {
            $('.navigation-control .dropdown').hover(function() {
                $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
            }, function() {
                $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
            });     
        }
    });
   





$(document).ready(function () {
   if($('.albumm').length>0){
    $('.albumm').fancygallery();
   }
   if($('.bxslider').length>0){
    $('.bxslider').bxSlider({
  mode: 'fade',
  captions: true
});
   }
 



    
});

