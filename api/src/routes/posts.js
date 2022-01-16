const router = require('express').Router();
const db = require('../services/db');

router.get('/', async (req, res) => {
  const posts = await db.select().table('posts');

  res.send(posts);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const post = await db('posts')
    .where('id', id)
    .select('id', 'user_id', 'title', 'content_post');

  res.send(post.length > 0 ? post : `Post with id ${id} not found`);
});

router.get('/:id/comments', async (req, res) => {
  const { id } = req.params;

  const comments = await db('comments')
    .where('post_id', id)
    .select('id', 'user_id', 'comment_content', 'create_date', 'post_id');

  res.send(comments.length > 0 ? comments : 'No comments');
});

router.get('/:id/likes', async (req, res) => {
  const { id } = req.params;

  const likes = await db('post_likes')
    .where('post_id', id)
    .select('id', 'user_id', 'post_id');

  res.send(likes.length > 0 ? likes : 'No likes');
});

router.post('/', async (req, res) => {
  const { userId, title, contentPost, createDate } = req.body;

  try {
    await db('posts').insert({
      user_id: `${userId}`,
      title: `${title}`,
      content_post: `${contentPost}`,
      create_date: `${createDate}`,
    });
  } catch (e) {
    res.send('Something is wrong');
    return;
  }

  res.send('Post add to database');
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const updatedUser = await db('posts').where('id', id).update(data);

  res.send(
    updatedUser ? `Post id ${id} info updated` : `Post with id ${id} not found`,
  );
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  const postDeleted = await db('posts').where('id', id).del('id');

  res.send(
    postDeleted.length > 0
      ? `Post id ${id} deleted`
      : `Post id ${id} not found`,
  );
});

module.exports = router;
