const db = require('../../utils/db');

module.exports = {
  getAllPosts: async () => {
    const posts = await db.select().table('posts');

    if (posts.length === 0) {
      return 'No likes!';
    }

    return posts;
  },

  getPostById: async id => {
    const post = await db('posts')
      .where('id', id)
      .select('id', 'user_id', 'title', 'content_post')
      .first();

    if (!post) {
      return `Post with id ${id} not found`;
    }

    return post;
  },

  addPost: async (userId, title, contentPost, createDate) => {
    try {
      await db('posts').insert({
        user_id: `${userId}`,
        title: `${title}`,
        content_post: `${contentPost}`,
        create_date: `${createDate}`,
      });

      return 'Post add';
    } catch (e) {
      await db('errors').insert({
        errors: e,
        data: e.message,
      });
      return `Error code ${e.code}. Something went wrong :-(`;
    }
  },

  updatePost: async (id, data) => {
    try {
      await db('posts').where('id', id).update(data);

      return `Post with id ${id} updated`;
    } catch (e) {
      await db('errors').insert({
        errors: e,
        data: e.message,
      });
      return `Error code ${e.code}. Something went wrong :-(`;
    }
  },

  deletePost: async id => {
    const postDeleted = await db('posts').where('id', id).del('id');

    return postDeleted.length > 0
      ? `Post id ${id} deleted`
      : `Post id ${id} not found`;
  },
};
