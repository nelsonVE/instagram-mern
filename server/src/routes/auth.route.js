const { Router } = require('express');
const router = new Router();
const { checkLogin, validateFormSignUp, validateFormSignIn } = require('../middleware/auth.middleware');
const { createUser, signInUser } = require('../controllers/auth.controller');

router.post('/signup', validateFormSignUp, createUser);
router.post('/signin', validateFormSignIn, signInUser);

module.exports = router;