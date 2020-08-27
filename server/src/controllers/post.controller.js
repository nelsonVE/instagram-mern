const postController = {};
const Post = require('../models/Post');

postController.getPostsByUser = (req, res) => {
    const { id } = req.params;
    Post.find({ author: id })
        .then((posts) => {
            if(posts){
                res.status(200).json({ posts: posts });
            } else {
                res.status(200).json({})
            }
        })
        .catch((err) => {
            res.status(400).json(err);
        })
}

postController.getPost = (req, res) => {
    const { id } = req.params;
    Post.findById(id)
        .then((post) => {
            if(post){
                res.status(200).json({ post: post });
            } else {
                res.status(200).json({})
            }
        })
        .catch((err) => {
            res.status(400).json(err);
        })
}

postController.createPost = (req, res) => {
    const { photo, description } = req.body

    const post = new Post({
        description,
        author: req.user,
        photo,
        author: req.user
    });

    post.save()
        .then((post) => {
            res.status(200).json({ messages: "Post created successfully" });
        })
        .catch((err) => {
            res.status(400).json({ errors: err });
        })

}

postController.updatePost = (req, res) => {
    
}

postController.deletePost = (req, res) => {
    
}

module.exports = postController;