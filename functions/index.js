// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const functions = require('firebase-functions');
const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
//const request = require("request");
const configMensaje = require('./configMensaje');
const port = 5000;

const APP_TOKEN = 'EAAva7nWZBt7oBAOs6qD95lti7cn7UrV9ZCVh5NswF5JCZAV6L0l2ZAIJiZCCQ2fpZAQeU6LV2qyzsaSzMajhBe5kX9Uk0CVCisqWZCTJc83nztQhZBFbc0nu3IZBSjZAN6tkwqiFf3lFUkd5a0AXZBPw4Ev5o5SZBlZAG4RZC33VUDdgh2yQZDZD';



const app = express();
//app.use(ra origin: "*"}));
app.use(bodyParser.json());
app.use(cors());

app.listen(port, function() {
    console.log('Listening to Port ' + port);
});



app.get('/ff', (req, res) => {
    res.send('El sacaton');
});

app.post('/email', (req, res) => {
    console.log(req.body);
    configMensaje(req.body);
    res.status(200).send();
});


app.get('/webhook', function(req, res) {

    if (req.query['hub.verify_token'] === 'test_token_say_hunab') {
        res.send(req.query['hub.challenge']);
    } else {
        res.send("Warning");
    }
});


app.post('/webhook', function(req, res) {
    const data = req.body;
    console.log(data);
    console.log(req);
});

exports.app = functions.https.onRequest(app);
