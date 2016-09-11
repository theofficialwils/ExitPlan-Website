$(document).ready(function(){
	
	$(function() {
	  $('.slide').hover(function() { //on hover
	    $(this).find('.slide-header').animate({bottom: '57%'},0);
	    $(this).find('.slide-text').stop().animate({top: '-100%'},0);
	    $(this).find('.slide-text').stop().animate({top: '0%'},700);
	    $(this).find('.slide-text p').delay(600).animate({opacity: '1'},0);
	    $(this).find('.slide-text a').delay(600).animate({opacity: '1'},0);
	    $(this).find('.darken').animate({opacity: '0.8'},0);
	  }, function() { //off hover
	    $(this).find('.slide-header').animate({bottom: '-200px'},0);
	    $(this).find('.slide-text p').stop().animate({opacity: '0'},0);
	    $(this).find('.slide-text a').stop().animate({opacity: '0'},0);
	    $(this).find('.slide-text').stop().animate({top: '100%'},550);    
	    $(this).find('.darken').animate({opacity: '0'},0);
	  });
	});


	var currentPopSlide=0;
	var currentSlide=0;

	$( window ).resize(function() {
		if(window.innerWidth>=1200){
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
		if(window.innerWidth>=800&&window.innerWidth<=1200){
			currentPopSlide=1;
			currentSlide=0;
			$("#slide-1").css('left', '0%');
			$("#slide-2").css('left', '33.3%');
			$("#slide-3").css('left', '66.6%');
			$("#slide-4").css('left', '99.9%');
			$("#slide-5").css('left', '133.2%');
			$("#slide-6").css('left', '166.5%');
			$("#slide-7").css('left', '199.8%');
			$("#slide-8").css('left', '233.1%');
			$("#slide-9").css('left', '266.4%');
			$("#slide-10").css('left', '299.7%');
			$("#slide-11").css('left', '333%');

			$("#slide-1-front").css('left', '0%');
			$("#slide-2-front").css('left', '33.3%');
			$("#slide-3-front").css('left', '66.6%');
			$("#slide-4-front").css('left', '99.9%');
			$("#slide-5-front").css('left', '133.2%');
			$("#slide-6-front").css('left', '166.5%');
			$("#slide-7-front").css('left', '199.8%');
			$("#slide-8-front").css('left', '233.1%');
			$("#slide-9-front").css('left', '266.4%');
			$("#slide-10-front").css('left', '299.7%');
			$("#slide-11-front").css('left', '333%');
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

	function moveRight(noSlides, speed){
		if(window.innerWidth<800){
			if(noSlides-1==currentSlide){
				$(".slide").animate({opacity: '0.7'},speed);
				$(".slide").animate({opacity: '1'},speed);
				return 0;
			}		
			$(".slide").animate({left: '-=100%'},speed);
		}else if(window.innerWidth>=800&&window.innerWidth<=1200){
			if(noSlides-3==currentSlide){
				$(".slide").animate({opacity: '0.7'},speed);
				$(".slide").animate({opacity: '1'},speed);
				return 0;
			}	
			$(".slide").animate({left: '-=33.3%'},speed);
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
		if(window.innerWidth<800){
			if(currentSlide==0){
				$(".slide").animate({opacity: '0.7'},speed);
				$(".slide").animate({opacity: '1'},speed);
				return 0;
			}		
			$(".slide").animate({left: '+=100%'},speed);
		}else if(window.innerWidth>=800&&window.innerWidth<=1200){
			if(currentSlide==0){
				$(".slide").animate({opacity: '0.7'},speed);
				$(".slide").animate({opacity: '1'},speed);
				return 0;
			}	
			$(".slide").animate({left: '+=33.3%'},speed);
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
		moveRight(6);
    });

    $("#left-arrow").click(function(){
    	moveLeft(6);
    });
});