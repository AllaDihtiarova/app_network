const router = require('express').Router();

const {
  getAllComents,
  getComentById,
  getReplyById,
  addComment,
  updateComment,
  deleteComment,
} = require('../services/store/comments.service');

const { getLikesByComentId } = require('../services/store/likes.service');

router.get('/', async (req, res) => res.send(await getAllComents()));

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  res.send(await getComentById(id));
});

router.get('/:id/likes', async (req, res) => {
  const { id } = req.params;

  res.send(await getLikesByComentId(id));
});

router.get('/:id/reply', async (req, res) => {
  const { id } = req.params;

  res.send(await getReplyById(id));
});

router.post('/', async (req, res) => {
  const { commentContent, createDate, userId, postId } = req.body;

  res.send(await addComment(commentContent, createDate, userId, postId));
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  res.send(await updateComment(id, data));
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  res.send(await deleteComment(id));
});

module.exports = router;
