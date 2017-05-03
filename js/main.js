(function () {
    // if user is running mozilla then use it's built-in WebSocket
    window.WebSocket = window.WebSocket || window.MozWebSocket;

    var connection = new WebSocket('ws://localhost:8000');

    connection.onopen = function () {
        // connection is opened and ready to use
        console.log("connection is opened");
    };

    connection.onerror = function (error) {
        // an error occurred when sending/receiving data
        console.log("connection error");
    };

    connection.onmessage = function (message) {
        // try to decode json (I assume that each message from server is json)
        try {
            var json = JSON.parse(message.data);
            console.log(json);
        } catch (e) {
            console.log('This doesn\'t look like a valid JSON: ', message.data);
            return;
        }
        // handle incoming message
    };
})();
