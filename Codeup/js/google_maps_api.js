"use strict";

// Set our address to geocode
var address = "15607 Interstate 10 Frontage Rd, San Antonio, TX 78249";

// Init geocoder object
var geocoder = new google.maps.Geocoder();

// Geocode our address
geocoder.geocode( { 'address': address}, function(results, status) {
    // Check for a successful result
    if (status == google.maps.GeocoderStatus.OK) {
        // Set our map options
        var mapOptions = {
          // Set the zoom level
          zoom: 15,
          // This sets the center of the map at our location
          center: results[0].geometry.location
        }
        // Render the map
        var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    } else {
        // Show an error message with the status if our request fails
        alert("Geocoding was not successful - STATUS: " + status);
    }
    // Create lat and long for our marker position
    var cheddars = { lat: 29.5846601, lng: -98.5964285};

	var marker = new google.maps.Marker({
      position: cheddars,
      map: map,
      animation: google.maps.Animation.DROP
    });
	    // Create a new infoWindow object with content
	var infowindow = new google.maps.InfoWindow({
	    content: "<center><h3>Cheddars Casual Cafe</h3><h4>15067 Interstate 10 Frontage Rd<br>San Antonio, TX, 78249<br>Open till: 11:00 am - 11:00pm</h4></center>"
	});

	// Open the window using our map and marker
	infowindow.open(map,marker);
});
