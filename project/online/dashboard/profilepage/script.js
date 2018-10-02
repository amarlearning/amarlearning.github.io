$(document).ready( function(){
	console.log($(".span").width());
    $('.top').click( function() {
        var toggleWidth = $(".sidebar").width() == 250 ? "60px" : "250px";
        var toggleWidthspan = $(".span").width() == 150 ? "0px" : "150px";
        $('.sidebar').animate({ width: toggleWidth }, 1);
        $('.span').animate({ width: toggleWidthspan }, 1);
    });
});