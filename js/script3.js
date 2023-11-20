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
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000, // 3초마다 슬라이드가 자동으로 이동
    disableOnInteraction: false, // 유저 상호 작용 후에도 자동 재생 유지
  },
});



//suppot buttons 
$(document).ready(function() {
  $('.text_wrap strong').hide(); // 페이지 로드 시 모든 strong 요소를 숨김

  $('.button1').mouseover(function(){
    $('.text_wrap strong').hide(); // 모든 strong 요소를 숨김
    $('.suppot_text1').show(); // .suppot_text1 요소를 표시
  });

  $('.button1').trigger('mouseover'); // 눌러진 상태로 설정

  $('.button2').mouseover(function(){
    $('.text_wrap strong').hide();
    $('.suppot_text2').show();
  });

  $('.button3').mouseover(function(){
    $('.text_wrap strong').hide();
    $('.suppot_text3').show();
  });

  $('.button4').mouseover(function(){
    $('.text_wrap strong').hide();
    $('.suppot_text4').show();
  });
});


// Q&A

$(function(){

	
	$(".right> li> .font0").click(function(){
		$(this).next().slideToggle();
		$( '.c p' ).toggleClass( 'ab' );
	});
	
		$(".right> li> .font1").click(function(){
		$(this).next().slideToggle();
		$( '.d p' ).toggleClass( 'ab' );
	});
	

  $(".right> li> .font2").click(function(){
		$(this).next().slideToggle();
		$( '.e p' ).toggleClass( 'ab' );
	});
	
		$(".right> li> .font3").click(function(){
		$(this).next().slideToggle();
		$( '.f p' ).toggleClass( 'ab' );
	});

});

$(function(){
	$(".right> li> ul").click(function(){
		$(this).children().children("img").toggleClass("turn");
	});
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