const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    birthdate:{
        type: Date,
        required: true
    },
    genre:{
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

module.exports = model('User', userSchema);