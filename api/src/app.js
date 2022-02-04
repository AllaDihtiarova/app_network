const express = require('express');
const path = require('path');
const cors = require('cors');

const { appPort } = require('./services/config');

const usersRoutes = require('./routes/users');
const postsRoutes = require('./routes/posts');
const post_likesRoutes = require('./routes/post_likes');
const commentsRoutes = require('./routes/comments');
const comment_likesRoutes = require('./routes/comment_likes');
const fileUpload = require('./routes/upload.route');
const loginsRoutes = require('./routes/logins');

const app = express();

app.use(
  express.json({
    extended: true,
  }),
);

app.use('images', express.static(path.join(__dirname, 'images')));

app.use(cors());

app.use('/users', usersRoutes);
app.use('/posts', postsRoutes);
app.use('/post_likes', post_likesRoutes);
app.use('/comments', commentsRoutes);
app.use('/comment_likes', comment_likesRoutes);
app.use('/upload', fileUpload);
app.use('/logins', loginsRoutes);

app.listen(appPort, () => {});
