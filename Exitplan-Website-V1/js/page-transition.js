$(document).ready(function(){
    $(".transition-white").click(function(){
    	pageTransitionOut(25, 'white');
    	change(this.id);
    });

    $(".transition-black").click(function(){
    	pageTransitionOut(25, 'black');
    	change(this.id);
    });

    function pageTransitionOut(transitionNo, color){
    	$("#transition").show();
    	for (i = 0; i < transitionNo; i++) { 
    		$("#transition").append('<div class="background-change"></div>');
    	}

	    $(".background-change").each(function(index){
	    	$(this).css('background-color', color);
	    	$(this).animate({width: (100/transitionNo)+'%'},0);
       		$(this).animate({left: ((100/transitionNo)*index)+'%'},0);
       		$(this).delay(index*100).animate({top: '0%'},300);
       		$(this).animate({opacity: '1'},300);
   		}); 		
    }

    function change(id){
    	 setTimeout(function () {
	       window.location.href = id;
	    }, 3000);
    }

    $('.nav-link').click(function() {
        //reset
        $("#contact-popup").animate({width: '85%', height: '0%'},0);
        $("#contact-text-container").animate({opacity: '1'},0); 

        $("#contact-popup").show();
        $("#contact-popup").animate({height: '85%'},1000);
        $("#contact-outer").show();
        $("#contact-outer").animate({opacity: '0.8'},1000);
    });

    $('#close-popup').click(function() {
        $("#contact-outer").animate({opacity: '0'},500);
        $("#contact-outer").delay(1).hide(0);
        $("#contact-popup").animate({width: '0%'},500);
        $("#contact-text-container").animate({opacity: '0'},300);  
        $("#contact-popup").delay(1).hide(0);
    });
});