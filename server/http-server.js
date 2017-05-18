'use strict';

let express = require('express');
let app = express();
let server = require('http').createServer(app);
let bodyParser = require('body-parser');
let createWSServer = require('./ws-server');
const wss = createWSServer(server);

app.use(bodyParser.json());

// Let's create the regular HTTP request and response
app.get('/', (req, res) => {
    res.send("Service is working fine!");
    console.log('Service ready!');
});

app.post('/', (req, res) => {
    let target = "";
    let speech = "";
    let message = req.body;

    // get city or/and country parameters from input
    if (message.result && message.result.parameters) {
        let city = message.result.parameters["geo-city"];
        let country = message.result.parameters["geo-country"];

        if (city && country) {
            target = city + ", " + country;
        } else if (city) {
            target = city;
        } else if (country) {
            target = country;
        }
    }

    if (target) {
        // send target destination to websocket clients
        wss.clients.forEach(ws => ws.send(JSON.stringify({ target: target })));
        speech = "Thanks! Have a nice trip!";
    } else {
        speech = "Could you please repeat your travel destination?";
    }
    
    return res.json({
        speech: speech,
        displayText: speech,
        source: 'webhook-traveler'
    });
});

server.listen((process.env.PORT || 8000), () => {
    console.log(`http/ws server listening on ${process.env.PORT || 8000}`);
});