const router = require('express').Router();
const db = require('../services/db');

router.get('/', async (req, res) => {
  const postsLikes = await db.select().table('post_likes');

  res.send(postsLikes);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const postLike = await db('post_likes')
    .where('id', id)
    .select('id', 'user_id', 'post_id');

  res.send(
    postLike.length > 0 ? postLike : `Post like with id ${id} not found`,
  );
});

router.post('/', async (req, res) => {
  const { userId, postId } = req.body;

  try {
    await db('post_likes').insert({
      user_id: `${userId}`,
      post_id: `${postId}`,
    });
  } catch (e) {
    res.send('Something is wrong');
    return;
  }

  res.send('Post like add to database');
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const postLikeUpd = await db('post_likes').where('id', id).update(data);

  res.send(
    postLikeUpd
      ? `Post like ${id} info updated`
      : `Post like with id ${id} not found`,
  );
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  const deleteLikePost = await db('post_likes').where('id', id).del('id');

  res.send(
    deleteLikePost.length > 0
      ? `Post like id ${id} deleted`
      : `Post like id ${id} not found`,
  );
});

module.exports = router;
