const commentController = {};
const Comment = require('../models/Comment');
const User = require('../models/User');

commentController.getCommentsByPost = async (req, res) => {
    const comments = await Comment.find({}).populate('')
}

commentController.getCommentsByUser = (req, res) => {
    
}

commentController.createComment = (req, res) => {
    
}

commentController.deleteComment = (req, res) => {
    
}

module.exports = commentController;