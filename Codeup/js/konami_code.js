"use strict";

var konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
var user = [];

var listener = function (event) {
	user.push(event.keyCode);
	console.log(user);
	if (konami.length == user.length) {
		if ( konami.toString() == user.toString()) {
		alert("I now kinda hate the Konami Code!");
		};
	};
};

var body = document.getElementById("game");
body.addEventListener("keyup", listener, false);

