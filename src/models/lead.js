const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String},
    phone: { type: String },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Lead', leadSchema);
