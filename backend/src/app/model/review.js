const mongoose = require('../../database');


const ReviewSchema = new mongoose.Schema({
    text:{
        type: String,
        required: true
    },
    rate:{
        type: String,
        unique: true,
        lowercase: true,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    game:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Game',
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});


const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;
