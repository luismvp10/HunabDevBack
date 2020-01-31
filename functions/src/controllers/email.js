const configMensaje = require('../controllers/configMensaje');
const emailCtrl ={};

emailCtrl.sendEmail = async (req, res) => {
    console.log(req.body);
    configMensaje(req.body);
    res.status(200).send();
}


module.exports = emailCtrl;
