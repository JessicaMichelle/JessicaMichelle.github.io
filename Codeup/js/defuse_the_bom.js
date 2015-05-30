"use strict";
$(document).ready(function() {
    var detonationTimer = 5;
    var interval;
    // TODO: This function needs to be called once every second
    function updateTimer() {
        if (detonationTimer == 0) {
            $("body").css("background-image","url(img/explosion.jpg)");
            $("#message")
                .css("color","white")
                .html("You are SO totally dead...like DEAD dead...");
            alert('BOOM!');
        } else if (detonationTimer > 0) {
            $("#timer").html(detonationTimer);
        };
        
        detonationTimer--;
    };

    interval = setInterval(updateTimer, 1000);

    // TODO: When this function runs, it needs to
    // cancel the interval/timeout for updateTimer()
    function defuseTheBOM() {
        clearInterval(interval);
        $("body").css("background-image","url(img/defused.jpg)");
        $("#message")
            .css("color","white")
            .html("The bomb was disarmed!");
    }

    // Don't modify anything below this line!
    //
    // This causes the defuseTheBOM() function to be called
    // when the "defuser" button is clicked.
    // We will learn about events in the DOM lessons
   $("#defuser").click(defuseTheBOM);
});