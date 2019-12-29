//const functions = require('firebase-functions');
const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const request = require("request");
const configMensaje = require('./configMensaje');
const port = 5000;

const APP_TOKEN = 'EAAva7nWZBt7oBAOs6qD95lti7cn7UrV9ZCVh5NswF5JCZAV6L0l2ZAIJiZCCQ2fpZAQeU6LV2qyzsaSzMajhBe5kX9Uk0CVCisqWZCTJc83nztQhZBFbc0nu3IZBSjZAN6tkwqiFf3lFUkd5a0AXZBPw4Ev5o5SZBlZAG4RZC33VUDdgh2yQZDZD';



const app = express();
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
    var data = req.body;
    if (data.object == 'page') {
        data.entry.forEach(function(pageEntry) {
            pageEntry.messaging.forEach(function(messagingEvent) {

                if (messagingEvent.message) {
                    receiveMessage(messagingEvent);
                }

            });
        });
        res.sendStatus(200);
    }

    // console.log(data);
    //console.log(req);
});


function receiveMessage(event) {
    var senderID = event.sender.id;
    var messageText = event.message.text;
    //console.log(senderID);
    //console.log(messageText);
    evaluateMessage(senderID, messageText);
}

function evaluateMessage(userId, message) {
    var finalMessage = '';

    ///If the user need help
    if (isContain(message, 'ayuda')) {
        finalMessage = 'Por el momento no te puedo ayudar';
    } else {
        finalMessage = 'Escribe bien prro, no seas mamon';
    }
    sendMessageText(userId, finalMessage);
}

function isContain(sentence, word) {
    return sentence.indexOf(word) > -1;
}

function callSendAPI(messageData) {
    request({
        uri: 'https://graph.facebook.com/v2.6/me/messages',
        qs: { access_token: APP_TOKEN },
        method: 'POST',
        json: messageData

    }, function(error, response, data) {
        if (error) {
            console.log("No fue posible enviar el mensaje");
        } else {
            console.log("El mensaje se envió con éxito");
        }
    });
}

function sendMessageText(userId, message) {
    var messageDate = {
        recipient: {
            id: userId,
        },
        message: {
            text: message
        }
    };

    callSendAPI(messageDate);


}

//exports.app = functions.https.onRequest(app);