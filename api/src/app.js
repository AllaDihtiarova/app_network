const express = require('express');

const { appPort } = require('./services/config');

const usersRoutes = require('./routes/users');
const postsRoutes = require('./routes/posts');
const commentsRoutes = require('./routes/comments');
const comment_likesRoutes = require('./routes/comment_likes');

const app = express();

app.use(express.json());

app.use('/users', usersRoutes);
app.use('/posts', postsRoutes);
app.use('/comments', commentsRoutes);
app.use('/comment_likes', comment_likesRoutes);

app.listen(appPort, () => {});
