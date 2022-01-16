const router = require('express').Router();
const db = require('../services/db');

router.get('/', async (req, res) => {
  const comments = await db.select().table('comments');

  res.send(comments);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const comment = await db('comments')
    .where('id', id)
    .select('id', 'comment_content', 'user_id', 'post_id');

  res.send(comment.length > 0 ? comment : `Comment with ${id} not found`);
});

router.get('/:id/likes', async (req, res) => {
  const { id } = req.params;

  const likes = await db('comment_likes')
    .where('comment_id', id)
    .select('id', 'user_id', 'comment_id');

  res.send(likes.length > 0 ? likes : 'No likes');
});

router.get('/:id/reply', async (req, res) => {
  const { id } = req.params;

  const replyTo = await db('comments')
    .where('reply_to_id', id)
    .select('id', 'user_id', 'comment_content', 'reply_to_id');

  res.send(replyTo.length > 0 ? replyTo : 'No reply');
});

router.post('/', async (req, res) => {
  const { commentContent, createDate, userId, postId } = req.body;

  try {
    await db('comments').insert({
      comment_content: `${commentContent}`,
      create_date: `${createDate}`,
      user_id: `${userId}`,
      post_id: `${postId}`,
    });
  } catch (e) {
    res.send('Something is wrong');
    return;
  }

  res.send('Comment add to database');
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const updateComment = await db('comments').where('id', id).update(data);

  res.send(
    updateComment
      ? `Comment id ${id} info updated`
      : `Comment with id ${id} not found`,
  );
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  const deleteComment = await db('comments').where('id', id).del('id');

  res.send(
    deleteComment.length > 0
      ? `Comment id ${id} deleted`
      : `Comment id ${id} not found`,
  );
});

module.exports = router;
