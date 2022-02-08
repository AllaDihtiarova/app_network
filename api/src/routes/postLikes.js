const router = require('express').Router();

const {
  getAllLikesToPosts,
  getLikeByIdToPost,
  addLikeToPost,
  deleteLikeToPost,
} = require('../services/store/likes.service');

router.get('/', async (req, res) => res.send(await getAllLikesToPosts()));

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  res.send(await getLikeByIdToPost(id));
});

router.post('/', async (req, res) => {
  const { userId, postId } = req.body;

  res.send(await addLikeToPost(userId, postId));
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  res.send(await deleteLikeToPost(id));
});

module.exports = router;
