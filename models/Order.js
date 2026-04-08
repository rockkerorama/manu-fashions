const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    products: [{
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true }
    }],
    totalPrice: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'shipped', 'delivered', 'canceled'], default: 'pending' },
    shippingAddress: { type: String, required: true },
    paymentMethod: { type: String, enum: ['credit card', 'paypal', 'bank transfer'], required: true },
    paymentStatus: { type: String, enum: ['paid', 'pending', 'failed'], default: 'pending' },
    trackingNumber: { type: String, required: false },
}, {
    timestamps: true
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;