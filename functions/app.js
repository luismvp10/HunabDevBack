const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

///Settings
app.set('port', process.env.PORT || 5000);


   
///Middlewares
app.use(cors());	
// app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


///Routes
app.use('/email', require('./src/routes/email'))
app.use('/ff', require('./src/routes/prueba'))


module.exports = app;



