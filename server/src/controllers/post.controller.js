const postController = {};
const Post = require('../models/Post');
const { post } = require('../routes/user.route');

postController.getPostsByUser = (req, res) => {
    const { id } = req.params;
    Post.find({ author: id })
        .then((posts) => {
            if(posts){
                res.status(200).json({ posts });
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

postController.getAllPosts = (req, res) => {
    Post.find()
        .populate("author","_id username")
        .then((post) => {
            if(post){
                console.log(post)
                res.status(200).json({ post });
            } else {
                res.status(200).json({})
            }
        })
        .catch((err) => {
            res.status(401).json({ err: "asd" });
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

postController.likePost = (req, res) => {
    const { id } = req.body;
    Post.findByIdAndUpdate(id, {
        $push:{
            likes:req.user._id
        }
    }, {
        new: true
    })
    .exec((err, result) => {
        if(err){
            return res.status(422).json({error: err})
        }

        res.json(result);
    })
}

postController.unlikePost = (req, res) => {
    const { id } = req.body;
    Post.findByIdAndUpdate(id, {
        $pull:{
            likes:req.user._id
        }
    }, {
        new: true
    })
    .exec((err, result) => {
        if(err){
            return res.status(422).json({error: err})
        }

        res.json(result);
    })
}

postController.updatePost = (req, res) => {
    
}

postController.deletePost = (req, res) => {
    
}

module.exports = postController;