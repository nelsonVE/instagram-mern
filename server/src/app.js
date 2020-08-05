const express = require('express');
const app = express();

app.set('port', process.env.PORT || 4000);

app.use('/api/users', require('./routes/user.route'));

module.exports = app;