const cors = require('cors');
const express = require('express');
const app = express();

app.set('port', process.env.PORT || 4000);

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth.route'));
app.use('/api/user', require('./routes/user.route'));
app.use('/api/post', require('./routes/post.route'));
app.use('/api/like', require('./routes/like.route'));
app.use('/api/comment', require('./routes/comment.route'));

module.exports = app;