$(document).ready(function(){
	var menuClicked=0;
    $("#mobile-menu").click(function(){
    	if(menuClicked==0){
    		$(".nav-item").show();
	        $(".nav-item").animate({bottom: '0px'},500);
	        menuClicked=1;
	    }else{   	
	        $(".nav-item").animate({bottom: '-500px'},500);
	        $(".nav-item").delay(600).hide(0);
	        menuClicked=0;
	    }
    });
    $( window ).resize(function() {
		if(window.innerWidth>799){
			$(".nav-item").animate({bottom: '0px'},0);
			$(".nav-item").css('display', 'inline-block');
		}
		if(window.innerWidth<800){
			$(".nav-item").css('display', 'block');
			if(menuClicked==1){
	    		$(".nav-item").show();
		        $(".nav-item").animate({bottom: '0px'},0);
		    }else{   	
		        $(".nav-item").animate({bottom: '-500px'},0);
		        $(".nav-item").hide();
		    }		
		}
	});
});