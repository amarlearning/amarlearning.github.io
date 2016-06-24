(function() {
  var delay = false;

  $(document).on('mousewheel DOMMouseScroll', function(event) {
    event.preventDefault();
    if(delay) return;

    delay = true;
    setTimeout(function(){delay = false},300)

    var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;

    var a= document.getElementsByTagName('section');
    if(wd < 0) {
      for(var i = 0 ; i < a.length ; i++) {
        var t = a[i].getClientRects()[0].top;
        if(t >= 40) break;
      }
    }
    else{
      for(var i = a.length-1 ; i >= 0 ; i--) {
        var t = a[i].getClientRects()[0].top;
        if(t < -20) break;
      }
    }
    $('html,body').animate({
      scrollTop: a[i].offsetTop
    },550);
  });
})();

$(".tlinks").click(function (e) {
  e.preventDefault();
  elementClick = $(this).attr("href");
  destination = $(elementClick).offset().top;
  $('body').animate( { scrollTop: destination }, 700 );
  return false;
});
function validate() {
  var first_name = document.getElementById('first_name').value;
  var last_name = document.getElementById('last_name').value;
  var email = document.getElementById('email').value;
  var number = document.getElementById('number').value;
  var course = document.getElementById('course').value;
  var college_name = document.getElementById('college_name').value;
  var city = document.getElementById('city').value;
  var whywpa = document.getElementById('whywpa').value;
  var howgrow = document.getElementById('howgrow').value;
  if( first_name == "") {
    Materialize.toast('First name field is empty!', 2000);
    return false;
  }
  if(last_name == "") {
    Materialize.toast('Last name field is empty!', 2000);
    return false;
  }
  if(!email.match(/[A-Za-z0-9_]+@[A-Za-z0-9]+\.[A-Za-z0-9]+/)) {
    Materialize.toast('Email is incorrect!', 2000);
    return false;
  }
  if(!number.match(/^(\+91|)[0-9]{10}/)) {
    Materialize.toast('Number is incorrect!', 2000);
    return false;
  }
  if(course == "") {
    Materialize.toast('Course feild is empty!', 2000);
    return false;
  }
  if(college_name == "") {
    Materialize.toast('College name feild is empty!', 2000);
    return false;
  }
  if(city == "") {
    Materialize.toast('City feild is empty!', 2000);
    return false;
  }
  if(whywpa == "") {
    Materialize.toast('Why WPA feild is empty!', 2000);
    return false;
  }
  if(howgrow == "") {
    Materialize.toast('Help feild or last feild is empty!', 2000);
    return false;
  }
  return (true);
}