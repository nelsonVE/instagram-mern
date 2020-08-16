const { Schema, model } = require('mongoose');

const likeSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }
});

module.exports = model('Like', likeSchema);