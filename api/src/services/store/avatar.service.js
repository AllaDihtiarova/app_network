const db = require('../db');

module.exports = {
  getAvatar: async id => {
    const avatar = await db
      .column('avatar')
      .select()
      .from('users')
      .where('id', id);

    if (avatar.length === 0) {
      return `User avatar with id ${id} not found`;
    }

    return avatar;
  },

  changeAvatar: async (id, link) => {
    try {
      await db('users')
        .where('id', id)
        .update({
          avatar: `${link}`,
        });

      return `Avatar user id ${id} change`;
    } catch (e) {
      return e;
    }
  },

  deleteAvatar: async id => {
    try {
      await db('users').where('id', id).update({
        avatar: null,
      });

      return `Avatar user id ${id} was deleted`;
    } catch (e) {
      return e;
    }
  },
};
