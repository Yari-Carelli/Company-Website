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
        delay: 15,
        time: 4000
    });
});


// Clients Section
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay: true,
        autoplaySpeed: 600,
        nav:true,
        responsive:{
          0:{
            items:1
          },
          600:{
            items:3
          },
          1000:{
            items:5
          }
        }
    });
});