$(document).ready(function() {
	$(".overlay").hide();
	$("#operators").mouseenter(function() {
		$("#operatorsOverlay").delay(2000).show("slow");
	});
	
	$("#mros").mouseenter(function(){
		$("#mrosOverlay").delay(2000).show("slow");
	});
	
	$("#lessors").mouseenter(function(){
		$("#lessorsOverlay").delay(2000).show("slow");
	});
	
	$("#oems").mouseenter(function(){
		$("#oemsOverlay").delay(2000).show("slow");
	});
	
	$(".overlay").click(function(){
		$(this).hide("slow");
	});
}); 