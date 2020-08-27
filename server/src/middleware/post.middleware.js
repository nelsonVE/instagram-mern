const { body, validationResult } = require('express-validator');

validateFormPost = [
    body('description')
        .isString(),

    (req, res, next) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(400).json({ errors });
        }
        next();
    }
];

module.exports = {
    validateFormPost
}