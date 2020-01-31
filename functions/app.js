const express = require('express');
const cors = require('cors');
const app = express();



///Settings
app.set('port', process.env.PORT || 5000);



///Middlewares
app.use(cors());
app.use(express.json());



///Routes
app.use('/email', require('./src/routes/email'))
app.use('/ff', require('./src/routes/prueba'))


module.exports = app;



