const router = require('express').Router();
const db = require('../services/db');

router.get('/', async (req, res) => {
  res.send(await db.select().table('post_likes'));
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  res.send(
    await db('post_likes').where('id', id).select('id', 'user_id', 'post_id'),
  );
});

router.post('/', async (req, res) => {
  const { user_id, post_id } = req.body;

  await db('post_likes').insert({
    user_id: `${user_id}`,
    post_id: `${post_id}`,
  });

  res.send('Post like add to database');
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  await db('post_likes').where('id', id).update(data);

  res.send(`Post like ${id} info updated`);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  await db('post_likes').where('id', id).del();

  res.send(`Post like id ${id} deleted`);
});

module.exports = router;
