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
const configMensaje = require('./configMensaje');
const port = 5000;


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

exports.app = functions.https.onRequest(app);