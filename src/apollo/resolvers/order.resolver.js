const Order = require('../../models/order.model');

module.exports = {
    Query: {
        getOrder(parent, args, context) {
            return Order.findById(args.id).populate('user').populate('products');
        },
        getOrders(parent, args, context) {
            return Order.find().populate('user').populate('products');
        }
    }
}