'use strict';

// Create web socket server on top of a regular http server
let WSServer = require('ws').Server;

const createServer = (httpServer) => {
    let wss = new WSServer({
         server: httpServer
    });

    wss.on('connection', function connection(ws) {
        ws.on('message', function incoming(message) {
            console.log(`received: ${message.target}`);
            ws.send(JSON.stringify({
                status: "Success"
            }));
        });
    });

    return wss;
}

module.exports = createServer;