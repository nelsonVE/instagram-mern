const authController = {};
const User = require('../models/User');
const bcrypt = require('bcrypt');

authController.createUser = async (req, res) => {
    const { username, email, password, birthdate, genre } = req.body;
    bcrypt.hash(password, 10)
        .then((hashed) => {
            const user = new User({
                username,
                email,
                password: hashed,
                birthdate,
                genre
            });
        
            user.save()
                .then((user) => {
                    res.status(200).json({ message: 'User created successfully'});
                })
                .catch((err) => {
                    res.status(400).json({ errors: err })
                });
        })
        .catch((err) => {
            res.status(400).json(err);
        });
}

authController.signInUser = (req, res) => {
    const { username, password } = req.body;
    User.findOne({ username })
        .then((user) => {
            if(user){
                bcrypt.compare(password, user.password)
                    .then((match) => {
                        if(match){
                            res.status(200).json({ message: "Successfully signed in." });
                        } else {
                            res.status(400).json({ errors: "Incorrect password." });
                        }
                    })
                    .catch((err) => {
                        res.status(400).json(err);
                    })
            }
        })
        .catch((err) => {
            res.status(400).json(err);
        })

};

module.exports = authController;