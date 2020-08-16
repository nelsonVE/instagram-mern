const { Router } = require('express');
const router = Router();
const { getLikeByUser, getLikesByPost, Like, Unlike } = require('../controllers/like.controller');

router.route('/post/:id')
    .get(getLikesByPost)
    .delete(Unlike);

router.route('/post')
    .post(Like)

router.route('/user/:id')
    .get(getLikeByUser);

module.exports = router;