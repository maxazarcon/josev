$(document).ready(function() {
	$(".overlay").hide();
	$("#operators").mouseenter(function() {
		$("#operatorsOverlay").show("slow");
	});
	
	$("#mros").mouseenter(function(){
		$("#mrosOverlay").show("slow");
	});
	
	$("#lessors").mouseenter(function(){
		$("#lessorsOverlay").show("slow");
	});
	
	$("#oems").mouseenter(function(){
		$("#oemsOverlay").show("slow");
	});
	
	$(".overlay").click(function(){
		$(this).hide("slow");
	});
}); 