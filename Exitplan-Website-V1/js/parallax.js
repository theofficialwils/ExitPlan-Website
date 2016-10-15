$(document).ready(function() {
	parallaxLayer(15, '.cb-slideshow');

	function parallaxLayer(movementStrength, layerId){
		var height = movementStrength / $(window).height();
		var width = movementStrength / $(window).width();
		$("body").mousemove(function(e){
			var pageX = e.pageX - ($(window).width() / 2);
			var pageY = e.pageY - ($(window).height() / 2);
			var newvalueX = width * pageX * -1 - 25;
			var newvalueY = height * pageY * -1 - 50;
			$(layerId).css("left", newvalueX);
			$(layerId).css("top", newvalueY);
		});
	};
});