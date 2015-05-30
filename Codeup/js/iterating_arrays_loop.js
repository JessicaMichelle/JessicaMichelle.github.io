"use strict";

var names = ["Jessica", "Ashley", "Jackie", "Lacey"];

for (var i = 0; i < names.length; i++) {
	console.log("The name at index " + i + " is: " + names[i]);
}

names.forEach(function (element, index, array) {
	console.log("The name at index " + index + " is: " + element);
});