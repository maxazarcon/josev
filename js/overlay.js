$(document).ready(function() {
	$(".overlay").hide();
	$("#operators").mouseenter(function() {
		$("#operatorsOverlay").delay(2000).show("slow");
		$(".row").delay(1700).hide("slow");
	});
	
	$("#mros").mouseenter(function(){
		$("#mrosOverlay").delay(2000).show("slow");
		$(".row").delay(1700).hide("slow");
	});
	
	$("#lessors").mouseenter(function(){
		$("#lessorsOverlay").delay(2000).show("slow");
		$(".row").delay(1700).hide("slow");
	});
	
	$("#oems").mouseenter(function(){
		$("#oemsOverlay").delay(2000).show("slow");
		$(".row").delay(1700).hide("slow");
	});
	
	$(".overlay").click(function(){
		$(this).hide("slow");
		$(".row").show("slow");
	});
}); 