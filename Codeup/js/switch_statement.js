"use strict";

var colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

switch (color) {
	case "Red":
		console.log("Red is the color of blood.");
		break;
	case "Orange":
		console.log("Orange is the color of an orange.");
		break;
	case "Yellow":
		console.log("Yellow is the color of a banana.");
		break;
	case "Green":
		console.log("Green is the color of grass.");
		break;
	case "Blue":
		console.log("Blue is the color of the sky.");
		break;
	default:
		console.log("I do not know anything by that color.");
}