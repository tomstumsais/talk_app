'use strict';

var accessToken = "acbe056c76b54195b2197aab43604653";
var baseUrl = "https://api.api.ai/v1/";
var recognition;

// add keypress and click listeners to DOM objects
(function () {
    document.querySelector("#input").addEventListener("keypress", function (event) {
        if (event.which == 13) {
            event.preventDefault();
            send();
        }
    });

    document.querySelector("#rec").addEventListener("click", function (event) {
        switchRecognition();
    });
})();

// Speech recognition section
function startRecognition() {
    recognition = new webkitSpeechRecognition();
    recognition.onstart = function (event) {
        updateRec();
    };
    recognition.onresult = function (event) {
        var text = "";
        for (var i = event.resultIndex; i < event.results.length; ++i) {
            text += event.results[i][0].transcript;
        }
        setInput(text);
        stopRecognition();
    };
    recognition.onend = function () {
        stopRecognition();
    };
    recognition.lang = "en-US";
    recognition.start();
}

function stopRecognition() {
    if (recognition) {
        recognition.stop();
        recognition = null;
    }
    updateRec();
}

function switchRecognition() {
    if (recognition) {
        stopRecognition();
    } else {
        startRecognition();
    }
}

// UI update section
function setInput(text) {
    document.querySelector("#input").value = text;
    send();
}

function updateRec() {
    document.querySelector("#rec").innerHTML = recognition ? "Stop" : "Speak";
}

function setResponse(data) {
    let responseBlock = document.querySelector("#response");

    if (data && data.result && data.result.fulfillment && data.result.fulfillment.speech) {
        responseBlock.innerHTML = data.result.fulfillment.speech;
    } else {
        responseBlock.innerHTML = data;
    }

    document.querySelector("#responseData").innerHTML = JSON.stringify(data, undefined, 2);
}

// Send input value to API.AI
function send() {
    var text = document.querySelector("#input").value;

    $.ajax({
        type: "POST",
        url: baseUrl + "query?v=20170517",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        headers: {
            "Authorization": "Bearer " + accessToken
        },
        data: JSON.stringify({
            query: text,
            lang: "en",
            sessionId: "somerandomthing"
        }),
        success: function (data) {
            setResponse(data);
        },
        error: function () {
            setResponse("Internal Server Error");
        }
    });
    setResponse("Loading...");
}