
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
	
		// prevent double clicking an item while it is animating.
		if( $("#slider > div").is(':animated') ) {return;}
				
		// store value of 'this'
		var clickedItem = this;
		
		
		if (isOpen && this.id == openedItem){
			$("#slider > div").slideToggle( "fast", function() {
				isOpen = false;
				$("#slider > div").css("display","none");
				$("#slider > div").appendTo("#sliderContent");	
				$("#slider").remove();
			});	
			return;
		}
		else if (isOpen){
			$("#slider > div").slideToggle( "fast", function() {
				isOpen = false;
				$("#slider > div").css("display","none");
				$("#slider > div").appendTo("#sliderContent");	
				$("#slider").remove();
			
				newSlider(clickedItem);
			});	
		}
		else{		
			newSlider(clickedItem);
		}
	}).dblclick(function(e){
		//prevent double-clicks.	 	 
		e.stopPropagation();
		e.preventDefault();
		return false;
	});;
	
	function newSlider(clickedItem){
		openedItem = clickedItem.id;
		var node = $("#open" + clickedItem.id)[0];
		var spot = findSpot(clickedItem.id);
		var elem = clickedItem;
		
		//find the last box in the row.
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
		$("#" + node.id).appendTo("#slider");		
		$("#slider > div").slideToggle( "fast", function() {
			isOpen = true;
		});	
		$('html, body').animate({
			scrollTop: $("#" + openedItem).offset().top - 60
		}, 1000);
	}

	// calculate how many items are displayed in one line based on media queries.
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
	
	// We want to slider box to show up on the next line. 
	// We need to return how many boxes are left till the end of the line
	// so we can insert this as the next sibling.
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