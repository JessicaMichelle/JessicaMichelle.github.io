"use strict";

$(document).ready(function() {
	// Reveals and hides the definition in the list when definition term is clicked
	$("ol>li").click(function(event) {
		$(this).next().slideToggle(300);
	});
	// Bolds the first line of each unordered list
	$("ul").each(function(index) {
		$(this).children().first().css("font-weight","bold");
	});
	// Reveals and hides the facts about each National Park when the park name is clicked
	$("h3").click(function(event) {
		$(this).next().slideToggle(200);
	});
});