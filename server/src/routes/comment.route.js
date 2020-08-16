const { Router } = require('express');
const router = Router();
const { getUser, updateUser, createUser, deleteUser } = require('../controllers/user.controller');

router.route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser);

router.route('/')
    .post(createUser);

module.exports = router;