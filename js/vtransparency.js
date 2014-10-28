$( document ).ready(function() {
	
	$(".pavement").click(function() {
		closeJumpToMenu();
		$('html, body').animate({
			scrollTop: $("#pavement").offset().top - 50
		}, 1000);
	});
	$(".ops").click(function() {
		closeJumpToMenu();
		$('html, body').animate({
			scrollTop: $("#ops").offset().top - 50
		}, 1000);
	});
	$(".who").click(function() {
		closeJumpToMenu();
		$('html, body').animate({
			scrollTop: $("#whocall").offset().top - 50
		}, 1000);
	});
	$(".projects").click(function() {
		closeJumpToMenu();
		$('html, body').animate({
			scrollTop: $("#projects").offset().top - 50
		}, 1000);
	});
	$(".bridge").click(function() {
		closeJumpToMenu();
		$('html, body').animate({
			scrollTop: $("#bridge").offset().top - 50
		}, 1000);
	});
	
	$(".backtop").click(function() {
		$('html, body').animate({
			scrollTop: $("body").offset().top
		}, 400);
	});
	
	function closeJumpToMenu(){
		$('li.dropdown').removeClass("open");		
		$('button.navbar-toggle').addClass("collapsed");
		$('#bs-example-navbar-collapse-1').removeClass("in");
	}
	
});