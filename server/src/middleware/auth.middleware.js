const { body, validationResult } = require('express-validator')
const User = require('../models/User');
const jwt = require('jsonwebtoken');

validateFormSignUp = [
    body('username')
        .not().isEmpty()
        .isString(),

    body('password')
        .not().isEmpty().bail()
        .isString().bail(),

    body('repassword')
        .not().isEmpty().bail()
        .isString().bail(),

    body('email')
        .not().isEmpty().bail()
        .isEmail().bail()
        .normalizeEmail().bail(),

    body('birthdate')
        .not().isEmpty().bail()
        .isString()
        .isDate(),
    (req, res, next) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(422).json({ errors: errors.array() });
        }
        
        next();
    },
];

const validateFormSignIn = [
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

checkLogin = (req, res, next) => {
    const { authorization } = req.headers;

    if(!authorization){
        return res.status(401).json({ errors: "You must be logged in to see this page." });
    }

    const token = authorization.replace("Bearer ", "");
    jwt.verify(token, process.env.TOKEN, (err, payload) => {
        if(err){
            return res.status(401).json({ errors: "You must be logged in to see this page." });
        }

        const { _id } = payload;
        User.findById(_id)
            .then((user) => {
                req.user = user;
                req.user.password = undefined;
                next();
            })
            .catch((err) => {
                res.status(400).json(err);
            })
    })
}

module.exports = {
    validateFormSignUp,
    validateFormSignIn,
    validateSignUp,
    validateSignIn,
    checkLogin
}