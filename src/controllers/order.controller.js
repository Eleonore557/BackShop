const Order = require("../models/order.model");

exports.getOrder = (req, res) => {
    Order.findById(req.body.id).populate('user').populate('products').then(data => res.send(data)).catch(err => console.log(err));
}