const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    amount: {type:Number},
    date: {type: Date},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    products: [
        { type: Schema.Types.ObjectId, ref: 'Product' }
    ],
    stripeId: String,
    status: String
});

module.exports = mongoose.model('Order', orderSchema);