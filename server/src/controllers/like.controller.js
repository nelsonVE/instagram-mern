const likeController = {};
const Like = require('../models/Like');

likeController.getLikesByPost = async (req, res) => {
    const likes = await Like.find({}).populate('')
}

likeController.getLikeByUser = (req, res) => {
    
}

likeController.Like = (req, res) => {
    
}

likeController.Unlike = (req, res) => {
    
}

module.exports = likeController;