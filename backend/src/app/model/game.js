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
        type: Number,

    },
    imageUrl:{
        type: String,
        required: true
    },
    reviews:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }],
    createdAt:{
        type: Date,
        default: Date.now
    }
});

const Game = mongoose.model('Game', GameSchema);

module.exports = Game;
