const router = require('express').Router();
const db = require('../services/db');

router.get('/', async (req, res) => {
  const commentLikes = await db.select().table('comment_likes');
  res.send(commentLikes);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const commentLikesId = await db('comment_likes')
    .where('id', id)
    .select('id', 'user_id', 'comment_id');

  res.send(commentLikesId);
});

router.post('/', async (req, res) => {
  const { user_id, comment_id } = req.body;

  await db('comment_likes').insert({
    user_id: `${user_id}`,
    comment_id: `${comment_id}`,
  });

  res.send('Comment like add to database');
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  await db('comment_likes').where('id', id).update(data);

  res.send(`Comment like ${id} info updated`);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  await db('comment_likes').where('id', id).del();

  res.send(`Comment like id ${id} deleted`);
});

module.exports = router;
