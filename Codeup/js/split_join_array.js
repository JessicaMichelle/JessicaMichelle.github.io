"use strict";

// todo:
// Copy the array of planets you created in the last lesson.
var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

console.log(planets);

console.log("");
console.log("");

console.log("Changing the planets array to a string");
console.log("               |                ");
console.log("               |                ");
console.log("               V                ");

// todo: Join the planets array with pipes (|) to create a variable named 'planetsAsString'.
var planetsAsString = planets.join("|");

console.log(planetsAsString);

console.log("");
console.log("");

console.log("Changing the variable planetsAsString to an array");
console.log("               |                ");
console.log("               |                ");
console.log("               V                ");

// todo: Split the 'planetsAsString' variable by pipes (|) to create a variable named 'planetsAsArray'.
var planetsAsArray = planetsAsString.split("|");

console.log(planetsAsArray);