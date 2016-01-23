var elem = document.querySelector('.malarkey');
var opts = {
  typeSpeed: 50,
  deleteSpeed: 50,
  pauseDelay: 2000,
  loop: true,
  postfix: ''
};
malarkey(elem, opts).type('Amar.').pause(700).delete()
.type('a nerd.').pause(700).delete()
.type('sexy.').pause(700).delete()
.type('Quora addict.').pause(700).delete()
.type('Introvert.').pause(700).delete()
.type('Sapiosexual.').pause(700).delete()
.type('a Geek.').pause(700).delete()
.type('a Web Developer.').pause(700).delete()
.type('a Hacker.').pause(700).delete()
.type('that guy.').pause(700).delete()
.type('Amar.').pause(700).type(' And I love building things with code.').pause(1200000000000);


$(document).ready(function(){
  setTimeout(function(){
    $('#hide').css({'display':'none'});
  },22100);
});
$(document).ready(function(){
  $('#github').hover(function(){
    $('.github-text').toggleClass('show');
  });
  $('#twitter').hover(function(){
    $('.twitter-text').toggleClass('show');
  });
  $('#codepen').hover(function(){
    $('.codepen-text').toggleClass('show');
  });
  $('#linkedin').hover(function(){
    $('.linkedin-text').toggleClass('show');
  });
  $('#stack').hover(function(){
    $('.stack-text').toggleClass('show');
  });
  $('#quora').hover(function(){
    $('.quora-text').toggleClass('show');
  });
  $('#facebook').hover(function(){
    $('.facebook-text').toggleClass('show');
  });
});
