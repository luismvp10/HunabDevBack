const { Router } = require('express');
const router = Router();

const { sendEmail } = require('../controllers/email')

router.route('/')
        .post(sendEmail)


module.exports = router;
