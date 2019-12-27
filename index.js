var express = require('express');
var cors = require("cors");
var bodyParser = require("body-parser");
var nodemailer = require("nodemailer");
var configMensaje = require('./configMensaje');
var port = 3000;

var app = express();
//app.use(ra origin: "*"}));
app.use(bodyParser.json());
app.use(cors());

app.listen(port, function() {
    console.log('Listening to Port ' + port);
});



app.get('/ping', (req, res) => {
    res.send('Hello World!');
});

app.post('/formulario', (req, res) => {
    configMensaje(req.body);
    res.status(200).send();
});