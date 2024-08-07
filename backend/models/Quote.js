const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    text: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Quote', quoteSchema);
