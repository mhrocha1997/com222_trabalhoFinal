const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    rank:{
        type: Number,
        required: true
    },
    text:{
        type: String,
        required: true
    },
    game:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }
});

const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;