const { Router } = require('express');
const router = new Router();
const { validationResult } = require('express-validator');
const { validateFormSignUp, validateFormSignIn, validateSignIn, validateSignUp } = require('../middleware/auth.middleware');
const { createUser, signInUser } = require('../controllers/auth.controller');

router.post('/signup', validateFormSignUp, validateSignUp, createUser);
router.post('/signin', validateFormSignIn, validateSignIn, signInUser);

module.exports = router;