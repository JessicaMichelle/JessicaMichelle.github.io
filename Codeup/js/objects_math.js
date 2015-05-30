"use strict";

// create a circle object
var circle = {
    radius: 3,
    getArea: function () {
        var area = Math.PI * Math.pow(this.radius, 2);
        // todo: finish this method
        // hint: area = pi * radius^2
        return area; // todo: return data
    },
    logInfo: function (round) {
        var area = this.getArea();

        if (round) {
            area = Math.round(area);
        }

        // todo: complete this method. if round is true, round the result to the nearest integer.
        console.log('Area of a circle with radius: ' + this.radius + ', is: ' + area);
    }
};

// log info about the circle
circle.logInfo(false);
circle.logInfo(true);

// todo:
// Change the radius of the circle to 5.

console.log(" ");

circle.radius = 5;

console.log(" ");

// log info about the circle
circle.logInfo(false);
circle.logInfo(true);