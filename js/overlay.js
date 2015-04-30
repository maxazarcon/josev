$(document).ready(function() {
	
	$(".overlay").hide();
	
	var timeout;
	$('#operators').mouseenter(function() {
		timeout = setTimeout(function() {
			$("#operatorsOverlay").show("slow");
		}, 500);
	}).mouseleave(function() {
		clearTimeout(timeout);
	});

	$('#mros').mouseenter(function() {
		timeout = setTimeout(function() {
			$("#mrosOverlay").show("slow");
		}, 500);
	}).mouseleave(function() {
		clearTimeout(timeout);
	});
	
	$('#lessors').mouseenter(function() {
		timeout = setTimeout(function() {
			$("#lessorsOverlay").show("slow");
		}, 500);
	}).mouseleave(function() {
		clearTimeout(timeout);
	});

	$('#oems').mouseenter(function() {
		timeout = setTimeout(function() {
			$("#oemsOverlay").show("slow");
		}, 500);
	}).mouseleave(function() {
		clearTimeout(timeout);
	});

	$(".overlay").click(function() {
		$(this).hide("slow");
	});
});
var myTimeout;
$('#mylink').mouseenter(function() {
	myTimeout = setTimeout(function() {
		//do stuff
	}, 500);
}).mouseleave(function() {
	clearTimeout(myTimeout);
});
