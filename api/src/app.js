const express = require('express');
const cors = require('cors');

const { appPort } = require('./services/config');

const usersRoutes = require('./routes/users');
const postsRoutes = require('./routes/posts');
const postLikesRoutes = require('./routes/postLikes');
const commentsRoutes = require('./routes/comments');
const commentLikesRoutes = require('./routes/commentLikes');
const fileUpload = require('./routes/uploadAvatar');
const cloudFileUpload = require('./routes/cloudUploadAvatar');
const getAvatar = require('./routes/getAvatar');

const app = express();

app.use(express.json());
app.use('/images', express.static('images'));

app.use(cors());

app.use('/users', usersRoutes);
app.use('/posts', postsRoutes);
app.use('/posts-likes', postLikesRoutes);
app.use('/comments', commentsRoutes);
app.use('/comments-likes', commentLikesRoutes);
app.use('/uploads', fileUpload);
app.use('/cloud-uploads', cloudFileUpload);
app.use('/get-avatar', getAvatar);

app.listen(appPort, () => {});
