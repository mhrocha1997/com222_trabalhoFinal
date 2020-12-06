const mongoose = require('../../database/connection');

const ReviewSchema = new mongoose.Schema({
    text:{
        type: String,
        required: true
    },
    rate:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;