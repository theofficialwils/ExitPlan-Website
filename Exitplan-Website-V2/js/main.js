
$(document).ready(function() {

	/////////////////////////
	//Chevrons
	/////////////////////////

	$( "#chevron-right .chevron-line:nth-child(1)").css('width' , '20px');
	$( "#chevron-right .chevron-line:nth-child(2)").css('width' , '20px');

	$( "#chevron-right .chevron-line:nth-child(1)").delay(300).animate({'top' : '16px'},0);
	$( "#chevron-right .chevron-line:nth-child(2)").delay(300).animate({'top' : '28px'},0);
	setTimeout( function(){
      $( "#chevron-right .chevron-line:nth-child(1)").css({'transform':'rotate(45deg)'},0);
      $( "#chevron-right .chevron-line:nth-child(2)").css({'transform':'rotate(-45deg)'},0);
    },600);


	$( "#chevron-left .chevron-line:nth-child(1)").css('width' , '20px');
	$( "#chevron-left .chevron-line:nth-child(2)").css('width' , '20px');

	$( "#chevron-left .chevron-line:nth-child(1)").delay(300).animate({'top' : '16px'},0);
	$( "#chevron-left .chevron-line:nth-child(2)").delay(300).animate({'top' : '28px'},0);
	setTimeout( function(){
      $( "#chevron-left .chevron-line:nth-child(1)").css({'transform':'rotate(-45deg)'},0);
      $( "#chevron-left .chevron-line:nth-child(2)").css({'transform':'rotate(45deg)'},0);
    },600);





	/////////////////////////
	//Contact
	/////////////////////////
	var contactClicked=0;
	$("#contact").click(function() {
	  	if (contactClicked==0){
		  	contactClicked=1;
		  	$("#contact-info").show();
		  	$("#contact-info").animate({opacity: 1},0);
		  	$("#contact-cross").animate({opacity: 1},0);
		  	$("#contact-info p").animate({opacity: 1},1);
		}
	});

	$("#contact-cross").click(function() {
	  	if (contactClicked==1){
		  	contactClicked=0;
		  	
		  	$("#contact-info").delay(1000).animate({opacity: 0},1);
		  	$("#contact-cross").animate({opacity: 0},0);
		  	$("#contact-info p").animate({opacity: 0},1);
		  	$("#contact-info").delay(1001).hide(0);
		}
	});

	$("#burger-menu").click(function() {
	  	if (contactClicked==1){
		  	contactClicked=0;
		  	
		  	$("#contact-info").delay(300).animate({opacity: 0},1);
		  	$("#contact-cross").animate({opacity: 0},0);
		  	$("#contact-info p").animate({opacity: 0},1);
		  	$("#contact-info").delay(300).hide(0);
		}
	});







	/////////////////////////
	//BURGER MENU
	/////////////////////////
	var burgerClicked=0;
	$("#burger-menu").click(function() {
	  	if (burgerClicked==0){
	  		if(window.innerWidth>700){
	  			$("#navbar").css('width',window.innerWidth);
	  		}else{
	  			$("#navbar").css('height',window.innerHeight);
	  		}
		  	$("#line1").css('top','28px');
		  	$("#line1").css('transform','rotate(45deg)');
		  	$("#line2").css('opacity','0');
		  	$("#line3").css('top','28px');
		  	$("#line3").css('transform','rotate(-45deg)');

		  	
		  	$("#navbar ul").delay(500).show(0);
		  	$("#navbar ul").delay(500).animate({opacity:'1'},0);

		  	burgerClicked=1;
		}else{
			if(window.innerWidth>700){
	  			$("#navbar").delay(500).css('width','80px');
	  		}else{
	  			$("#navbar").delay(500).css('height','80px');	
	  		}
			$("#line1").css('top','20px');
		  	$("#line1").css('transform','rotate(0deg)');
		  	$("#line2").css('opacity','1');
		  	$("#line3").css('top','36px');
		  	$("#line3").css('transform','rotate(0deg)');

		  	$("#navbar ul").animate({opacity:'0'},0);
		  	$("#navbar ul").delay(500).hide(0);

		  	burgerClicked=0;
		}
	});











	/////////////////////////
	//SLIDE DECK
	/////////////////////////


	var mouseX;
	var mouseY;

	var allowScroll = 1;
	var scrollSpeed = 2;

	var rightCheck = 1;
	var leftCheck = 1;
	var slideDeckWidth = $('#slide-deck')[0].scrollWidth;
	var slideLeft = parseInt($("#slide-deck").css("left"));
	var slideRight = slideLeft+slideDeckWidth;

	$("#slide-container").mouseover(function (event) {
		if(allowScroll==1 && window.innerWidth>700){
			mouseX = event.clientX;
	    	mouseY = event.clientY;
	    	slideLeft = parseInt($("#slide-deck").css("left"));
	    	slideRight = slideLeft+slideDeckWidth;

	       	if(mouseX<(window.innerWidth/3)+80 && mouseX>80){rightCheck=1; scrollSpeed=2;}else{rightCheck=0}
	       	if(mouseX<(window.innerWidth/6)){scrollSpeed=8;}
	    	moveRight();
	    	if(mouseX>((window.innerWidth/3)*2)){leftCheck=1; scrollSpeed=2;}else{leftCheck=0}
	    	if(mouseX>((window.innerWidth/6)*5)){scrollSpeed=8;}
	    	moveLeft();
    	}
	});

	$("#slide-container").mouseout(function (event) {
		if(allowScroll==1 && window.innerWidth>700){
			rightCheck=0;
			moveRight();
			leftCheck=0;
			moveLeft();
		}
	});
	
	function moveRight() {
		slideLeft = parseInt($("#slide-deck").css("left"));
		if(slideLeft>80){
			$("#slide-deck").css("left","80px");
		}
	  	if(rightCheck==1 && slideLeft<80){
	    	$('#slide-deck').stop().animate({left: '+='+scrollSpeed+'px'},1, moveRight);
	  	}
	}

	function moveLeft() {
		slideRight = parseInt($("#slide-deck").css("left"))+slideDeckWidth;
		if(slideRight<window.innerWidth){
			$("#slide-deck").css("left",(window.innerWidth-slideDeckWidth));
		}
	  	if(leftCheck==1 && slideRight>window.innerWidth){
	    	$('#slide-deck').stop().animate({left: '-='+scrollSpeed+'px'},1, moveLeft);
	  	}
	}



	var currentSlide=0;
	var slideOpen=0;
	$(".slide").click(function() {
		currentSlide = $(this).index()+1;
		$('#slide-page').show();
		if(window.innerWidth>700){
			$('#slide-page').animate({width: (window.innerWidth-80)+'px'},1);
		}else{
			$("#slide-page").css('overflow', 'auto');
			$('#slide-page').animate({height: window.innerHeight+'px'},1);
			$("#chevron-up").css('display', 'block');
			$("#chevron-down").css('display', 'block');
			$("#chevron-up").animate({opacity: '1'},0);
			$("#chevron-down").animate({opacity: '1'},0);
		}

		$("#slide-page .slide-content:nth-child("+currentSlide+")").each(function() {
		  if ($(this).find("p").length > 0) {
		    $('#slide-page p').show();
		  }
		});
		$("#slide-page .slide-content:nth-child("+currentSlide+")").delay(2000).animate({opacity: 1},1);
		$(".cross-line").delay(500).animate({width: 25+'px'},1);

		$( "#chevron-right .chevron-line:nth-child(1)").css('background' , '#fff');
		$( "#chevron-right .chevron-line:nth-child(2)").css('background' , '#fff');
		$( "#chevron-left .chevron-line:nth-child(1)").css('background' , '#fff');
		$( "#chevron-left .chevron-line:nth-child(2)").css('background' , '#fff');

		if(window.innerWidth>700){
		    setTimeout( function(){
		    	$("#slide-container").css('overflow-y', 'auto');
		    },2000);
		}else{		
			$("#slide-container").css('overflow', 'hidden');
			$('#slide-container').animate({scrollTop:0}, 0);
		}


		allowScroll=0;
		slideOpen=1;
	});

	$("#cross").click(function() {
		$("#slide-page .slide-content:nth-child("+currentSlide+")").animate({opacity: 0},1);
		if(window.innerWidth>700){
			$("#slide-container").css('overflow-y', 'hidden');
			$('#slide-page').delay(200).animate({width: 0+'px'},1);
		}else{
			$("#slide-container").css('overflow-y', 'auto');
			$("#slide-page").css('overflow', 'hidden');
			$('#slide-page').delay(200).animate({height: 0+'px'},1);
		}

		$("#chevron-up").animate({opacity: '0'},0);
		$("#chevron-down").animate({opacity: '0'},0);
		$("#chevron-up").delay(300).hide(0);
		$("#chevron-down").delay(300).hide(0);

		$('#slide-page p').hide();
		$("#slide-page .slide-content").animate({opacity: 0},1);
		$(".cross-line").delay(200).animate({width: 0+'px'},1);

		$('#slide-page').delay(2000).hide(0);

		$( "#chevron-right .chevron-line:nth-child(1)").css('background' , 'white');
		$( "#chevron-right .chevron-line:nth-child(2)").css('background' , 'white');
		$( "#chevron-left .chevron-line:nth-child(1)").css('background' , 'white');
		$( "#chevron-left .chevron-line:nth-child(2)").css('background' , 'white');

		setTimeout( function(){
	    	allowScroll=1;
			slideOpen=0;
	    },1500);
	});

	$("#chevron-right").click(function() {
		if(slideOpen=1 && currentSlide!=$("#slide-page .slide-content").length){
			$("#slide-page .slide-content:nth-child("+currentSlide+")").animate({opacity: 0},1);
			currentSlide = currentSlide+1;
			$('#slide-page p').hide();
			$("#slide-page .slide-content:nth-child("+currentSlide+")").each(function() {
			  if ($(this).find("p").length > 0) {
			    $('#slide-page p').show();
			  }
			});
			$("#slide-page .slide-content:nth-child("+currentSlide+")").animate({opacity: 1},1);
		}
	});

	$("#chevron-left").click(function() {
		if(slideOpen=1 && currentSlide!=1){
			$("#slide-page .slide-content:nth-child("+currentSlide+")").animate({opacity: 0},1);
			currentSlide = currentSlide-1;
			$('#slide-page p').hide();
			$("#slide-page .slide-content:nth-child("+currentSlide+")").each(function() {
			  if ($(this).find("p").length > 0) {
			    $('#slide-page p').show();
			  }
			});
			$("#slide-page .slide-content:nth-child("+currentSlide+")").animate({opacity: 1},1);
		}
	});
	$("#chevron-down").click(function() {
		if(slideOpen=1 && currentSlide!=$("#slide-page .slide-content").length){
			$("#slide-page .slide-content:nth-child("+currentSlide+")").animate({opacity: 0},1);
			currentSlide = currentSlide+1;
			$('#slide-page p').hide();
			$("#slide-page .slide-content:nth-child("+currentSlide+")").each(function() {
			  if ($(this).find("p").length > 0) {
			    $('#slide-page p').show();
			  }
			});
			$("#slide-page .slide-content:nth-child("+currentSlide+")").animate({opacity: 1},1);
		}
	});

	$("#chevron-up").click(function() {
		if(slideOpen=1 && currentSlide!=1){
			$("#slide-page .slide-content:nth-child("+currentSlide+")").animate({opacity: 0},1);
			currentSlide = currentSlide-1;
			$('#slide-page p').hide();
			$("#slide-page .slide-content:nth-child("+currentSlide+")").each(function() {
			  if ($(this).find("p").length > 0) {
			    $('#slide-page p').show();
			  }
			});
			$("#slide-page .slide-content:nth-child("+currentSlide+")").animate({opacity: 1},1);
		}
	});









	/////////////////////////
	//WINDOW RESIZE
	/////////////////////////
	$( window ).resize(function() {
		if(window.innerWidth>700){
			if(slideOpen==1){
				$('#slide-page').css('width', (window.innerWidth-80)+'px');
			}
			if(window.innerWidth>slideRight-10){
				$("#slide-deck").css("left",(window.innerWidth-slideDeckWidth));
			}
			if (burgerClicked==1){
				$("#navbar").css('width',window.innerWidth);
			}
		}else{
			if(slideOpen==1){
				$('#slide-page').css('height', (window.innerHeight-80)+'px');
			}
			$("#slide-deck").css("left", '0');
			if (burgerClicked==1){
				$("#navbar").css('width',window.innerWidth);
			}
			$("#navbar").css('width',window.innerWidth);
		}
	});

});