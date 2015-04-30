$(document).ready(function() {
	$(".overlay").hide();
	$("#operators").mouseenter(function() {
		$("#operatorsOverlay").delay(2000).show("slow");
		$("#mrosOverlay, #lessorsOverlay, #oemsOverlay").hide();
	});
	
	$("#mros").mouseenter(function(){
		$("#mrosOverlay").delay(2000).show("slow");
		("#operatorsOverlay, #lessorsOverlay, #oemsOverlay").hide();
	});
	
	$("#lessors").mouseenter(function(){
		$("#lessorsOverlay").delay(2000).show("slow");
		$("#operatorsOverlay, #mrosOverlay, #oemsOverlay").hide();
	});
	
	$("#oems").mouseenter(function(){
		$("#oemsOverlay").delay(2000).show("slow");
		$("#operatorsOverlay, #mrosOverlay, #lessorsOverlay").hide();
	});
	
	$(".overlay").click(function(){
		$(this).hide("slow");
	});
}); 