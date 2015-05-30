"use strict";

var person = {};

person.firstName = "Jessica";
person.lastName = "Reyes";

person.sayHello = function () {
	alert("Hello " + person.firstName + " " + person.lastName);
};