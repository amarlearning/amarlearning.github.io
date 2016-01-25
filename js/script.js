var elem = document.querySelector('.malarkey');
var opts = {
  typeSpeed: 50,
  deleteSpeed: 50,
  pauseDelay: 2000,
  loop: false,
  postfix: ''
};
malarkey(elem, opts).type('Amar.').pause(700).delete(100)
.type('a nerd.').pause(700).delete(100)
.type('sexy.').pause(700).delete(100)
.type('Quora addict.').pause(700).delete(100)
.type('Introvert.').pause(700).delete(100)
.type('Sapiosexual.').pause(700).delete(100)
.type('a Geek.').pause(700).delete(100)
.type('a Web Developer.').pause(700).delete(100)
.type('a Hacker.').pause(700).delete(100)
.type('that guy.').pause(700).delete(100)
.type('Amar.').pause(700).type(' And I love building things with code.');

$(document).ready(function(){
  setTimeout(function(){
    $('#hide').css({'display':'none'});
  },21000);
});

$(document).ready(function()
{
  $('#github').hover(function()
  {
    $('.github-text').toggle();
  });

  $('#twitter').hover(function()
  {
    $('.twitter-text').toggle();
  });

  $('#codepen').hover(function()
  {
    $('.codepen-text').toggle();
  });

  $('#linkedin').hover(function()
  {
    $('.linkedin-text').toggle();
  });

  $('#stack').hover(function()
  {
    $('.stack-text').toggle();
  });

  $('#quora').hover(function()
  {
    $('.quora-text').toggle();
  });

  $('#facebook').hover(function()
  {
    $('.facebook-text').toggle();
  });

});
