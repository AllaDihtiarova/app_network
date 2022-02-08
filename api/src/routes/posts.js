const router = require('express').Router();

const {
  getAllPosts,
  getPostById,
  addPost,
  updatePost,
  deletePost,
} = require('../services/store/post.service');
const { getCommentsByPostId } = require('../services/store/comments.service');
const { getLikesByPostId } = require('../services/store/likes.service');

router.get('/', async (req, res) => res.send(await getAllPosts()));

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  res.send(await getPostById(id));
});

router.get('/:id/comments', async (req, res) => {
  const { id } = req.params;

  res.send(await getCommentsByPostId(id));
});

router.get('/:id/likes', async (req, res) => {
  const { id } = req.params;

  res.send(await getLikesByPostId(id));
});

router.post('/', async (req, res) => {
  const { userId, title, contentPost, createDate } = req.body;

  res.send(await addPost(userId, title, contentPost, createDate));
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  res.send(await updatePost(id, data));
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  res.send(await deletePost(id));
});

module.exports = router;
