const mongoose = require('../../database/connection');
const bcrypt = require('bcryptjs');

const GameSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    console:{
        type: String,
        require: true
    },
    summary:{
        type: String,
        required: true
    },
    developer:{
        type: String,
        required: true
    },
    genre:{
        type:  String,
        required: true
    },
    rate:{
        type: Number
    },
    rateAux:{
        type: Number
    },
    reviewsSize:{
        type: Number
    },
    imageUrl:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

const Game = mongoose.model('Game', GameSchema);

module.exports = Game;
