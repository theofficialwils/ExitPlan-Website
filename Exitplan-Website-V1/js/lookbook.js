$(document).ready(function(){
	var currentPopSlide=0;
	var currentSlide=0;

	$( window ).resize(function() {
		if(window.innerWidth>=800){
			currentPopSlide=1;
			currentSlide=0;
			$("#slide-1").css('left', '0%');
			$("#slide-2").css('left', '20%');
			$("#slide-3").css('left', '40%');
			$("#slide-4").css('left', '60%');
			$("#slide-5").css('left', '80%');
			$("#slide-6").css('left', '100%');
			$("#slide-7").css('left', '120%');
			$("#slide-8").css('left', '140%');
			$("#slide-9").css('left', '160%');
			$("#slide-10").css('left', '180%');
			$("#slide-11").css('left', '200%');

			$("#slide-1-front").css('left', '0%');
			$("#slide-2-front").css('left', '20%');
			$("#slide-3-front").css('left', '40%');
			$("#slide-4-front").css('left', '60%');
			$("#slide-5-front").css('left', '80%');
			$("#slide-6-front").css('left', '100%');
			$("#slide-7-front").css('left', '120%');
			$("#slide-8-front").css('left', '140%');
			$("#slide-9-front").css('left', '160%');
			$("#slide-10-front").css('left', '180%');
			$("#slide-11-front").css('left', '200%');
		}
		if(window.innerWidth<800){
			currentPopSlide=1;
			currentSlide=0;
			$("#slide-1").css('left', '0%');
			$("#slide-2").css('left', '100%');
			$("#slide-3").css('left', '200%');
			$("#slide-4").css('left', '300%');
			$("#slide-5").css('left', '400%');
			$("#slide-6").css('left', '500%');
			$("#slide-7").css('left', '600%');
			$("#slide-8").css('left', '700%');
			$("#slide-9").css('left', '800%');
			$("#slide-10").css('left', '900%');
			$("#slide-11").css('left', '1000%');

			$("#slide-1-front").css('left', '0%');
			$("#slide-2-front").css('left', '100%');
			$("#slide-3-front").css('left', '200%');
			$("#slide-4-front").css('left', '300%');
			$("#slide-5-front").css('left', '400%');
			$("#slide-6-front").css('left', '500%');
			$("#slide-7-front").css('left', '600%');
			$("#slide-8-front").css('left', '700%');
			$("#slide-9-front").css('left', '800%');
			$("#slide-10-front").css('left', '900%');
			$("#slide-11-front").css('left', '1000%');
		}
	});

	$('.slide').click(function() {
		var href = $(this).find("a").attr("href").substr(1);
		currentPopSlide = Math.floor(href);
		$("#pop-up-image"+href).animate({opacity: '1'},0);

		$("#pop-up").animate({opacity: '0'},0);
		$("#pop-up").show();
		$("#pop-up").animate({opacity: '1'},1000);
	});

	$('#close').click(function() {
		$("#pop-up").animate({opacity: '0'},1000);
		$("#pop-up").delay(1).hide(0);
		$(".slide-image-full").animate({opacity: '0'},1000);
	});

	$(function() {
	  $('.slide').hover(function() {
	    $(this).find('.darken').animate({opacity: '0.5'},0);
	  }, function() {
	    $(this).find('.darken').animate({opacity: '0'},0);
	  });
	});

	function moveRight(noSlides, speed){
		if(window.innerWidth<=800){
			if(noSlides-1==currentSlide){
				$(".slide").animate({opacity: '0.7'},speed);
				$(".slide").animate({opacity: '1'},speed);
				return 0;
			}		
			$(".slide").animate({left: '-=100%'},speed);
		}else{
			if(noSlides-5==currentSlide){
				$(".slide").animate({opacity: '0.7'},speed);
				$(".slide").animate({opacity: '1'},speed);
				return 0;
			}	
			$(".slide").animate({left: '-=20%'},speed);
		}
		currentSlide= currentSlide+1;
		return 0;
	}

	function moveLeft(noSlides, speed){
		if(window.innerWidth<=800){
			if(currentSlide==0){
				$(".slide").animate({opacity: '0.7'},speed);
				$(".slide").animate({opacity: '1'},speed);
				return 0;
			}		
			$(".slide").animate({left: '+=100%'},speed);
		}else{
			if(currentSlide==0){
				$(".slide").animate({opacity: '0.7'},speed);
				$(".slide").animate({opacity: '1'},speed);
				return 0;
			}	
			$(".slide").animate({left: '+=20%'},speed);
		}
		currentSlide= currentSlide-1;
	}

	$("#right-arrow").click(function(){
		moveRight(11);
    });

    $("#left-arrow").click(function(){
    	moveLeft(11);
    });


    function popupMoveRight(noSlides){
    	var slideOffset = 5;
    	if(window.innerWidth<=800){
    		slideOffset = 0;
    	}
    	if(currentPopSlide==noSlides)
    	{
    		for (i = 0; i < noSlides-slideOffset; i++) {moveLeft(noSlides,0);}
	    	$("#pop-up-image"+currentPopSlide).animate({opacity: '0'},1000);
    		currentPopSlide = 1;
    		$("#pop-up-image"+currentPopSlide).animate({opacity: '1'},1000);
    		return 0;
    	}
    	$("#pop-up-image"+currentPopSlide).animate({opacity: '0'},1000);
    	currentPopSlide = currentPopSlide+1;
    	$("#pop-up-image"+currentPopSlide).animate({opacity: '1'},1000);
	}

	function popupMoveLeft(noSlides){
		var slideOffset = 5;
    	if(window.innerWidth<=800){
    		slideOffset = 0;
    	}
    	if(currentPopSlide==1)
    	{
    		for (i = 0; i < noSlides-slideOffset; i++) {moveRight(noSlides,0);}
	    	$("#pop-up-image"+currentPopSlide).animate({opacity: '0'},1000);
    		currentPopSlide = noSlides;
    		$("#pop-up-image"+currentPopSlide).animate({opacity: '1'},1000);
    		return 0;
    	}
    	$("#pop-up-image"+currentPopSlide).animate({opacity: '0'},1000);
    	currentPopSlide = currentPopSlide-1;
    	$("#pop-up-image"+currentPopSlide).animate({opacity: '1'},1000);
	}

	$("#popup-right-arrow").click(function(){
		moveRight(11);
		popupMoveRight(11);
    });

    $("#popup-left-arrow").click(function(){
    	moveLeft(11,500);
    	popupMoveLeft(11,500);
    });
});