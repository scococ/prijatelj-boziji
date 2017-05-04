
 $(window).on('load resize', function() {
        var x = $(window).width();
        
        if (x >= 768) {
            $('.dropdown').hover(function() {
                $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
            }, function() {
                $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
            });     
        }
    });


$(document).ready(function () {


   

    $('.albumm').fancygallery();

    $(function (scrollFunction) {
        jQuery.scrollSpeed(100, 1800, 'easeOutCubic');

    });

});

