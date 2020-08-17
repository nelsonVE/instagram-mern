const { Router } = require('express');
const router = Router();
const { getPostsByUser, createPost, deletePost, updatePost, getPost } = require('../controllers/post.controller');
const { validateFormPost } = require('../middleware/post.middleware');
const { checkLogin } = require('../middleware/auth.middleware');
const { route } = require('./user.route');

router.route('/:id')
    .all(checkLogin)
    .get(getPost)
    .put(updatePost)
    .delete(deletePost);

router.route('/')
    .all(validateFormPost)
    .all(checkLogin)
    .post(createPost)

router.route('/user/:id')
    .all(checkLogin)
    .get(getPostsByUser);

module.exports = router;