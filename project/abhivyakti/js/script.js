function toggleSound() {
  var audioElem = document.getElementById('audio');
  if (audioElem.paused)
    audioElem.play();
  else
    audioElem.pause();
}
$(document).ready(function(){

  var modalzero = $('.android');
  $('.show-android').click(function() {
  modalzero.show();
  });

  $('.close-modal').click(function() {
   modalzero.hide();
  });
  var modalone = $('.schedule');
  $('.show-modal-schedule').click(function() {
  modalone.show();
  });

  $('.close-modal').click(function() {
   modalone.hide();
  });

  var modalthree = $('.notifications');
  $('.show-modal-notifications').click(function() {
  modalthree.show();
  });

  $('.close-modal').click(function() {
   modalthree.hide();
  });

  var modaltwo = $('.result');
  $('.show-modal-result').click(function() {
  modaltwo.show();
  });

  $('.close-modal').click(function() {
   modaltwo.hide();
  });
});
$(document).ready(function(){
		$(".click-sub-one").click(function(e){
      e.preventDefault();
			$("#tog").slideToggle(400);
		});
	});
$(document).ready(function(){
		$(".click-sub-two").click(function(e){
      e.preventDefault();
			$("#tog-two").slideToggle(400);
		});
	});
$(document).ready(function() {
    $('.nav-toggle').click(function(e) {
    	e.preventDefault();
    	$('nav').toggleClass('nav-open');
      $('.android-logo').toggleClass('android-logo-index');
      $('#nav-tog').toggleClass('nav-tog-open');
    });
});
$(document).ready(function(){
  $('#dntrigger').click(function(){
    $('.nav-not-icon').addClass('nonee');
  });
});

$(".tlinks").click(function (e) {
  e.preventDefault();
  elementClick = $(this).attr("href");
  destination = $(elementClick).offset().top;
  if(elementClick === '#home')
  {
    $('body').animate( {scrollTop: destination},1200);
  }
  else
  {
    $('body').animate( { scrollTop: destination }, 300 );
    $('body').animate( { scrollTop: destination-250 }, 500 );
    $('body').animate( { scrollTop: destination }, 300 );
    $('body').animate( { scrollTop: destination-30 }, 500 );
    $('body').animate( { scrollTop: destination }, 300 );
    return false;
  }
});

$(window).scroll(function() {
	var wScroll = $(this).scrollTop();
	$('.main-logo').css({
		'transform' : 'translate(0px,'+wScroll/1.8+'%)'
	});
	// $('.main-theme').css({
	// 	'transform' : 'translate(0px,'+wScroll/2.99+'%)'
	// });
	// $('.main-icon').css({
	// 	'transform' : 'translate(0px,-'+wScroll/50+'%)'
	// });
  $('.parallex-image-one').css({
    'transform' : 'translate(0px,'+wScroll*0.0099999+'%)'
  });
  $('.parallex-image-two').css({
    'transform' : 'translate(0px,'+wScroll*0.00911919+'%)'
  });
});

$(window).load(function () {
			setTimeout(function () {
				$('.part-one').css('display','none');
			}, '1100');
			setTimeout(function () {
				$('.part-two').css('opacity','1');
			}, '1100');

});

$(window).load(function() {
$('.portfolio-choice ul li').click(function(){
$('.portfolio-choice ul li').removeClass('active-cell');
$('.portfolio-choice ul li').removeClass('pcli-click');
$('.portfolio-choice ul li').addClass('pcli');
$(this).addClass('active-cell');
$(this).removeClass('pcli');
$(this).addClass('pcli-click');
});

var $container = $('#grid');
$container.isotope({
itemSelector: '.information',
layoutMode: 'fitRows'
});
$('#filters').on( 'click', 'a', function() {
var filterValue = $(this).attr('data-filter');
$container.isotope({ filter: filterValue });
return false;
});
});

$('[data-toggle="tooltip"]').tooltip({html:true});
