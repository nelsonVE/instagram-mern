const { Router } = require('express');
const router = Router();
const { getPostsByUser, createPost, deletePost, updatePost, getPost } = require('../controllers/post.controller');

router.route('/:id')
    .get(getPost)
    .put(updatePost)
    .delete(deletePost);

router.route('/')
    .post(createPost)

router.route('/user/:id')
    .get(getPostsByUser);

module.exports = router;