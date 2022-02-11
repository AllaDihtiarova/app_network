const router = require('express').Router();

const asyncErrorHandler = require('../services/asyncErrorHandler');

const {
  getAllComents,
  getComentById,
  getReplyById,
  addComment,
  updateComment,
  deleteComment,
} = require('../services/store/comments.service');

const {
  getAllLikesToComents,
  getLikesByComentId,
  getLikeByIdToComment,
  addLikeToComment,
  deleteLikeToComment,
} = require('../services/store/likes.service');

router.get(
  '/',
  asyncErrorHandler(async (req, res) => res.send(await getAllComents())),
);

router.get(
  '/likes/',
  asyncErrorHandler(async (req, res) => {
    res.send(await getAllLikesToComents());
  }),
);

router.get(
  '/:id',
  asyncErrorHandler(async (req, res) => {
    const { id } = req.params;

    res.send(await getComentById(id));
  }),
);

router.get(
  '/likes/:id',
  asyncErrorHandler(async (req, res) => {
    const { id } = req.params;

    res.send(await getLikeByIdToComment(id));
  }),
);

router.get(
  '/:id/likes',
  asyncErrorHandler(async (req, res) => {
    const { id } = req.params;

    res.send(await getLikesByComentId(id));
  }),
);

router.get(
  '/:id/reply',
  asyncErrorHandler(async (req, res) => {
    const { id } = req.params;

    res.send(await getReplyById(id));
  }),
);

router.post(
  '/',
  asyncErrorHandler(async (req, res) => {
    const { commentContent, createDate, userId, postId } = req.body;

    res.send(await addComment(commentContent, createDate, userId, postId));
  }),
);

router.post(
  '/likes/',
  asyncErrorHandler(async (req, res) => {
    const { userId, commentId } = req.body;

    res.send(await addLikeToComment(userId, commentId));
  }),
);

router.put(
  '/:id',
  asyncErrorHandler(async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    res.send(await updateComment(id, data));
  }),
);

router.delete(
  '/:id',
  asyncErrorHandler(async (req, res) => {
    const { id } = req.params;

    res.send(await deleteComment(id));
  }),
);

router.delete(
  '/likes/:id',
  asyncErrorHandler(async (req, res) => {
    const { id } = req.params;

    res.send(await deleteLikeToComment(id));
  }),
);

module.exports = router;
