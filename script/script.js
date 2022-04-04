$( document ).ready(function() {
  $(".menu_button").click(function(){
    $(".menu_button").toggleClass("close");
    $(".language").toggleClass("enable");
    $(".menu_links_wrapper").toggleClass("enable");
    $(".phone").toggleClass("enable");
    $(".adress").toggleClass("enable");
    $(".work_time").toggleClass("enable");
    $(".language").toggleClass("no_padding_no_margin");
    $(".menu_links_wrapper").toggleClass("no_padding_no_margin");
    $(".phone").toggleClass("no_padding_no_margin");
    $(".adress").toggleClass("no_padding_no_margin");
    $(".work_time").toggleClass("no_padding_no_margin");
    return false;
  });
  var display = $( ".menu_button" ).css( "display" );
  if(display == "none"){
    $(".language").toggleClass("enable");
    $(".menu_links_wrapper").toggleClass("enable");
    $(".phone").toggleClass("enable");
    $(".adress").toggleClass("enable");
    $(".work_time").toggleClass("enable");
    $(".language").toggleClass("no_padding_no_margin");
    $(".menu_links_wrapper").toggleClass("no_padding_no_margin");
    $(".phone").toggleClass("no_padding_no_margin");
    $(".adress").toggleClass("no_padding_no_margin");
    $(".work_time").toggleClass("no_padding_no_margin");
  };
});
$(document).ready(function(){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
    swipe: true,
  });
  var swiper = new Swiper('.mySwiper1', {
    slidesPerView: 3,
    spaceBetween: 40,
    clickable: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
    pagination: {
      el: '.swiper-pagination1',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 2,
      },
      900: {
        slidesPerView: 3,
      },
    }
  });
  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2",
    },
    loop: true,
    swipe: true,
  });
});
/*
var Mask = new Inputmask("(XX)XXX-XX-XX");
Mask.mask("#phone_pop_up");
/*
$(document).ready(function () {
  $('#phone_pop_up').usPhoneFormat({
      format: '(xxx) xxx-xxxx',
  });   
});


<input data-inputmask = " 'mask' : 'xx-xxxxxxx'" />

$(document).ready(function() {
  $(":input").inputmask();
});

$("selector").inputmask("xx-xxxxxxxx");

$(document).ready(function(){
  var Mask = new Inputmask("XXXX-XXXX");
  Mask.mask("#phone_pop_up");
});

$(document).ready(function(){
  var phoneMask = IMask(document.getElementById('phone_pop_up'), {
    mask: '+{38}(000)000-00-00',
    lazy: false,  // make placeholder always visible
    placeholderChar: '_'     // defaults to '_'
  });
});

var phoneMask = IMask(
  document.getElementById('phone_pop_up'), {
    mask: '+{7}(000)000-00-00'
  });
/*
$(document).ready(function(){
  $("#phone_pop_up").inputmask({"mask": "+38(099)99-99-999"});
});
*/
$(document).ready(function(){
  $(".call_me").click(function(){
    $(".pop_up_bg").addClass("active");
    $(".pop_up_modal").addClass("active");
  });
  $(".call_me_main_slider").click(function(){
    $(".pop_up_bg").addClass("active");
    $(".pop_up_modal").addClass("active");
  });
  $(".time_to_dem_button").click(function(){
    $(".pop_up_bg").addClass("active");
    $(".pop_up_modal").addClass("active");
  });
  $(".call_me_offer").click(function(){
    $(".pop_up_bg").addClass("active");
    $(".pop_up_modal_offer").addClass("active");
  });
  $(".close_pop_up_modal").click(function(){
    $(".pop_up_bg").removeClass("active");
    $(".pop_up_modal").removeClass("active");
  });
  $(".close_pop_up_modal_offer").click(function(){
    $(".pop_up_bg").removeClass("active");
    $(".pop_up_modal_offer").removeClass("active");
  });
  $(".pop_up_bg").click(function(){
    $(".pop_up_bg").removeClass("active");
    $(".pop_up_modal").removeClass("active");
    $(".pop_up_modal_offer").removeClass("active");
  });
});
$(document).ready(function(){
  $(".time_to_dem_button_2").hover(function(){
    $(".time_to_dem_button").toggleClass("active_button");
    $(".to_replace_1").toggleClass("to_replace");
    $(".to_replace_2").toggleClass("to_replace");
  });
});
