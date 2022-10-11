//Navbar
$(window).scroll(function(){
    var top = $(window).scrollTop();
    if(top>=60){
        $("nav").addClass('secondary');
    }
    else
    if($("nav").hasClass('secondary')){
        $("nav").removeClass('secondary');
    }
});


// Statistics Section
jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});


// Testimonials Section
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });


//Clients Section
$(function (){
    
    $("#clients-list").owlCarousel({
        items: 5,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 3
            },
            768: {
                items: 5
            },
            992: {
                items: 4
            }
        }
    });
});