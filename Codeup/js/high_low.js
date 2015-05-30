"use strict";

confirm ("You will be guessing a number between 1 and 100. Are you ready to play?");

var answer = Math.floor((Math.random()*100)+1);

var userGuess = prompt("What is your first guess?")

while (userGuess != answer) {
	if (userGuess < answer) {
		alert("The answer is higher than " + userGuess);
	} else {
	 	alert("The answer is lower than " + userGuess);
	}
	userGuess = prompt("What is your next guess?");
}

alert("You did it!");

// var playAgain = confirm ("Would you like to play again?")

// if (playAgain) {
// 	continue;
// } else {
// 	alert ("Please come back to play again!")
// 	break;
// }