const db = require('../db');

module.exports = {
  getLikesByComentId: async id => {
    const likes = await db('comment_likes')
      .where('comment_id', id)
      .select('id', 'user_id', 'comment_id');

    if (likes.length === 0) {
      return 'No likes!';
    }

    return likes;
  },

  getLikesByPostId: async id => {
    const likes = await db('post_likes')
      .where('post_id', id)
      .select('id', 'user_id', 'post_id');

    if (likes.length === 0) {
      return 'No likes!';
    }

    return likes;
  },

  getAllLikesToComents: async () => {
    const commentLikes = await db.select().table('comment_likes');

    if (commentLikes.length === 0) {
      return 'No likes!';
    }

    return commentLikes;
  },

  getLikeByIdToComment: async id => {
    const commentLikeId = await db('comment_likes')
      .where('id', id)
      .select('id', 'user_id', 'comment_id');

    if (commentLikeId.length === 0) {
      return 'No likes!';
    }

    return commentLikeId;
  },

  addLikeToComment: async (userId, commentId) => {
    try {
      await db('comment_likes').insert({
        user_id: `${userId}`,
        comment_id: `${commentId}`,
      });
      return `Like to comment id ${commentId} add`;
    } catch (error) {
      return error;
    }
  },

  deleteLikeToComment: async id => {
    const deleteComment = await db('comment_likes').where('id', id).del('id');

    return deleteComment.length > 0
      ? `Like id ${id} deleted`
      : `Like with id ${id} not found`;
  },

  getAllLikesToPosts: async () => {
    const postLikes = await db.select().table('post_likes');

    if (postLikes.length === 0) {
      return 'No likes!';
    }

    return postLikes;
  },

  getLikeByIdToPost: async id => {
    const postLike = await db('post_likes')
      .where('id', id)
      .select('id', 'user_id', 'post_id');

    if (postLike.length === 0) {
      return 'No likes!';
    }

    return postLike;
  },

  addLikeToPost: async (userId, postId) => {
    try {
      await db('post_likes').insert({
        user_id: `${userId}`,
        post_id: `${postId}`,
      });
      return `Like to post id ${postId} add`;
    } catch (error) {
      return error;
    }
  },

  deleteLikeToPost: async id => {
    const deleteLikePost = await db('post_likes').where('id', id).del('id');

    return deleteLikePost.length > 0
      ? `Post like id ${id} deleted`
      : `Post like id ${id} not found`;
  },
};
