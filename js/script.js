var elem = document.querySelector('.malarkey');
var opts = {
	typeSpeed: 50,
	deleteSpeed: 50,
	pauseDelay: 2000,
	loop: false,
	postfix: ''
};
malarkey(elem, opts).type('Amar.').pause(1000).delete(100)
.type('a nerd.').pause(700).delete(100)
.type('Quora addict.').pause(700).delete(100)
.type('Introvert.').pause(700).delete(100)
.type('a Geek.').pause(700).delete(100)
.type('a Web Developer.').pause(700).delete(100)
.type('a Hacker.').pause(700).delete(100)
.type('GSoCer.').pause(700).delete(100)
.type('that guy.').pause(700).delete(100)
.type('Amar.').pause(700).type(' And I love building things with code.');

var online = new Object();
online.github = "I dump code on Github.";
online.dev  = "Sometimes I write ;)";
online.twitter  = "Mostly retweet on Twitter.";
online.linkedin  = "Be professional on LinkedIn.";
online.quora  = "Ask questions on Quora.";
online.facebook  = "Make friends on Facebook.";
online.googleplus  = "Circle me here.";

$(document).ready(function(){
	
	setTimeout(function(){
		$('#trade-mark').css({'display':'none'});
	},20000);
	
	$(".online").hover(function() {
		var method = $(this).attr("id");
		$(".fill-text").text(online[method]);
	});
	
	$(".online").mouseleave(function(){
	    $(".fill-text").text("");
	});
});
