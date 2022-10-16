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

// Alert Message in Contact Form on Send

function message(){
  var Name = document.getElementById('name');
  var email = document.getElementById('email');
  var msg = document.getElementById('msg');
  const success = document.getElementById('success');
  const danger = document.getElementById('danger');

  if(Name.value === '' || email.value === '' || msg.value === ''){
    danger.style.display = 'block'; 
  }
  else{
    setTimeout(() => {
      Name.value = '';
      email.value = '';
      msg.value = '';
    }, 2000);

    success.style.display = 'block';
  }

  setTimeout(() => {
    danger.style.display = 'none';
    success.style.display = 'none';
  }, 4000);
}