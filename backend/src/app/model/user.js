const mongoose = require('../../database/connection');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true,
        lowercase: true,
    },
    password:{
        type: String,
        required: true,
        select: false
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

UserSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;

    next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
