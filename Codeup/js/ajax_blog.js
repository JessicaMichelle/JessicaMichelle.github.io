(function() {
    // TODO: Create an ajax GET request for /data/inventory.json
    var blog = $.get("data/blog.json");

    blog.done(function(data) {
        console.log("AJAX call completed successfully!");

        var htmlString = "";

        $("#button").click(function(){
                for (var i = 0; i < data.length; i++) {
                htmlString += "<p>" + data[i].title + "</p>";
                htmlString += "<p>" + data[i].content + "</p>";
                htmlString += "<p>" + data[i].categories + "</p>";
            };

            $("#posts").html(htmlString);
        });

    })


    // TODO: Take the data from inventory.json and append it to the products table
    //       HINT: Your data should come back as a JSON object; use console.log() to inspect
    //             its contents and fields
    //       HINT: You will want to target #insertProducts for your new HTML elements
})();