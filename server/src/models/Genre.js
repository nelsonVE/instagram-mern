const { Schema, model } = require('mongoose');

const genreSchema = new Schema({
    name: {
        required: true,
        type: String
    }
}, {
    timestamps: true
});

module.exports = model('Genre', postSchema);