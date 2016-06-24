$(document).ready(function(){
	var block = $('.pull-out'); 
	var inside = $('.inside');
	$('article').click(function(){
		block.toggleClass('show')
		inside.toggleClass('control');
		var name = this.id;
		name = '#'+name+'yt';
		$(name).toggleClass('hide');
	})
	
	$('.cross').click(function(){
		block.toggleClass('show')
		inside.toggleClass('control');
  		var videoElem = this.id;
  		videoElem = "#"+videoElem + "pauseit";
		var video = $(videoElem).attr("src");
		$(videoElem).attr("src","");
		$(videoElem).attr("src",video);
    	$('.movie').removeClass('hide');
	})
});