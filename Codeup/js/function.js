"use strict";

var myNameIs = "Jessica"; // todo: Fill in your name here.

function sayHello(name) {
	console.log("Hello " + name);
}

sayHello(myNameIs);

// ----------NEXT----------//

var random = Math.floor((Math.random()*100)+1);

console.log(random);

function isOdd(number) {
	var message = (number % 2 != 0) ? "The number is odd." : "The number is even."
	console.log(message);
}

isOdd (random);