const db = require('../../utils/db');

module.exports = {
  getAllComents: async () => {
    const comments = await db.select().table('comments');

    if (comments.length === 0) {
      return 'No comments!';
    }

    return comments;
  },

  getComentById: async id => {
    const comment = await db('comments')
      .where('id', id)
      .select('id', 'comment_content', 'user_id', 'post_id')
      .first();

    if (!comment) {
      return `Comment with id ${id} not found`;
    }

    return comment;
  },

  getCommentsByPostId: async id => {
    const comments = await db('comments')
      .where('post_id', id)
      .select('id', 'user_id', 'comment_content', 'create_date', 'post_id');

    if (comments.length === 0) {
      return 'No comments!';
    }

    return comments;
  },

  getReplyById: async id => {
    const replyTo = await db('comments')
      .where('reply_to_id', id)
      .select('id', 'user_id', 'comment_content', 'reply_to_id');

    if (replyTo.length === 0) {
      return 'No reply';
    }

    return replyTo;
  },

  addComment: async (commentContent, createDate, userId, postId) => {
    try {
      await db('comments').insert({
        comment_content: `${commentContent}`,
        create_date: `${createDate}`,
        user_id: `${userId}`,
        post_id: `${postId}`,
      });

      return `Comment to post ${postId} add`;
    } catch (e) {
      await db('errors').insert({
        errors: e,
        data: e.message,
      });
      return `Error code ${e.code}. Something went wrong :-(`;
    }
  },

  updateComment: async (id, data) => {
    try {
      await db('comments').where('id', id).update(data);

      return `Comment with id ${id} updated`;
    } catch (e) {
      await db('errors').insert({
        errors: e,
        data: e.message,
      });
      return `Error code ${e.code}. Comment with id ${id} not updated`;
    }
  },

  deleteComment: async id => {
    const deleteComment = await db('comments').where('id', id).del('id');

    return deleteComment.length > 0
      ? `Comment id ${id} deleted`
      : `Comment id ${id} not found`;
  },
};
