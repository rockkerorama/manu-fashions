const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    color: { type: String },
    size: { type: String },
    images: [{ type: String }],
    stock: { type: Number, required: true },
    material: { type: String },
    pattern: { type: String },
    rating: { type: Number, min: 0, max: 5 },
    reviews: [{
        user: { type: String },
        comment: { type: String },
        rating: { type: Number, min: 0, max: 5 },
        date: { type: Date, default: Date.now }
    }]
});

module.exports = mongoose.model('Product', productSchema);