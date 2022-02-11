const express = require('express');
const cors = require('cors');

const { appPort } = require('./config/config');
const { addLog } = require('./services/store/logService');

const writeLogs = require('./middleware/writeLogs');
const usersRoutes = require('./routes/users');
const postsRoutes = require('./routes/posts');
const commentsRoutes = require('./routes/comments');

const app = express();

app.use(express.json());
app.use(cors());

app.use(writeLogs(addLog));

app.use('/users', usersRoutes);
app.use('/posts', postsRoutes);
app.use('/comments', commentsRoutes);

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  return res.status(500).send('Something broke!');
});

app.use((req, res) => {
  res.status(404);
  res.send('Page not found');
});

app.listen(appPort, () => {});
