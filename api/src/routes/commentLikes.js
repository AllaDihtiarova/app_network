const router = require('express').Router();

const {
  getAllLikesToComents,
  getLikeByIdToComment,
  addLikeToComment,
  deleteLikeToComment,
} = require('../services/store/likes.service');

router.get('/', async (req, res) => res.send(await getAllLikesToComents()));

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  res.send(await getLikeByIdToComment(id));
});

router.post('/', async (req, res) => {
  const { userId, commentId } = req.body;

  res.send(await addLikeToComment(userId, commentId));
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  res.send(await deleteLikeToComment(id));
});

module.exports = router;
