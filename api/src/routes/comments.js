const router = require('express').Router();
const db = require('../services/db');

router.get('/', async (req, res) => {
  res.send(await db.select().table('comments'));
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  res.send(
    await db('comments')
      .where('id', id)
      .select('id', 'comment_content', 'user_id', 'post_id'),
  );
});

router.post('/', async (req, res) => {
  const {
    comment_content,
    create_date,
    update_date,
    reply_to,
    comment_id,
    comment_level,
    user_id,
    post_id,
  } = req.body;

  await db('comments').insert({
    comment_content: `${comment_content}`,
    create_date: `${create_date}`,
    update_date: `${update_date}`,
    reply_to: `${reply_to}`,
    comment_id: `${comment_id}`,
    comment_level: `${comment_level}`,
    user_id: `${user_id}`,
    post_id: `${post_id}`,
  });

  res.send('Comment add to database');
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  await db('comments').where('id', id).update(data);

  res.send(`Comment id ${id} info updated`);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  await db('comments').where('id', id).del();

  res.send(`Comment id ${id} deleted`);
});

module.exports = router;
