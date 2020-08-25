const { body, validationResult } = require('express-validator')
const User = require('../models/User');
const jwt = require('jsonwebtoken');

validateFormSignUp = [
    body('username')
        .not().isEmpty().withMessage('Username cannot be empty')
        .isString()
        .custom(async value => {
            return User.find({username: value}).then(user => {
                if (user && user.length > 0) {
                    return Promise.reject('Username already in use');
                }
              });
        }),

    body('password')
        .not().isEmpty().withMessage('Password cannot be empty').bail()
        .isString().bail(),

    body('repassword')
        .not().isEmpty().withMessage('Re-Password cannot be empty').bail()
        .isString().withMessage('Password must be a string').bail()
        .custom((value, { req }) => {
            if(value !== req.body.password){
                throw new Error("Passwords doesn't match");
            }

            return true;
        }),

    body('email')
        .not().isEmpty().withMessage('E-mail cannot be empty').bail()
        .isEmail().withMessage('Invalid e-mail format').bail()
        .normalizeEmail().bail()
        .custom(value => {
            return User.find({email: value}).then(user => {
                if (user && user.length > 0) {
                    return Promise.reject('E-mail already in use');
                }
            });
        }),

    body('birthdate')
        .not().isEmpty().withMessage('Birthdate cannot be empty').bail(),

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
        .not().isEmpty().withMessage('Username cannot be empty')
        .isString()
        .custom(value => {
            return User.find({username: value}).then(user => {
                if (user && user.length == 0) {
                    return Promise.reject('Username doesn\'t exists');
                }
              });
        }),

    body('password')
        .not().isEmpty().withMessage('Password cannot be empty')
        .isString(),

    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];

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
    checkLogin
}