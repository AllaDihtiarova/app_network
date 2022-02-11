const router = require('express').Router();

const asyncErrorHandler = require('../services/asyncErrorHandler');

const { getCommentsByPostId } = require('../services/store/comments.service');

const {
  getAllPosts,
  getPostById,
  addPost,
  updatePost,
  deletePost,
} = require('../services/store/post.service');

const {
  getLikesByPostId,
  getAllLikesToPosts,
  getLikeByIdToPost,
  addLikeToPost,
  deleteLikeToPost,
} = require('../services/store/likes.service');

router.get(
  '/',
  asyncErrorHandler(async (req, res) => res.send(await getAllPosts())),
);

router.get(
  '/likes/',
  asyncErrorHandler(async (req, res) => res.send(await getAllLikesToPosts())),
);

router.get(
  '/:id',
  asyncErrorHandler(async (req, res) => {
    const { id } = req.params;

    res.send(await getPostById(id));
  }),
);

router.get(
  '/likes/:id',
  asyncErrorHandler(async (req, res) => {
    const { id } = req.params;

    res.send(await getLikeByIdToPost(id));
  }),
);

router.get(
  '/:id/comments',
  asyncErrorHandler(async (req, res) => {
    const { id } = req.params;

    res.send(await getCommentsByPostId(id));
  }),
);

router.get(
  '/:id/likes',
  asyncErrorHandler(async (req, res) => {
    const { id } = req.params;

    res.send(await getLikesByPostId(id));
  }),
);

router.post(
  '/',
  asyncErrorHandler(async (req, res) => {
    const { userId, title, contentPost, createDate } = req.body;

    res.send(await addPost(userId, title, contentPost, createDate));
  }),
);

router.post(
  '/likes/',
  asyncErrorHandler(async (req, res) => {
    const { userId, postId } = req.body;

    res.send(await addLikeToPost(userId, postId));
  }),
);

router.put(
  '/:id',
  asyncErrorHandler(async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    res.send(await updatePost(id, data));
  }),
);

router.delete(
  '/:id',
  asyncErrorHandler(async (req, res) => {
    const { id } = req.params;

    res.send(await deletePost(id));
  }),
);

router.delete(
  '/likes/:id',
  asyncErrorHandler(async (req, res) => {
    const { id } = req.params;

    res.send(await deleteLikeToPost(id));
  }),
);

module.exports = router;
