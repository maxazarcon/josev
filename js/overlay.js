$(document).ready(function() {

	$(".overlay").hide();
	
	var delay = 750;
	var timeout;
	
	$('#operators').mouseenter(function() {
		timeout = setTimeout(function() {
			$("#operatorsOverlay").show("slow");
		}, delay);
	}).mouseleave(function() {
		clearTimeout(timeout);
	});

	$('#mros').mouseenter(function() {
		timeout = setTimeout(function() {
			$("#mrosOverlay").show("slow");
		}, delay);
	}).mouseleave(function() {
		clearTimeout(timeout);
	});

	$('#lessors').mouseenter(function() {
		timeout = setTimeout(function() {
			$("#lessorsOverlay").show("slow");
		}, delay);
	}).mouseleave(function() {
		clearTimeout(timeout);
	});

	$('#oems').mouseenter(function() {
		timeout = setTimeout(function() {
			$("#oemsOverlay").show("slow");
		}, delay);
	}).mouseleave(function() {
		clearTimeout(timeout);
	});

	$(".overlay").click(function() {
		$(this).hide("slow");
	});
});
