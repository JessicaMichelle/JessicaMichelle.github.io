"use strict";

$(document).ready(function(){
	$("#btn-move").click(function() {
		$("#animate-box")
			.animate({left: "-=500px"}, 100)
	});
	$("#btn-scale-down").click(function() {
		$("#animate-box")
			.animate({width: "+=125px"}, 1000)
	});
	$("#btn-disappear").click(function() {
		$("#animate-box")
			.animate({opacity: "0"}, 1000)
	});
	$("#btn-show").click(function() {
		$("#animate-box")
			.animate({opacity: "1"}, 1000)
	});
	
	function animateAll(img){
		var img = $("#animate-box");
		img.animate({
					left: "+=100px",
					width: "-=75px",
					height:"+=60px"}, 300)
		img.animate({
					width: "+=75px",
					height: "-=60px",
					left: "+=20px"}, 300, animateAll)
	};

	$("#btn-all").click(animateAll);
});
    