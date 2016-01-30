$(document).ready(function(){
	var divrow=16;
	var divcol=16;
	var divnumr=0;
	var divnumc=0;
	
	while(divnumc<divcol){
		while(divnumr<divrow){
			$(".grid").append("<div class='square'>");
			divnumr+=1;
		};
		$(".grid").append("</br>")
		divnumc+=1;
		divnumr=0;
	};	

	$(".square").mouseenter(function(){
		$(this).css("background-color","#fcdfff");
	})
	$("#reset").click(function(){
		$(".square").css("background-color","black");
		var newgrid = prompt("How many box in each row and colum for new grid?", "64 MAX");
		 $(".square").remove();
		 $("br").remove();
		 divrow=newgrid;
		 divcol=newgrid;
		divnumr=0;
		divnumc=0;
	
	while(divnumc<divcol){
		while(divnumr<divrow){
			$(".grid").append("<div class='square'>");
			divnumr+=1;
		};
		$(".grid").append("</br>")
		divnumc+=1;
		divnumr=0;
			var size=830/divrow;
	$(".square").css("height",size);
	$(".square").css("width",size);
	$(".square").mouseenter(function(){
		$(this).css("background-color","#fcdfff");
	})
	};	
	})
		
	var size=830/divrow;
	$(".square").css("height",size);
	$(".square").css("width",size);
})