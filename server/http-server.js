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
    console.log('Service ready!');
});

app.post('/', (req, res) => {
    let message = req.body;
    console.log('Regular POST message: ', message.message);

    wss.clients.forEach(ws => ws.send(JSON.stringify(message)));

    return res.json({
        answer: 42
    });
});

server.listen((process.env.PORT || 8000), () => {
    console.log(`http/ws server listening on ${process.env.PORT || 8000}`);
});