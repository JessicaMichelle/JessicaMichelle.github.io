(function() {
    // TODO: Create an ajax GET request for /data/inventory.json
    var inventory = $.get("data/inventory.json");

    inventory.done(function(data) {
        alert("AJAX call completed successfully!");
        console.log("data returne to server")
    })

    // TODO: Take the data from inventory.json and append it to the products table
    //       HINT: Your data should come back as a JSON object; use console.log() to inspect
    //             its contents and fields
    //       HINT: You will want to target #insertProducts for your new HTML elements
})();