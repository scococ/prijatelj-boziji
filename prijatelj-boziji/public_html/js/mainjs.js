//
// $(window).on('load resize', function() {
//        var x = $(window).width();
//        
//        if (x >= 768) {
//            $('.dropdown').hover(function() {
//                $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
//            }, function() {
//                $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
//            });     
//        }
//    });

// $(function () {
//            $(".dropdown").hover(function () {
//                $(this).addClass('open');
//            },
//                    function () {
//                        $(this).removeClass('open');
//                    }
//            );
//        });




$(document).ready(function () {
//   $('.navigation-control .dropdown').mouseenter(function(){
//       $('.navigation-control .dropdown:hover .dropdown-menu').delay(500).css('display', 'block');
//       $('.navigation-control .dropdown').mouseleave(function(){
//           $('.navigation-control .dropdown-menu').fadeOut('fast');
//       });
//   });



    $('.albumm').fancygallery();
});

