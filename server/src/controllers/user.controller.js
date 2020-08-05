const userController = {};
const User = require('../models/User');

userController.getUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);

    res.json(user);
};

userController.createUser = async (req, res) => {
    const { username, password, email, birthdate, genre } = req.body;
    const user = new User({
        username,
        password,
        email,
        birthdate,
        genre
    });

    await user.save();

    res.json({ response: 'User saved successfully' });
};

userController.deleteUser = async(req, res) => {
    const { id } = req.params;
    const user = await User.findOneAndDelete(id);

    res.json({ response: 'User deleted successfully' });
};

userController.updateUser = async(req, res) => {
    const { id } = req.params;
    const { username, password, email, birthdate, genre } = req.body;
    const user = await User.findOneAndUpdate(id, {
        username,
        password,
        email,
        birthdate,
        genre
    });

    res.json({ response: 'User saved successfully' });
};

module.exports = userController;