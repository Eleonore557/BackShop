const express = require('express');
const router = express.Router();
const webhookController = require('../controllers/webhooks.controller');
const bodyParser = require('body-parser')

router.post('/stripe', bodyParser.raw({ type: 'application/json' }),webhookController.stripewebhook);

module.exports = router;