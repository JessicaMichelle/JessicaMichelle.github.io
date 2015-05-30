"use strict";
$(document).ready(function() {
	var title = $("#title");
	var paragraphs = $("p");
	var lineItems = $("li");

// ----------MOUSE EVENTS----------

	title.click(function() {
		$(this).css("background-color", "blue")
	});

	paragraphs.dblclick(function() {
		$(this).css("font-size","18px")
	});

	lineItems.hover(function() {
		$(this).css("background-color","#FF0000");
		},
		function() {
			$(this).css("background-color","#FFFFFF");
		});

// ----------CSS----------

	title.css({
		"width":"650px"});

	$("main").css({
		"width":"650px",
		"font-size":"20px",
		"text-align":"justify"});
	
	paragraphs.css({
		"text-decoration":"underline",
		"font-weight":"bold",
		"width":"300px"});
	
	$("#list").css({
		"list-style-type":"none"});
	
	lineItems.css({
		"font-size":"20px",
		"width":"300px"});
	
	$(".underline").css({
		"text-decoration":"underline"});
	
	$(".bold").css({
		"font-weight":"bold"});
	
	$(".italics").css({
		"font-style":"italic"});
	
	$(".green").css({
		"color":"#7FFF00",});
});