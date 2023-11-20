//gnb text color
$(document).ready(function() {
    if ($(window).scrollTop() === 0) {
        $('#header').addClass('white_ver');
    }

    $(window).scroll(function() {
        if ($(this).scrollTop() === 0) {
            $('#header').addClass('white_ver');
        } else {
            $('#header').removeClass('white_ver');
        }
    });
});


// logo change
$(document).ready(function(){ 
    $('.main_logo img.color_logo').hide();
 // Header scroll class
 $(window).scroll(function() {
   if ($(this).scrollTop() > 0) {
     $('.main_logo').addClass('header-scrolled');
     $('.main_logo img.white_logo').fadeOut(0);
     $('.main_logo img.color_logo').fadeIn(0);
   } else {
     $('.main_logo').removeClass('header-scrolled');
      $('.main_logo img.color_logo').fadeOut(0);
     $('.main_logo img.white_logo').fadeIn(0);
   }
 })
});


// magnifier change
$(document).ready(function(){ 
    $('.top li .dark_ver').hide();
 // Header scroll class
 $(window).scroll(function() {
   if ($(this).scrollTop() > 0) {
     $('.top li').addClass('header-scrolled');
     $('.top li img.white_ver').fadeOut(0);
     $('.top li img.dark_ver').fadeIn(0);
   } else {
     $('.main_logo').removeClass('header-scrolled');
      $('.top li img.dark_ver').fadeOut(0);
     $('.top li img.white_ver').fadeIn(0);
   }
 })
});



//Swiper banner moving
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 1000, 
  loop: true,
});


//suppot buttons 
$(document).ready(function() {
  function showText(textClass) {
    $('.text_wrap strong').hide();
    $(textClass).show();
  }

  // 초기에 모든 strong 요소를 숨김
  $('.text_wrap strong').hide();

  // 각 버튼에 대한 마우스 오버 이벤트 설정
  $('.won-buttons button').mouseover(function() {
    // 모든 버튼에서 "pressed" 클래스 제거
    $('.won-buttons button').removeClass('pressed');

    // 현재 마우스 오버된 버튼에 "pressed" 클래스 추가
    $(this).addClass('pressed');

    // 해당 버튼에 따라 텍스트를 표시
    var buttonIndex = $(this).index() + 1;
    showText('.suppot_text' + buttonIndex);
  });

  // 초기에 선택된 버튼에 대한 텍스트 표시 및 "pressed" 클래스 추가
  $('.won-buttons button.button1').trigger('mouseover');
});



//pop up

$(function(){
  $("#popup_wrap").hide()
  $(".top li").click(function(){
      $("#popup_wrap").fadeIn(0)
  });
  $("#close_popup").click(function(){
      $("#popup_wrap").fadeOut(0)
  });
});