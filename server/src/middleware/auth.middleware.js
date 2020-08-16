const { body, validationResult } = require('express-validator')
const User = require('../models/User');

validateFormSignUp = [
    body('username')
        .not().isEmpty()
        .isString(),

    body('password')
        .not().isEmpty()
        .isString(),

    body('repassword')
        .not().isEmpty()
        .isString(),

    body('email')
        .not().isEmpty()
        .isEmail()
        .normalizeEmail(),
    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];

validateFormSignIn = [
    body('username')
        .not().isEmpty()
        .isString(),

    body('password')
        .not().isEmpty()
        .isString(),

    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];

validateSignUp = async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });
    const email = await User.findOne({ username: req.body.username });
    let errors = [];

    if(user){
        errors.push("Email already registered.");
    }

    if(email){
        errors.push("Username already registered.");
    }

    if(errors.length > 0){
        return res.status(400).json({ errors: errors });
    }

    next();
}

validateSignIn = async (req, res, next) => {
    const user = await User.findOne({ username: req.body.username });
    let errors = [];

    if(user == null){
        errors.push("User doesn't exists.");
    }

    if(errors.length > 0){
        return res.status(400).json({ errors: errors });
    }

    next();
}

module.exports = {
    validateFormSignUp,
    validateFormSignIn,
    validateSignUp,
    validateSignIn
}