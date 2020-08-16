const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
    content:{
        type: String,
        required: true
    },
    publication_date:{
        type: Date,
        default: Date.now
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    post:{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }
}, {
    timestamps: true
});

module.exports = model('Comment', commentSchema);