
$( document ).ready(function() {
	
	var elemsPerLine = returnElemsPerLine(); // how many boxes per line
	var openedItem = null; // default - no open item at start
	var isOpen = false;
	
	// When a window resizes, close the slider.
	$(window).resize(function(){		
		var temp = returnElemsPerLine();
		if (temp == elemsPerLine && isOpen){
			isOpen = false;
			$("#slider > div").css("display","none");
			$("#slider > div").appendTo("#sliderContent");	
			$("#slider").remove();				
		}
		elemsPerLine = temp;
	});
	

	//when a box is clicked
	$( "#contentFeatures > div" ).click(function() {
		if( $("#slider > div").is(':animated') ) {console.log("blocked click"); return;}
				
		
		var clickedItem = this;
		if (isOpen && this.id == openedItem){
			$("#slider > div").slideToggle( "fast", function() {
				isOpen = false;
				$("#slider > div").css("display","none");
				$("#slider > div").appendTo("#sliderContent");	
				$("#slider").remove();
				console.log("done closeing callback");
			});	
			return;
		}
		else if (isOpen){
			$("#slider > div").slideToggle( "fast", function() {
				isOpen = false;
				$("#slider > div").css("display","none");
				$("#slider > div").appendTo("#sliderContent");	
				$("#slider").remove();
				
				
				
				console.log("moving on");
			
				openedItem = clickedItem.id;
				var node = $("#open" + clickedItem.id)[0];
				var spot = findSpot(clickedItem.id);
				var elem = clickedItem;
				
				for (i = 0; i < spot; i++)
				{	
					if ($("#" + elem.id).next().length) {
					  //has next 
					  elem = $("#" + elem.id).next()[0];
					} else {
					  //last elem
					  i = 999;
					}			
				}
				
				$("<div id='slider' class='col-md-3 col-sm-6 hero-feature'></div>").insertAfter(elem);
				console.log(elem);
				console.log(elemsPerLine);
				$("#" + node.id).appendTo("#slider");		
				$("#slider > div").slideToggle( "fast", function() {
					isOpen = true;
				});		
			});	
		}
		else{
			console.log("moving on");
			
			openedItem = this.id;
			var node = $("#open" + this.id)[0];
			var spot = findSpot(this.id);
			var elem = this;
			
			for (i = 0; i < spot; i++)
			{	
				if ($("#" + elem.id).next().length) {
				  //has next 
				  elem = $("#" + elem.id).next()[0];
				} else {
				  //last elem
				  i = 999;
				}			
			}
			
			$("<div id='slider' class='col-md-3 col-sm-6 hero-feature'></div>").insertAfter(elem);
			console.log(elem);
			console.log(elemsPerLine);
			$("#" + node.id).appendTo("#slider");		
			$("#slider > div").slideToggle( "fast", function() {
				isOpen = true;
			});
		}
	}).dblclick(function(e){
		//Prevent double-clicks.	 	 
		e.stopPropagation();
		e.preventDefault();
		return false;
	});;

	// calculate how many items are displayed in one line based on 
	function returnElemsPerLine(){
		if ($("#temp").css("width") == "3px" ){
			return 5;
		}
		else if ($("#temp").css("width") == "2px" ){
			return 2;
		}
		else{
			return 1;
		}	
	}
	
	function findSpot(num){
		if (elemsPerLine == 5){
			return (5 - (num%5))		
		}
		else if(elemsPerLine == 2){
			return num%2;		
		}
		else{
			return 0;		
		}
		
	}

	
});