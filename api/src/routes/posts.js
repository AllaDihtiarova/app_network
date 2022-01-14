const router = require('express').Router();
const db = require('../services/db');

router.get('/', async (req, res) => {
  res.send(await db.select().table('posts'));
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  res.send(
    await db('posts')
      .where('id', id)
      .select('id', 'user_id', 'title', 'content_post'),
  );
});

router.post('/', async (req, res) => {
  const { user_id, title, content_post, create_date, update_date } = req.body;

  await db('posts').insert({
    user_id: `${user_id}`,
    title: `${title}`,
    content_post: `${content_post}`,
    create_date: `${create_date}`,
    update_date: `${update_date}`,
  });

  res.send('Post add to database');
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  await db('posts').where('id', id).update(data);

  res.send(`Post id ${id} info updated`);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  await db('posts').where('id', id).del();

  res.send(`Post id ${id} deleted`);
});

module.exports = router;
