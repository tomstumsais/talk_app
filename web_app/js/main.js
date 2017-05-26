'use strict';

let map;
let geocoder;
let markers = [];

// at start, open WebSocket connection
(function () {
    // if user is running mozilla then use it's built-in WebSocket
    window.WebSocket = window.WebSocket || window.MozWebSocket;

    let connection = new WebSocket('wss://travel-demo-iuqyeykxmi.now.sh/');

    connection.onopen = function () {
        // connection is opened and ready to use
        console.log("connection is opened");
    };

    connection.onerror = function (error) {
        // an error occurred when sending/receiving data
        console.log("connection error");
    };

    connection.onmessage = function (message) {
        let json = {
            target: ""
        };

        // parse message to JSON
        try {
            json = JSON.parse(message.data);
            console.log(json);
        } catch (e) {
            console.log('This doesn\'t look like a valid JSON: ', message.data);
            return;
        }

        // handle incoming message
        updateUI(json.target);
    };
})();

// delete all markers from Google Map
function deleteMarkers() {
    for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
}

function initMap() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(drawMap);
    } else {
        console.error("Geolocation is not supported by this browser.");
    }

    function drawMap(position) {
        let currentPosition = {
            lat: position ? position.coords.latitude : -34.397,
            lng: position ? position.coords.longitude : 150.644
        };

        map = new google.maps.Map(document.getElementById('map'), {
            center: currentPosition,
            zoom: 5
        });

        // add current position marker
        let marker = new google.maps.Marker({
            map: map,
            position: currentPosition
        });
        markers.push(marker);
    }

    geocoder = new google.maps.Geocoder();
}

/**
 * Geocode passed target destination to LatLng value and then add marker in Google Map.
 * @param {Object} geocoder Geocode object.
 * @param {Object} resultsMap Google Maps object.
 * @param {String} target Target Destination.
 */
function geocodeAddress(geocoder, resultsMap, target) {
    geocoder.geocode({
        'address': target
    }, function (results, status) {
        if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);

            deleteMarkers();

            // add target destination marker
            let marker = new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location
            });
            markers.push(marker);
        } else {
            console.error('Geocode was not successful for the following reason: ' + status);
        }
    });
}

function updateUI(target) {
    // update text with target destination
    let travelTarget = document.querySelector("#travel-target");
    travelTarget.innerHTML = target;

    // update Google Map with marker for target destination
    geocodeAddress(geocoder, map, target);
}