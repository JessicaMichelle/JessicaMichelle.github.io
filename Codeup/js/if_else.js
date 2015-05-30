"use strict";

var colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

var favorite = 'Green';
var message;

console.log(color);

if (color=="Green") {
	message ="Green is the color of grass.";
}
else if (color=="Red") {
	message ="Red is the color of blood.";
}
else if (color=="Orange") {
	message ="Orange is the color of an orange.";
}
else if (color=="Yellow") {
	message ="Yellow is the color of a banana.";
}
else if (color=="Blue") {
	message ="Blue is the color of the sky.";
}
else {
	message ="I do not know anything by that color.";
}

var favMessage = (favorite==color) ? "Your favorite color matches." : "Your favorite color does not match.";

console.log(message);
console.log(favMessage);