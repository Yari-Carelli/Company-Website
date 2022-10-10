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

// Counter Up
jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});