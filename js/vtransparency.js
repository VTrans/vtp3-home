$( document ).ready(function() {
	
	$("#btnPavement").click(function() {
		$('html, body').animate({
			scrollTop: $("#pavement").offset().top - 50
		}, 1000);
	});
	$("#btnOps").click(function() {
		$('html, body').animate({
			scrollTop: $("#ops").offset().top - 50
		}, 1000);
	});
	$("#btnWho").click(function() {
		$('html, body').animate({
			scrollTop: $("#whocall").offset().top - 50
		}, 1000);
	});
	$("#btnProjects").click(function() {
		$('html, body').animate({
			scrollTop: $("#projects").offset().top - 50
		}, 1000);
	});
	$("#btnBridge").click(function() {
		$('html, body').animate({
			scrollTop: $("#bridge").offset().top - 50
		}, 1000);
	});
	
});