$(document).ready(function() {
	$(".overlay").hide();
	$("#closeOverlay").hide();
	$("#operators").mouseenter(function() {
		$("#operatorsOverlay, #operatorsOverlay.closeOverlay").show("slow");
	});
	$(".closeOverlay").click(function(){
		$(".overlay, .closeOverlay").hide("slow");
	});
}); 