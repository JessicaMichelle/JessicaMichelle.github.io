"use strict";
$(document).ready(function() {
	var konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
	var user = [];
	var counter = 0;

	var listener = function (event) {
		user.push(event.keyCode);
		console.log(user);
		if (konami.length == user.length) {
			if ( konami.toString() == user.toString()) {
			alert("WOOOOOOOOOOOOOOOOO! Konami Code!");
			user = [];
			counter = 0;
			};
		} else if (konami.toString().indexOf(user.toString()) < 0) {
			user = [];
			alert("No stupid, wrong button. Start over.");
		} else if (konami[counter] != user[counter]) {
			user = [];
			counter = 0;
			alert("No stupid, wrong button. Start over.");
		}
		counter++;
		console.log(counter);
	};

	$("#game").keydown(listener);
});