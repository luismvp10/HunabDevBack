const { Router } = require('express')
const router = Router();

const  { sendAlert } = require('../controllers/prueba')

router.route('/')
    .get(sendAlert)

module.exports = router;
