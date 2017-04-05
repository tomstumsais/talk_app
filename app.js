const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.post('/talk', (req, res) => {
    var speech = req.body.result && req.body.result.parameters && req.body.result.parameters.phraseText ? req.body.result.parameters.phraseText : "Seems like some problem. Speak again."
    return res.json({
        speech: speech,
        displayText: speech,
        source: 'webhook-demo'
    });
});

app.listen((process.env.PORT || 8000), () => {
    console.log("Server up and listening");
});