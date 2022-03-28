const express = require('express');
const router = express.Router();
const usersRouter = require('./users.route');
const checkoutRouter = require('./checkout.route');
const webHooksRouter = require('./webhooks.route');
const orderRouter = require('./order.route');

router.use('/users/', usersRouter);
router.use('/checkout',checkoutRouter);
router.use('/webhooks',webHooksRouter);
router.use('/order',orderRouter);

module.exports = router;