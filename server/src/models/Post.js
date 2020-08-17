const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    photo: {
        required: false,
        type: String,
        default: "No photo"
    },
    description: {
        required: false,
        type: String
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    like: [{
        type: Schema.Types.ObjectId,
        ref: 'Like'
    }],
    comment: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
}, {
    timestamps: true
});

module.exports = model('Post', postSchema);